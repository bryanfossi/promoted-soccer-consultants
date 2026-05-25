import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className="serif">Recruiting and club operations, redesigned for every sport.</h1>
          <p>
            PSC builds the tools families and clubs actually need — <strong>FUSE-ID</strong> for
            AI-powered college recruiting, <strong>Clubstack</strong> for running a club — backed
            by a coach who&apos;s done both.
          </p>
          <div className={styles.heroCtas}>
            <a
              href="/fuse-id"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Explore FUSE-ID
            </a>
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              className={`${styles.btn} ${styles.btnSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Consultation
            </a>
          </div>
          <p className={styles.ctaSubtext}>
            30 minutes &middot; Free &middot; No pitch &nbsp;·&nbsp;{' '}
            <a
              href="https://clubstack.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clubstack waitlist open → clubstack.online
            </a>
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            src="/psc-logo-full.png"
            alt=""
            width={1600}
            height={533}
            priority
            sizes="(max-width: 768px) 280px, 420px"
            className={styles.heroLogo}
          />
        </div>
      </div>
    </section>
  )
}
