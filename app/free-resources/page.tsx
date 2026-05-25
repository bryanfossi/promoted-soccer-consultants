import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './free-resources.module.css'

export const metadata = {
  title: 'Free Resources',
  description:
    'Free college recruiting resources — webinars, videos, and expert guidance for athletes and families navigating the recruiting process.',
  alternates: { canonical: '/free-resources' },
  openGraph: {
    title: 'Free Resources | Promoted Sports Consultants',
    description:
      'Free college recruiting webinars, videos, and expert guidance for athletes and families.',
    url: 'https://www.promotedsoccerconsultants.com/free-resources',
    type: 'website',
  },
}

export default function FreeResourcesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroBadge}>No Cost, No Catch</div>
          <h1 className="serif">Free Resources for Athletes &amp; Families</h1>
          <p>
            Navigating the college recruiting process shouldn&apos;t require a paid consultant to get
            started. PSC is committed to giving every family access to honest, expert guidance —
            completely free. The library leads with soccer today and expands as new sports come
            online.
          </p>
          <a href="#latest-episode" className={styles.heroCta}>
            Watch the Latest Webinar ↓
          </a>
        </div>
      </section>

      {/* Latest Video */}
      <section id="latest-episode" className={styles.latestVideo}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Latest Episode</span>
            <h2 className="serif">Watch Our Most Recent Webinar</h2>
            <p className={styles.subtitle}>
              Our webinar series breaks down the most important topics in college recruiting —
              straight from a coach who&apos;s been on both sides of the process.
            </p>
          </div>

          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/j_XsDcmPAZ0"
              title="Promoted Sports Consultants Webinar"
              width="860"
              height="484"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className={styles.channelCta}>
            <p>Want more webinars, recruiting tips, and expert breakdowns?</p>
            <a
              href="https://www.youtube.com/@PromotedSoccerConsultantsLLC"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelButton}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className={styles.whatYouFind}>
        <div className={styles.container}>
          <h2 className="serif">What We Cover</h2>
          <p className={styles.subtitle}>
            Our content is built around the real questions families are asking — not generic advice
            recycled from a blog post.
          </p>
          <div className={styles.topicsGrid}>
            <div className={styles.topicCard}>
              <div className={styles.topicIcon}>🎓</div>
              <h3 className="serif">NCAA Rules & Timelines</h3>
              <p>When coaches can contact your player, what the recruiting calendar looks like, and how to stay compliant.</p>
            </div>
            <div className={styles.topicCard}>
              <div className={styles.topicIcon}>📧</div>
              <h3 className="serif">Coach Communication</h3>
              <p>How to write a strong first email, what to say on a campus visit, and how to follow up without being annoying.</p>
            </div>
            <div className={styles.topicCard}>
              <div className={styles.topicIcon}>🎯</div>
              <h3 className="serif">Evaluating Fit</h3>
              <p>How to find schools where your athlete will thrive — athletically, academically, and personally.</p>
            </div>
            <div className={styles.topicCard}>
              <div className={styles.topicIcon}>💰</div>
              <h3 className="serif">Scholarships & Financial Aid</h3>
              <p>The difference between athletic scholarships and financial aid, and how families can maximize both.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className="serif">Ready to Go Deeper?</h2>
          <p>
            Free resources are a great start — but if you want a personalized roadmap built around
            your athlete&apos;s specific goals and timeline, PSC can help. Try FUSE-ID free, or
            schedule a call with Bryan.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/fuse-id" className={styles.ctaButton}>
              Explore FUSE-ID
            </a>
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              className={styles.ctaButtonSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
