import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import styles from '../article.module.css'

const TITLE = 'How to Write the First Email to a College Soccer Coach'
const URL = 'https://www.promotedsoccerconsultants.com/blog/first-email-to-college-soccer-coach'
const DESCRIPTION =
  "Most first emails to college soccer coaches get ignored — not because of the player, but because of the email. Here's the structure coaches actually open."

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/first-email-to-college-soccer-coach' },
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
  articleSection: 'Communication Strategy',
  inLanguage: 'en-US',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.promotedsoccerconsultants.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'First Email to Coach', item: URL },
  ],
}

export default function FirstEmailArticle() {
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
          <span>First Email to Coach</span>
        </nav>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.articleTag}>Communication Strategy</span>
            <h1 className="serif">{TITLE}</h1>
            <p className={styles.byline}>Bryan Fossi &middot; Promoted Soccer Consultants</p>
          </header>

          <p className={styles.lead}>
            Most first emails to college soccer coaches get ignored. Not because the player
            isn&apos;t qualified — because the email tells the coach nothing useful in the first
            three lines. Coaches read on their phone between practices. Your job is to give them
            everything they need to decide &ldquo;yes, look further&rdquo; in 30 seconds.
          </p>

          <h2 className="serif">What Coaches Actually Do With Your Email</h2>
          <p>
            Coaches receive hundreds of unsolicited emails per recruiting cycle. They scan, they
            don&apos;t read. Decisions are made on four questions:
          </p>
          <ul className={styles.list}>
            <li>Does this player match our recruiting profile (position, year, division level)?</li>
            <li>Is the academic profile in our admit range?</li>
            <li>Is there film I can watch in two minutes?</li>
            <li>Are they playing somewhere I can see them in person soon?</li>
          </ul>
          <p>If the email doesn&apos;t make those answers obvious, it gets archived.</p>

          <h2 className="serif">The Subject Line</h2>
          <p>Don&apos;t be clever. Be informative.</p>
          <p>
            <strong>Bad:</strong> &ldquo;Inquiring about your soccer program&rdquo; /
            &ldquo;A talented striker for your roster.&rdquo;
          </p>
          <p>
            <strong>Good:</strong> &ldquo;[Name] | 2027 Center Back | 6&apos;1&quot; | 4.0 GPA |
            [Club Name]&rdquo;
          </p>
          <p>
            Coaches scan inboxes by subject line. Lead with the data they filter on: name, grad
            year, position, key stat (height, GPA, or both).
          </p>

          <h2 className="serif">The Body — A Working Template</h2>
          <div className={styles.callout}>
            <p>Coach [Last Name],</p>
            <p>
              My name is [Name]. I&apos;m a [Year] center back at [High School] and I play club
              for [Club Name] [age group/team]. I&apos;m interested in [School] because of [one
              specific reason — soccer + academic, not generic].
            </p>
            <p>
              Quick profile: 6&apos;1&quot;, 175 lbs, primary CB / secondary CDM. GPA: 4.0.
              SAT/PSAT: 1380.
            </p>
            <p>
              Highlight film: [link]<br />
              Full game footage: [link]
            </p>
            <p>
              Upcoming events:<br />
              — [Tournament Name] — [Date], [Location]<br />
              — [ID Camp / Showcase] — [Date], [Location]
            </p>
            <p>
              I&apos;d love to learn more about your program. Happy to provide additional film,
              stats, or schedule references on request.
            </p>
            <p>
              Thanks for your time,<br />
              [Name]<br />
              [Phone, with parent permission]<br />
              [Email]
            </p>
          </div>

          <h2 className="serif">What Makes the Body Work</h2>
          <ul className={styles.list}>
            <li>Under 150 words. The coach reads it in 20 seconds.</li>
            <li>
              The &ldquo;why this school&rdquo; line shows research. Don&apos;t write &ldquo;I
              want to play at the highest level&rdquo; — write &ldquo;I&apos;m interested in
              [School] because of [coach&apos;s philosophy / specific program element / academic
              program].&rdquo;
            </li>
            <li>Specific physical and academic data, not adjectives. &ldquo;6&apos;1&quot;, 175&rdquo; beats &ldquo;tall and physical.&rdquo;</li>
            <li>Film links above the fold. Most coaches click these first.</li>
            <li>Schedule with dates and locations — gives the coach a concrete action item.</li>
          </ul>

          <h2 className="serif">What to Cut</h2>
          <ul className={styles.list}>
            <li>Long autobiographical paragraphs. Coaches don&apos;t need the soccer origin story.</li>
            <li>Adjectives about work ethic, leadership, or character. Show those through references, not self-description.</li>
            <li>Generic praise of the program. Coaches can tell when &ldquo;I love your program&rdquo; was copy-pasted across 30 emails.</li>
            <li>Attachments. Use links. Coach inbox security may auto-quarantine attachments.</li>
          </ul>

          <h2 className="serif">After Sending</h2>
          <p>
            Don&apos;t follow up for 1–2 weeks. If no reply after that, send one short follow-up
            referencing an upcoming event. After two no-replies, move on — that program
            isn&apos;t recruiting your profile right now.
          </p>
          <p>
            A coach not replying isn&apos;t a personal slight. Most don&apos;t have time to send
            rejection notes. Treat silence as data and move forward. (For more on{' '}
            <a href="/blog/college-soccer-coach-recruiting-criteria" className={styles.inlineLink}>
              how coaches actually evaluate
            </a>
            , see our breakdown of the criteria they use.)
          </p>

          <div className={styles.ctaBlock}>
            <h2 className="serif">Want Eyes on Your Player&apos;s Email Before They Send It?</h2>
            <p>
              One free consultation. We&apos;ll review the email, the target list, and the
              outreach strategy. No pitch.
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

        <RelatedArticles currentSlug="first-email-to-college-soccer-coach" />

        <div className={styles.backLink}>
          <a href="/blog">← Back to Recruiting Education</a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
