import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
  <img 
    src="/promoted-soccer-consultants.png" 
    alt="Promoted Soccer Consultants" 
    className={styles.footerLogo}
  />
  <p>Providing clarity and guidance in soccer club development and college recruiting.</p>
</div>
        <div className={styles.footerSection}>
          <h4 className="serif">Services</h4>
          <a href="/club-consulting">Club Consulting</a>
          <a href="/fuse-id">FUSE-ID Recruiting</a>
          <a href="/ai-assistant">AI Assistant</a>
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
        <strong>Disclaimer:</strong> FUSE-ID is a college recruiting education and consulting program operated by Promoted Soccer Consultants, LLC. We do not act as agents, do not guarantee athletic scholarships, roster positions, or recruitment outcomes, and do not negotiate with college coaches on behalf of athletes. All guidance is provided for educational purposes and in accordance with NCAA, NAIA, and NJCAA rules.
      </div>
      
      <div className={styles.copyright}>
        &copy; 2024 Promoted Soccer Consultants, LLC. All rights reserved.
      </div>
    </footer>
  )
}
