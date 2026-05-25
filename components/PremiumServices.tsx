import styles from './PremiumServices.module.css'

const services = [
  {
    name: 'Recruiting Services',
    audience: 'For families',
    description:
      'A former college coach guiding the recruiting process — evaluation, communication, decision support, and offer review. FUSE-ID Pro included with every package.',
    priceRange: 'Basic $350 · Premier $2,500 · Elite $5,000',
    cta: 'See Recruiting Services',
    href: '/recruiting-services',
  },
  {
    name: 'Club Consulting',
    audience: 'For clubs',
    description:
      'Strategic planning, club audits, coach education, player pathway design, and parent communication frameworks. The human-led tier of club work, alongside Clubstack.',
    priceRange: 'Custom engagements',
    cta: 'See Club Consulting',
    href: '/club-consulting',
  },
] as const

export default function PremiumServices() {
  return (
    <section className={styles.premium} aria-labelledby="premium-heading">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>Want hands-on guidance?</div>
          <h2 id="premium-heading" className="serif">
            Two human-led services for families and clubs that want a coach in their corner.
          </h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <a key={service.name} href={service.href} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <span className={styles.audienceTag}>{service.audience}</span>
                <h3 className="serif">{service.name}</h3>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.cardFooter}>
                <p className={styles.priceLine}>{service.priceRange}</p>
                <span className={styles.cardCta}>
                  {service.cta} <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
