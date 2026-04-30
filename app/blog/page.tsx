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
    slug: 'college-soccer-coach-recruiting-criteria',
    title: 'What College Soccer Coaches Actually Look For When Recruiting',
    description:
      "Coaches don't recruit the best player. They recruit the best fit for their roster's specific needs. How college soccer coaches actually evaluate.",
    tag: 'Coach Insight',
  },
  {
    slug: 'walk-on-tryout-college-soccer',
    title: 'Preferred Walk-On vs. Tryout Walk-On in College Soccer',
    description:
      'A preferred walk-on is recruited and expected. A tryout walk-on shows up to August tryouts hoping to make it. The gap between them is wider than most realize.',
    tag: 'Offers & Scholarships',
  },
  {
    slug: 'd2-vs-d3-college-soccer',
    title: 'D2 vs. D3 College Soccer: How to Tell Where Your Player Fits',
    description:
      "D2 offers athletic scholarships; D3 doesn't. But the gap is wider than that, and the right fit isn't always the higher division. The honest comparison.",
    tag: 'Division Comparison',
  },
  {
    slug: 'first-email-to-college-soccer-coach',
    title: 'How to Write the First Email to a College Soccer Coach',
    description:
      "Most first emails to college soccer coaches get ignored — not because of the player, but because of the email. Here's the structure coaches actually open.",
    tag: 'Communication Strategy',
  },
  {
    slug: '9th-grade-soccer-recruiting-checklist',
    title: 'What a 9th Grader Should Actually Be Doing for College Soccer Recruiting',
    description:
      '9th grade is foundation-building, not active recruiting. The honest, year-one checklist for college soccer prep — without the early-recruiting panic.',
    tag: 'Timelines & Planning',
  },
  {
    slug: 'college-soccer-recruiting-timeline-by-grade',
    title: 'The College Soccer Recruiting Timeline, Grade by Grade',
    description:
      'What soccer families should be doing in each grade of high school — from foundation in 9th to commitment in 11th. Honest, not fearmongering.',
    tag: 'Timelines & Planning',
  },
  {
    slug: 'preferred-walk-on-college-soccer',
    title: 'What Is a Preferred Walk-On in College Soccer?',
    description:
      "A PWO is a recruited roster spot without athletic aid — and it's still a real recruiting outcome. Here's how to evaluate one, and when to take it.",
    tag: 'Offers & Scholarships',
  },
  {
    slug: 'how-many-d1-soccer-scholarships',
    title: 'How Many D1 Soccer Scholarships Are There — And What Does That Mean for Your Player?',
    description:
      "D1 men's programs get 9.9 scholarships split across rosters of 25–30. Most athletes receive partial aid, not full rides. Here's what families need to understand before building a recruiting strategy around D1.",
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
          <h1 className="serif">College Soccer Recruiting Education for Families</h1>
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
