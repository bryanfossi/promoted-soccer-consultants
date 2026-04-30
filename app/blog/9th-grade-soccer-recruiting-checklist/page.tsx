import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import styles from '../article.module.css'

const TITLE = 'What a 9th Grader Should Actually Be Doing for College Soccer Recruiting'
const URL = 'https://www.promotedsoccerconsultants.com/blog/9th-grade-soccer-recruiting-checklist'
const DESCRIPTION =
  '9th grade is foundation-building, not active recruiting. The honest, year-one checklist for college soccer prep — without the early-recruiting panic.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/9th-grade-soccer-recruiting-checklist' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    publishedTime: '2026-04-30',
    authors: ['Bryan Fossi'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  author: { '@id': 'https://www.promotedsoccerconsultants.com#bryan-fossi' },
  publisher: { '@id': 'https://www.promotedsoccerconsultants.com#organization' },
  datePublished: '2026-04-30',
  dateModified: '2026-04-30',
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
  articleSection: 'Timelines & Planning',
  inLanguage: 'en-US',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.promotedsoccerconsultants.com/blog' },
    { '@type': 'ListItem', position: 3, name: '9th Grade Checklist', item: URL },
  ],
}

export default function NinthGradeArticle() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <div className={styles.pageWrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/blog">Blog</a>
          <span aria-hidden="true"> / </span>
          <span>9th Grade Checklist</span>
        </nav>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.articleTag}>Timelines &amp; Planning</span>
            <h1 className="serif">{TITLE}</h1>
            <p className={styles.byline}>Bryan Fossi &middot; Promoted Soccer Consultants</p>
          </header>

          <p className={styles.lead}>
            9th grade is foundation-building. Active recruiting is mostly a junior-year activity.
            The 9th grade checklist isn&apos;t about emailing coaches — it&apos;s about putting
            the right pieces in place so the recruiting conversation, when it happens, has a real
            player to evaluate.
          </p>

          <h2 className="serif">What 9th Grade Is Actually For</h2>
          <p>
            Physical development, academic baseline, and finding the right club fit. Recruiting
            is downstream of all three.
          </p>
          <p>
            A coach evaluating a junior in two years isn&apos;t going to ask what your 9th grader
            was doing recruiting-wise. They&apos;re going to ask: how has this player developed?
            What&apos;s the trajectory? Has the academic record stayed strong? Did they play at a
            level that prepared them for college?
          </p>

          <h2 className="serif">The Athletic Checklist</h2>
          <ul className={styles.list}>
            <li>Playing time at a competitive level. Bench-warming at a top club is worse than starting at a tier below.</li>
            <li>Position clarity — by end of 9th grade, players should know their primary and secondary positions.</li>
            <li>Off-field development: strength, speed, conditioning, individual technical work.</li>
            <li>Track number of matches, minutes, and key stats informally. Builds discipline; useful later.</li>
          </ul>

          <h2 className="serif">The Academic Checklist</h2>
          <ul className={styles.list}>
            <li>Strong grades from day one. A 4.0 freshman year buys flexibility for tougher courses later.</li>
            <li>Build study habits — recruiting consideration includes academic profile, especially at D2/D3 and Ivy programs.</li>
            <li>Standardized tests aren&apos;t urgent yet, but reading and writing volume matters.</li>
            <li>If aiming at academically elite schools, course rigor starts now.</li>
          </ul>

          <h2 className="serif">The Soft Recruiting Checklist</h2>
          <p>This is where most families overdo it. Here&apos;s what&apos;s actually appropriate:</p>
          <ul className={styles.list}>
            <li>A first, broad target school list — 10 to 15 schools across all divisions. Use the year to research.</li>
            <li>Awareness of which showcases and tournaments your club attends.</li>
            <li>Begin a basic film archive — full game footage is fine; you don&apos;t need produced highlights yet.</li>
            <li>Understand the recruiting calendar at a high level (you don&apos;t need to memorize dates).</li>
          </ul>
          <p>What&apos;s <em>not</em> appropriate yet:</p>
          <ul className={styles.list}>
            <li>Cold-emailing D1 coaches. They legally can&apos;t engage directly with most freshmen, and pestering doesn&apos;t help your case later.</li>
            <li>Producing a polished highlight reel. Save that effort for sophomore year.</li>
            <li>Hiring a full-service recruiting agency. Foundation-building doesn&apos;t require it.</li>
          </ul>

          <h2 className="serif">What to Tell Your Player</h2>
          <p>Three messages from a parent that compound over the next four years:</p>
          <ul className={styles.list}>
            <li>&ldquo;Grades count. Train hard. Have fun. The rest is downstream.&rdquo;</li>
            <li>&ldquo;We&apos;re not in a rush. The right schools will see the right player at the right time.&rdquo;</li>
            <li>&ldquo;Recruiting is part of soccer. It&apos;s not the point of soccer.&rdquo;</li>
          </ul>

          <h2 className="serif">One Thing Worth Doing in 9th Grade</h2>
          <p>
            Pick one school in your initial target list and visit it casually — football game,
            soccer match, just walking the campus on a college visit weekend. Not as a recruit.
            As a curious 14-year-old.
          </p>
          <p>
            This does two things: makes the abstract concrete, and gives the family a shared
            reference point for what to compare future schools against. By the time you&apos;re
            making a decision in junior or senior year, you&apos;ll already have a baseline.
          </p>
          <p>
            For where this fits in the bigger picture, see our{' '}
            <a href="/blog/college-soccer-recruiting-timeline-by-grade" className={styles.inlineLink}>
              full grade-by-grade recruiting timeline
            </a>
            .
          </p>

          <div className={styles.ctaBlock}>
            <h2 className="serif">Have a 9th Grader and Wondering If You&apos;re On Track?</h2>
            <p>
              One free consultation. Real evaluation of where your player stands. No pitch, no
              pressure to start anything early.
            </p>
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Consultation
            </a>
            <p className={styles.ctaSecondary}>
              Or DM <strong>&ldquo;EVALUATE&rdquo;</strong> on Instagram
            </p>
          </div>
        </article>

        <RelatedArticles currentSlug="9th-grade-soccer-recruiting-checklist" />

        <div className={styles.backLink}>
          <a href="/blog">← Back to Recruiting Education</a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
