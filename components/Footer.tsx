import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <Image
            src="/psc-logo-full.png"
            alt="Promoted Sports Consultants"
            width={1600}
            height={533}
            sizes="(max-width: 768px) 220px, 280px"
            className={styles.footerLogo}
          />
          <p>Recruiting and club operations, redesigned for every sport.</p>
        </div>
        <div className={styles.footerSection}>
          <h4 className="serif">Products</h4>
          <a href="/fuse-id">FUSE-ID</a>
          <a href="/clubstack">Clubstack</a>
          <a href="/ask-the-gaffer">Ask The Gaffer</a>
        </div>
        <div className={styles.footerSection}>
          <h4 className="serif">Services</h4>
          <a href="/recruiting-services">Recruiting Services</a>
          <a href="/club-consulting">Club Consulting</a>
        </div>
        <div className={styles.footerSection}>
          <h4 className="serif">Education</h4>
          <a href="/free-resources">Free Resources</a>
          <a href="/blog">Blog</a>
        </div>
        <div className={styles.footerSection}>
          <h4 className="serif">Contact</h4>
          <a href="mailto:bryan.fossi@promotedsoccerconsultants.com">Email Us</a>
          <a href="https://calendar.app.google/96Z4Kgp9mLh35sMj9" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <p>
          <strong>FUSE-ID</strong> is an AI-powered college recruiting platform operated by
          Promoted Soccer Consultants, LLC. FUSE-ID is an educational tool and does not act as
          an agent, guarantee scholarships, roster positions, or recruiting outcomes, and does
          not communicate with college coaches on behalf of athletes.
        </p>
        <p>
          <strong>Clubstack</strong> is a club management software platform operated by
          Promoted Soccer Consultants, LLC. Clubstack is a business operations tool for clubs
          and is not a youth-protection, background-check, or sanctioning organization.
        </p>
        <p>
          <strong>Recruiting Services</strong> and <strong>Club Consulting</strong> are
          education and consulting services. We do not act as agents, guarantee scholarships,
          roster positions, or recruiting outcomes, and do not negotiate with college coaches on
          behalf of athletes. All guidance is provided for educational purposes and in
          accordance with NCAA, NAIA, and NJCAA rules.
        </p>
      </div>

      <div className={styles.copyright}>
        &copy; 2026 Promoted Soccer Consultants, LLC. All rights reserved.
      </div>
    </footer>
  )
}
