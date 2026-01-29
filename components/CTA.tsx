import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div className={styles.sectionContainer}>
        <h2 className="serif">Ready to Get Started?</h2>
        <p>Whether you&apos;re a club administrator looking to strengthen your organization or a family beginning the recruiting journey, we&apos;re here to help.</p>
        <a href="https://calendar.app.google/96Z4Kgp9mLh35sMj9" className={`${styles.btn} ${styles.btnPrimary}`} target="_blank" rel="noopener noreferrer">
  Schedule Consultation
</a>
      </div>
    </section>
  )
}
