import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { posts } from './posts'
import styles from './blog.module.css'

export const metadata = {
  title: 'Recruiting Education',
  description:
    'Free articles and guides on college recruiting — NCAA rules, scholarships, coach communication, and the questions families actually ask. Soccer-deep today, multi-sport as the library grows.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Recruiting Education | Promoted Sports Consultants',
    description:
      'Free articles on college recruiting — NCAA rules, scholarships, coach communication, and more.',
    url: 'https://www.promotedsoccerconsultants.com/blog',
    type: 'website',
  },
}


const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Recruiting Education',
  description:
    'Free articles and guides on college recruiting from Promoted Sports Consultants.',
  url: 'https://www.promotedsoccerconsultants.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Promoted Sports Consultants',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.promotedsoccerconsultants.com/psc-logo-full.png',
    },
  },
  blogPost: posts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://www.promotedsoccerconsultants.com/blog/${post.slug}`,
    author: { '@id': 'https://www.promotedsoccerconsultants.com#bryan-fossi' },
  })),
}

export default function BlogIndex() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroBadge}>Recruiting Education</div>
          <h1 className="serif">Recruiting education from a coach who lives it.</h1>
          <p>
            Straight-talk articles on NCAA rules, scholarships, coach communication, and how to
            find the right fit — from a coach who&apos;s been on both sides of the recruiting
            table. The current library is soccer-deep; multi-sport content expands as new sports
            come online.
          </p>
        </div>
      </section>

      <section className={styles.posts}>
        <div className={styles.container}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <span className={styles.postTag}>{post.tag}</span>
              <h2 className="serif">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p>{post.description}</p>
              <a href={`/blog/${post.slug}`} className={styles.readMore}>
                Read the article →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className="serif">Have a Question That Isn&apos;t Answered Here?</h2>
          <p>
            Try FUSE-ID free, or bring your athlete&apos;s specific situation to a free
            consultation — your call.
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
