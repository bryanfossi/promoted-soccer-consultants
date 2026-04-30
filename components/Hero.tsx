import styles from './Hero.module.css'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const targetPosition = element.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className="serif">Clear Guidance for Soccer Clubs, Players, and Families</h1>
          <p>Helping soccer organizations grow stronger and helping families navigate the college recruiting process with clarity, honesty, and NCAA-compliant education.</p>
          <div className={styles.heroCtas}>
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              className={`${styles.btn} ${styles.btnPrimary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Consultation
            </a>
            <a href="/free-resources" className={`${styles.btn} ${styles.btnSecondary}`}>
              Free Resources
            </a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img 
            src="/promoted-soccer-consultants.png" 
            alt="Promoted Soccer Consultants" 
            className={styles.heroLogo}
          />
        </div>
      </div>
    </section>
  )
}
