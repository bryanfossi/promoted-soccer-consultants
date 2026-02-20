'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const targetPosition = element.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo}>
  <img 
    src="/promoted-soccer-consultants.png" 
    alt="Promoted Soccer Consultants" 
    className={styles.logoImage}
  />
</a>
        
        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
  <li className={styles.dropdown}>
    <a href="/#services" className={styles.dropdownToggle}>
      Services
    </a>
    <ul className={styles.dropdownMenu}>
      <li><a href="/club-consulting">Club Consulting</a></li>
      <li><a href="/fuse-id">FUSE-ID Recruiting Services</a></li>
    </ul>
  </li>
  <li><a href="/ai-assistant">AI Assistant</a></li>
  <li><a href="/#why-us">Why Us</a></li>
  <li><a href="/#resources">Resources</a></li>
  <li><a href="/#about">About</a></li>
</ul>
        
        <a href="/#contact" className={styles.navCta}>
  Get Started
</a>
        
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
