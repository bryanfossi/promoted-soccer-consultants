import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './blog.module.css'

export const metadata = {
  title: 'Recruiting Education',
  description:
    'Free articles and guides on college soccer recruiting — NCAA rules, scholarships, coach communication, and the questions families actually ask.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Recruiting Education | Promoted Soccer Consultants',
    description:
      'Free articles on college soccer recruiting — NCAA rules, scholarships, coach communication, and more.',
    url: 'https://www.promotedsoccerconsultants.com/blog',
    type: 'website',
  },
}

const posts = [
  {
    slug: 'how-many-d1-soccer-scholarships',
    title: 'How Many D1 Soccer Scholarships Are There — And What Does That Mean for Your Player?',
    description:
      'D1 men\'s programs get 9.9 scholarships split across rosters of 25–30. Most athletes receive partial aid, not full rides. Here\'s what families need to understand before building a recruiting strategy around D1.',
    tag: 'NCAA Rules & Scholarships',
  },
]

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Recruiting Education',
  description:
    'Free articles and guides on college soccer recruiting from Promoted Soccer Consultants.',
  url: 'https://www.promotedsoccerconsultants.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Promoted Soccer Consultants',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.promotedsoccerconsultants.com/promoted-soccer-consultants.png',
    },
  },
  blogPost: posts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://www.promotedsoccerconsultants.com/blog/${post.slug}`,
    author: { '@type': 'Person', name: 'Bryan Fossi' },
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
          <h1 className="serif">What Every Soccer Family Should Know</h1>
          <p>
            Straight-talk articles on NCAA rules, scholarships, coach communication, and how to
            find the right fit — from consultants who&apos;ve been on both sides of the recruiting
            table.
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
            Our free consultation is exactly that — free. Bring your player&apos;s specific
            situation and we&apos;ll give you an honest assessment.
          </p>
          <a
            href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
