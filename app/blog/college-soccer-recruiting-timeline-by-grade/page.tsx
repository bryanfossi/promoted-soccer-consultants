import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../article.module.css'

const TITLE = 'The College Soccer Recruiting Timeline, Grade by Grade'
const URL = 'https://www.promotedsoccerconsultants.com/blog/college-soccer-recruiting-timeline-by-grade'
const DESCRIPTION =
  "What soccer families should be doing in each grade of high school — from foundation in 9th to commitment in 11th. Honest, not fearmongering."

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/college-soccer-recruiting-timeline-by-grade' },
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
    { '@type': 'ListItem', position: 3, name: 'Recruiting Timeline', item: URL },
  ],
}

export default function TimelineArticle() {
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
          <span>Recruiting Timeline</span>
        </nav>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.articleTag}>Timelines &amp; Planning</span>
            <h1 className="serif">{TITLE}</h1>
            <p className={styles.byline}>Bryan Fossi &middot; Promoted Soccer Consultants</p>
          </header>

          <p className={styles.lead}>
            Most families discover the college soccer recruiting timeline late and panic. The
            right pace isn&apos;t earlier or later — it&apos;s grade-appropriate. Here&apos;s what
            should happen, by year, without the artificial urgency some clubs create.
          </p>

          <h2 className="serif">Why Timelines Matter (and Where They Get Twisted)</h2>
          <p>
            Recruiting calendars exist because the NCAA regulates when coaches and players can
            communicate. But club organizations sometimes use those rules to push earlier action
            than the family actually needs. The result: 8th graders writing emails to D1 coaches
            who legally can&apos;t reply.
          </p>
          <p>
            The honest framing: the calendar tells you when <em>contact</em> can happen, not when{' '}
            <em>recruiting</em> should start. Most player development happens before recruiting
            communication does.
          </p>

          <h2 className="serif">Before 9th Grade</h2>
          <p>
            Focus is athletic development and academic foundation. No recruiting communication.
            No college-specific stress.
          </p>
          <p>What matters here:</p>
          <ul className={styles.list}>
            <li>Playing time at a competitive level (training environment matters more than club name)</li>
            <li>Building athletic profile — speed, endurance, technical refinement</li>
            <li>Academic baseline — middle school grades don&apos;t transcript, but study habits do</li>
          </ul>
          <p>
            What doesn&apos;t matter: which D1 schools &ldquo;see&rdquo; your player. They
            aren&apos;t allowed to evaluate this age in any meaningful recruiting sense.
          </p>

          <h2 className="serif">9th Grade — Foundation Year</h2>
          <p>
            First high school year. Recruiting is still in the background, but the groundwork
            starts.
          </p>
          <p>What should happen:</p>
          <ul className={styles.list}>
            <li>Strong academic year — GPA and academic record begin counting</li>
            <li>Continued athletic development</li>
            <li>A first target school list — 10 to 15 schools spanning divisions, broad rather than narrow</li>
            <li>Basic film library starts — even iPhone footage of game performance</li>
            <li>Track matches and stats informally</li>
          </ul>
          <p>
            What shouldn&apos;t happen: pestering coaches. NCAA rules limit direct contact this
            early, and most schools won&apos;t engage anyway. (See our{' '}
            <a href="/blog/9th-grade-soccer-recruiting-checklist" className={styles.inlineLink}>
              full 9th grade checklist
            </a>{' '}
            for what to do — and what to skip.)
          </p>

          <h2 className="serif">10th Grade — Soft Outreach</h2>
          <p>Sophomore year is when soft outreach begins.</p>
          <ul className={styles.list}>
            <li>Refined target list — narrower, starting to differentiate fit</li>
            <li>
              Initial introductory emails to coaches at target schools (most contact must still
              go through the high school or club coach until the calendar opens)
            </li>
            <li>Highlight reel produced — 3–5 minute version</li>
            <li>Showcase and ID camp attendance — strategic, not exhaustive</li>
            <li>Academic strength continues</li>
          </ul>
          <p>
            The major calendar inflection for D1 men&apos;s and women&apos;s soccer typically
            falls in this window, allowing coaches to begin direct communication. Specific dates
            shift; verify the current calendar with your consultant or the{' '}
            <a href="/ai-assistant" className={styles.inlineLink}>PSC AI Assistant</a>.
          </p>

          <h2 className="serif">11th Grade — The Inflection Point</h2>
          <p>
            Junior year is where most recruiting actually happens. Most committed players commit
            during their junior year or early senior year.
          </p>
          <ul className={styles.list}>
            <li>Active coach communication</li>
            <li>Unofficial visits to top-target schools</li>
            <li>Official visits begin (D1 limit: 5; D2: 5; D3: unlimited)</li>
            <li>Tournament selection becomes coach-visibility-driven</li>
            <li>Standardized tests if applicable</li>
            <li>Refining the list from 15 schools to 5–7 realistic fits</li>
          </ul>
          <p>
            What to avoid: chasing offers from schools that aren&apos;t actually a fit just
            because they&apos;re interested.
          </p>

          <h2 className="serif">12th Grade — Commit, Sign, Plan</h2>
          <p>Senior year for most players is finalization, not initiation.</p>
          <ul className={styles.list}>
            <li>Final visits and decision</li>
            <li>NLI signing day for D1/D2 scholarship offers</li>
            <li>
              For{' '}
              <a href="/blog/preferred-walk-on-college-soccer" className={styles.inlineLink}>
                preferred walk-on offers
              </a>
              : confirmation of role and roster spot (no NLI, but the commitment is still real)
            </li>
            <li>Senior season — focus on play quality, not new outreach</li>
            <li>Prepare academically and athletically for college transition</li>
          </ul>

          <h2 className="serif">Common Timeline Mistakes</h2>
          <p>
            <strong>Starting too early.</strong> A 7th grader doesn&apos;t need a recruiting
            consultant. Athletic development and academics matter far more than recruiting
            strategy at that age.
          </p>
          <p>
            <strong>Starting too late.</strong> Waiting until junior year to think about target
            schools means scrambling to build relationships during the inflection period. 9th and
            10th grade groundwork pays off.
          </p>
          <p>
            <strong>Building around D1 only.</strong> Of 332 D1 men&apos;s programs, only a
            fraction recruit nationally. A target list that ignores{' '}
            <a href="/blog/d2-vs-d3-college-soccer" className={styles.inlineLink}>D2 and D3</a>{' '}
            cuts off most of the realistic opportunity space.
          </p>
          <p>
            <strong>Counting on offers that don&apos;t materialize.</strong> Verbal commitments
            are non-binding. Don&apos;t stop reaching out to backup options until commitments are
            formalized.
          </p>

          <div className={styles.ctaBlock}>
            <h2 className="serif">Not Sure Where Your Player Is on This Timeline?</h2>
            <p>
              One free consultation. We&apos;ll review where your player stands and where the
              gaps are. No pitch.
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

        <div className={styles.backLink}>
          <a href="/blog">← Back to Recruiting Education</a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
