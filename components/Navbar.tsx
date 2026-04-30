'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
      setServicesOpen(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMenu = () => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo} onClick={closeMenu}>
          <img
            src="/promoted-soccer-consultants.png"
            alt="Promoted Soccer Consultants"
            className={styles.logoImage}
          />
        </a>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <li className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ''}`}>
            <button
              type="button"
              className={styles.dropdownToggle}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <span className={styles.dropdownArrow} aria-hidden="true">▾</span>
            </button>
            <ul className={styles.dropdownMenu}>
              <li><a href="/club-consulting" onClick={closeMenu}>Club Consulting</a></li>
              <li><a href="/fuse-id" onClick={closeMenu}>FUSE-ID Recruiting Services</a></li>
            </ul>
          </li>
          <li><a href="/ai-assistant" onClick={closeMenu}>AI Assistant</a></li>
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
