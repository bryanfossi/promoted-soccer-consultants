import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import styles from '../article.module.css'

const TITLE = 'What College Soccer Coaches Actually Look For When Recruiting'
const URL = 'https://www.promotedsoccerconsultants.com/blog/college-soccer-coach-recruiting-criteria'
const DESCRIPTION =
  "Coaches don't recruit the best player at every showcase. They recruit the best fit for their roster's specific needs. How college soccer coaches actually evaluate."

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/college-soccer-coach-recruiting-criteria' },
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
  articleSection: 'Coach Insight',
  inLanguage: 'en-US',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.promotedsoccerconsultants.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Coach Recruiting Criteria', item: URL },
  ],
}

export default function CoachCriteriaArticle() {
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
          <span>Coach Recruiting Criteria</span>
        </nav>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.articleTag}>Coach Insight</span>
            <h1 className="serif">{TITLE}</h1>
            <p className={styles.byline}>Bryan Fossi &middot; Promoted Soccer Consultants</p>
          </header>

          <p className={styles.lead}>
            College soccer coaches don&apos;t recruit &ldquo;the best players.&rdquo; They recruit
            the best fit for what their roster needs. Two players with similar stats can get
            wildly different responses from the same coach — and the difference usually comes
            down to roster math the family can&apos;t see. Understanding how coaches actually
            evaluate changes how you target.
          </p>

          <h2 className="serif">Roster Math Is the Hidden Filter</h2>
          <p>
            Every college coach is recruiting against a specific roster. They know which seniors
            are graduating, which positions are deep, which positions are thin. By the time
            they&apos;re emailing your player, they&apos;ve already filtered:
          </p>
          <ul className={styles.list}>
            <li>Position — do we need this position in this recruiting class?</li>
            <li>Class — do we need a freshman, sophomore-eligible, or transfer?</li>
            <li>Profile fit — does this player&apos;s style fit how we play?</li>
          </ul>
          <p>
            A 5&apos;8&quot; technical center back who would be elite at 80% of programs gets
            ignored at the 20% that play with a 6&apos;2&quot; defensive line. That&apos;s not
            about quality. That&apos;s about fit.
          </p>

          <h2 className="serif">The Four Evaluation Areas</h2>
          <p>Across every division, coaches evaluate on four dimensions:</p>
          <p>
            <strong>1. Technical ability.</strong> First touch, passing range, ball-striking,
            finishing. Watchable in any 10-minute clip.
          </p>
          <p>
            <strong>2. Athleticism.</strong> Speed, vertical, change-of-direction, recovery.
            Increasingly non-negotiable at higher levels — D1 men&apos;s soccer in particular.
          </p>
          <p>
            <strong>3. Soccer IQ.</strong> Decision-making under pressure. Reading the game.
            Positioning when out of possession. The hardest dimension to evaluate from
            highlights — coaches need full-game footage to see it.
          </p>
          <p>
            <strong>4. Character.</strong> How does the player respond to mistakes? To bad calls?
            To losing? Coaches watch warm-ups and substitutions, not just gameplay.
          </p>
          <p>
            D1 weights athleticism heavily. D3 weights soccer IQ and character heavily.{' '}
            <a href="/blog/d2-vs-d3-college-soccer" className={styles.inlineLink}>D2</a> weights
            all four roughly evenly. NAIA varies enormously by program.
          </p>

          <h2 className="serif">What Highlight Reels Hide</h2>
          <p>
            Highlights show a player at their best. Coaches know that. Most coaches will skim a
            highlight reel for technical signal, then ask for full-game footage or attend a live
            match to evaluate the rest.
          </p>
          <p>
            The scoring goal in the 89th minute against a tired defense doesn&apos;t tell a coach
            much. The third-tier pass under pressure in the 23rd minute does.
          </p>

          <h2 className="serif">What Live Evaluation Reveals</h2>
          <p>At a showcase or tournament, coaches watch:</p>
          <ul className={styles.list}>
            <li><strong>Warm-up.</strong> Body language, focus, work rate before the game starts.</li>
            <li><strong>First 10 minutes.</strong> How does the player engage? Tentative? Confident? Selfish?</li>
            <li><strong>Reactions to mistakes.</strong> Does the head go down for 90 seconds, or does the next play happen?</li>
            <li><strong>Off-ball movement.</strong> Easy to evaluate from the sideline, hard to fake.</li>
            <li><strong>Coachability.</strong> How does the player respond to in-game instruction from their coach?</li>
          </ul>

          <h2 className="serif">What Players Get Wrong About Visibility</h2>
          <p>
            The biggest mistake: trying to &ldquo;be seen by college coaches&rdquo; at every
            event.
          </p>
          <p>
            Coaches don&apos;t randomly attend tournaments. They go to specific games where
            players they&apos;re already tracking are playing. Showing up at a high-profile
            showcase and hoping a coach notices you mostly doesn&apos;t work.
          </p>
          <p>
            What works: getting on a coach&apos;s tracking list <em>first</em> — through{' '}
            <a href="/blog/first-email-to-college-soccer-coach" className={styles.inlineLink}>
              email
            </a>
            , club coach contact, or evaluation events — then making sure you&apos;re playing
            well at events the coach plans to attend.
          </p>

          <h2 className="serif">What Coaches Wish Families Understood</h2>
          <p>
            Three things I&apos;d tell families if they asked, having sat on both sides of the
            table:
          </p>
          <p>
            <strong>1. Most &ldquo;no replies&rdquo; aren&apos;t rejection.</strong> They&apos;re
            filter math. Your player didn&apos;t fit a current need. Doesn&apos;t mean the player
            is below-level.
          </p>
          <p>
            <strong>2. The coach&apos;s silence is louder than their words.</strong> Coaches who
            reply quickly with substantive feedback are interested. Coaches who send template
            responses are politely declining.
          </p>
          <p>
            <strong>3. Fit goes both ways.</strong> A coach who recruits hard and over-promises
            is a red flag. A coach who&apos;s transparent about playing time and roster
            competition — even if it makes the offer less attractive — is the one to trust.
          </p>

          <div className={styles.ctaBlock}>
            <h2 className="serif">Want a Former College Coach&apos;s Read on Your Player?</h2>
            <p>
              One free consultation. Honest evaluation of where your player actually fits, from
              someone who&apos;s sat on the recruiting side of the table. No pitch.
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

        <RelatedArticles currentSlug="college-soccer-coach-recruiting-criteria" />

        <div className={styles.backLink}>
          <a href="/blog">← Back to Recruiting Education</a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
