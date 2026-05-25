import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RelatedArticles from '@/components/RelatedArticles'
import styles from '../article.module.css'

const TITLE = 'Preferred Walk-On vs. Tryout Walk-On in College Soccer'
const URL = 'https://www.promotedsoccerconsultants.com/blog/walk-on-tryout-college-soccer'
const DESCRIPTION =
  'A preferred walk-on is recruited and expected. A tryout walk-on shows up to August tryouts hoping to make it. The gap between them is wider than most families realize.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/walk-on-tryout-college-soccer' },
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
  articleSection: 'Offers & Scholarships',
  inLanguage: 'en-US',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.promotedsoccerconsultants.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Walk-On Tryout', item: URL },
  ],
}

export default function WalkOnTryoutArticle() {
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
          <span>Walk-On Tryout</span>
        </nav>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.articleTag}>Offers &amp; Scholarships</span>
            <h1 className="serif">{TITLE}</h1>
            <p className={styles.byline}>Bryan Fossi &middot; Promoted Sports Consultants</p>
          </header>

          <p className={styles.lead}>
            &ldquo;Walk-on&rdquo; is one word that covers two very different recruiting outcomes.
            A preferred walk-on has a guaranteed roster spot waiting for them. A tryout walk-on
            has a chance — usually a small one — to earn a spot during August tryouts. Knowing
            which one you&apos;re getting changes everything about the decision.
          </p>

          <h2 className="serif">The Preferred Walk-On in One Sentence</h2>
          <p>
            A PWO is a recruited player the coach has committed to having on the roster, just
            without athletic scholarship money. We covered the full mechanics of that in our{' '}
            <a href="/blog/preferred-walk-on-college-soccer" className={styles.inlineLink}>
              preferred walk-on article
            </a>{' '}
            — read that for the deep dive.
          </p>
          <p>What matters here: the spot is guaranteed.</p>

          <h2 className="serif">The Tryout Walk-On in One Sentence</h2>
          <p>
            A tryout walk-on shows up to open tryouts in August or in the spring with no prior
            recruiting commitment from the coach. They might have emailed, might have visited
            campus, might have nothing — but the coach hasn&apos;t said &ldquo;you have a
            spot.&rdquo;
          </p>
          <p>The spot is not guaranteed. Most don&apos;t make it.</p>

          <h2 className="serif">How Tryout Walk-Ons Actually Work</h2>
          <p>
            Open tryouts vary by program. Some are formal — a posted date, a field, 30–60 players
            showing up, a coach with a clipboard cutting the list down. Others are informal —
            players emailing the coach, getting invited to a session, getting evaluated alongside
            the recruited roster.
          </p>
          <p>
            Selection rates vary. At top-tier D1 programs, maybe one tryout walk-on per cycle
            makes the roster. At smaller programs or in seasons with roster gaps, the rate is
            higher — but it&apos;s never high in absolute terms.
          </p>

          <h2 className="serif">When the Tryout Path Actually Makes Sense</h2>
          <p>Three scenarios where it&apos;s a real option:</p>
          <p>
            <strong>1. The school is already the right academic fit.</strong> If your player got
            into Stanford for academic merit and wants to try out for the soccer team, the tryout
            walk-on path is a reasonable add-on — they&apos;re not picking the school for soccer,
            so the soccer outcome is upside.
          </p>
          <p>
            <strong>2. The school is in your geographic / financial range and the team needs
            depth.</strong> Some programs lose players to transfers, injuries, or graduation
            gaps. A tryout walk-on can fill a true roster need.
          </p>
          <p>
            <strong>3. The player has a specific advantage the program lacks.</strong> A
            goalkeeper at a program with one senior keeper and no recruited replacement has a
            real shot. A 9th-string forward at a program loaded at forward does not.
          </p>

          <h2 className="serif">When It Doesn&apos;t Make Sense</h2>
          <p>
            If the tryout walk-on path is your <em>primary</em> plan for college soccer, it&apos;s
            not actually a plan. The selection rates are too low to anchor a college decision
            around. You should be choosing the school for academic and personal fit first, with
            soccer as upside.
          </p>
          <p>
            The &ldquo;I&apos;ll just walk on&rdquo; mindset has produced a lot of disappointed
            sophomores who ended up not playing and didn&apos;t pick the school for any other
            reason.
          </p>

          <h2 className="serif">How to Pursue a Tryout Walk-On Path Honestly</h2>
          <ul className={styles.list}>
            <li>
              Email the coach in advance — well before August. &ldquo;I&apos;m enrolling at
              [School] for academic reasons. I&apos;d like to be considered for a walk-on tryout.
              Here&apos;s my film and profile.&rdquo; This often gets a faster reply than a
              recruiting email — it&apos;s not asking for anything.
            </li>
            <li>Confirm the tryout date and process before showing up.</li>
            <li>Know that you may be cut on day one. Bring composure.</li>
            <li>Don&apos;t decide on the school based on the tryout outcome. The decision should already be made.</li>
          </ul>

          <h2 className="serif">The Honest Comparison</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>Preferred Walk-On</th>
                  <th>Tryout Walk-On</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Roster spot before arrival</td>
                  <td>Guaranteed</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Coach commitment</td>
                  <td>Strong</td>
                  <td>None to mild</td>
                </tr>
                <tr>
                  <td>Recruited</td>
                  <td>Yes</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Selection rate</td>
                  <td>~100%</td>
                  <td>Varies; usually low</td>
                </tr>
                <tr>
                  <td>When the coach decides</td>
                  <td>Before commitment</td>
                  <td>At tryout</td>
                </tr>
                <tr>
                  <td>Reasonable as primary plan</td>
                  <td>Yes</td>
                  <td>Rarely</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The takeaway: a PWO is a soccer outcome you can plan around. A tryout walk-on is a
            soccer attempt you make after you&apos;ve planned around something else.
          </p>

          <div className={styles.ctaBlock}>
            <h2 className="serif">Considering a Walk-On Path?</h2>
            <p>
              One free consultation. We&apos;ll review whether it&apos;s realistic, what the
              alternatives are, and how to evaluate the school overall. No pitch.
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

        <RelatedArticles currentSlug="walk-on-tryout-college-soccer" />

        <div className={styles.backLink}>
          <a href="/blog">← Back to Recruiting Education</a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
