import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className="serif">One company. Three tools. Every sport.</h1>
          <p>
            <strong>ClubStack</strong> runs the club. <strong>Ask The Gaffer</strong> preps the
            coach. <strong>FUSE-ID</strong> gets the family recruited — three tools from a coach
            who&apos;s hit every one of these problems himself.
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
              ClubStack waitlist open → clubstack.online
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
