'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setProductsOpen(false)
      setServicesOpen(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMenu = () => {
    setMobileMenuOpen(false)
    setProductsOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Primary">
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/psc-logo-compact.png"
            alt="Promoted Sports Consultants"
            width={1200}
            height={400}
            priority
            sizes="(max-width: 900px) 108px, 132px"
            className={styles.logoImage}
          />
        </a>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <li className={`${styles.dropdown} ${productsOpen ? styles.dropdownOpen : ''}`}>
            <button
              type="button"
              className={styles.dropdownToggle}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => {
                setProductsOpen(!productsOpen)
                setServicesOpen(false)
              }}
            >
              Products
              <span className={styles.dropdownArrow} aria-hidden="true">▾</span>
            </button>
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="/fuse-id" onClick={closeMenu}>FUSE-ID</a>
              </li>
              <li>
                <a href="/clubstack" onClick={closeMenu}>Clubstack</a>
              </li>
            </ul>
          </li>
          <li className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ''}`}>
            <button
              type="button"
              className={styles.dropdownToggle}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => {
                setServicesOpen(!servicesOpen)
                setProductsOpen(false)
              }}
            >
              Services
              <span className={styles.dropdownArrow} aria-hidden="true">▾</span>
            </button>
            <ul className={styles.dropdownMenu}>
              <li><a href="/recruiting-services" onClick={closeMenu}>Recruiting Services</a></li>
              <li><a href="/club-consulting" onClick={closeMenu}>Club Consulting</a></li>
            </ul>
          </li>
          <li><a href="/free-resources" onClick={closeMenu}>Free Resources</a></li>
          <li><a href="/blog" onClick={closeMenu}>Blog</a></li>
          <li><a href="/#why-us" onClick={closeMenu}>Why Us</a></li>
          <li><a href="/#about" onClick={closeMenu}>About</a></li>
          <li className={styles.mobileCtaItem}>
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={styles.mobileCta}
            >
              Get Started
            </a>
          </li>
        </ul>

        <a
          href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navCta}
        >
          Get Started
        </a>

        <button
          className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.mobileMenuBtnOpen : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
