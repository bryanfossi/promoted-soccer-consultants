import styles from './Products.module.css'

const products = [
  {
    name: 'FUSE-ID',
    eyebrow: 'AI College Recruiting Platform',
    description:
      'The AI college recruiting platform for student-athletes — and the parents in their corner. Match scoring across 2,400+ programs, AI-drafted coach emails, full recruiting pipeline, offer comparisons.',
    features: [
      'AI match engine — 8 scoring dimensions',
      'Personalized coach email drafting',
      'Recruiting pipeline & offers tracker',
      'Shareable athlete profile + parent access',
    ],
    cta: 'Explore FUSE-ID',
    href: '/fuse-id',
    external: false,
    accent: 'green',
    status: 'Live · Free to start',
  },
  {
    name: 'ClubStack',
    eyebrow: 'Club Management Platform',
    description:
      'Run your club. Not your inbox. Registration, payments, rosters, scheduling, and communication — with the only recruiting integration on the market. Built for multi-sport clubs.',
    features: [
      'Registration & Stripe-powered payments',
      'Master schedule with facility-grid view',
      'Broadcast comms + DMs in one place',
      'Recruiting integration (PSC exclusive)',
    ],
    cta: 'See ClubStack',
    href: '/clubstack',
    external: false,
    accent: 'gold',
    status: 'Coming Soon · Join the waitlist',
  },
] as const

export default function Products() {
  return (
    <section className={styles.products} id="products" aria-labelledby="products-heading">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrow}>The platforms</div>
          <h2 id="products-heading" className="serif">Two products. One mission. Every sport.</h2>
          <p>
            FUSE-ID and ClubStack are independent platforms with separate buyers and separate
            jobs. They feed each other — and they both run on the recruiting expertise PSC has
            been building since day one.
          </p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <article
              key={product.name}
              className={`${styles.productCard} ${product.accent === 'green' ? styles.accentGreen : styles.accentGold}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.statusPill}>{product.status}</div>
                <h3 className="serif">{product.name}</h3>
                <p className={styles.productEyebrow}>{product.eyebrow}</p>
              </div>

              <p className={styles.productDescription}>{product.description}</p>

              <ul className={styles.featureList}>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {product.external ? (
                <a
                  href={product.href}
                  className={styles.productCta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.cta} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <a href={product.href} className={styles.productCta}>
                  {product.cta} <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
