import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../article.module.css'

const TITLE = 'D2 vs. D3 College Soccer: How to Tell Where Your Player Fits'
const URL = 'https://www.promotedsoccerconsultants.com/blog/d2-vs-d3-college-soccer'
const DESCRIPTION =
  "D2 offers athletic scholarships; D3 doesn't. But the gap is wider than that, and the right fit isn't always the higher division. Honest comparison."

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog/d2-vs-d3-college-soccer' },
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
  articleSection: 'Division Comparison',
  inLanguage: 'en-US',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.promotedsoccerconsultants.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'D2 vs D3', item: URL },
  ],
}

export default function D2vsD3Article() {
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
          <span>D2 vs D3</span>
        </nav>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <span className={styles.articleTag}>Division Comparison</span>
            <h1 className="serif">{TITLE}</h1>
            <p className={styles.byline}>Bryan Fossi &middot; Promoted Soccer Consultants</p>
          </header>

          <p className={styles.lead}>
            D2 and D3 are often grouped as &ldquo;the levels below D1,&rdquo; which misses how
            different they actually are. Athletic profile, time commitment, academic emphasis,
            and money mechanics all diverge meaningfully. The right fit isn&apos;t the higher
            division — it&apos;s the one that matches the player.
          </p>

          <h2 className="serif">The Headline Difference: Athletic Scholarships</h2>
          <p>D2 soccer offers athletic scholarships. D3 does not. Period.</p>
          <p>
            D2 men&apos;s programs have 9.0 athletic equivalencies. Women&apos;s D2 programs:
            9.9. Both equivalency, meaning coaches divide that money however they want.
          </p>
          <p>
            D3 has zero athletic aid. What it does have, often, is generous <em>academic</em>{' '}
            merit aid and need-based financial aid — sometimes covering 50–70% of cost for strong
            students. The total net price at a D3 with full academic aid can rival or beat a
            partial D2 scholarship — the same dynamic we covered in the{' '}
            <a href="/blog/how-many-d1-soccer-scholarships" className={styles.inlineLink}>
              D1 scholarship article
            </a>
            .
          </p>

          <h2 className="serif">The Athletic Profile Difference</h2>
          <p>
            <strong>D2:</strong> faster, more physical, more &ldquo;professional&rdquo; in feel.
            Many programs play year-round in some form. Roster depth and position competition are
            real. D2 coaches often recruit transfers and JUCO players as well as high schoolers,
            which raises the floor.
          </p>
          <p>
            <strong>D3:</strong> athletic level is genuinely competitive — better than most
            outsiders assume — but it&apos;s a tier below D2 in average pace and physicality.
            The gap between the top D3 programs and bottom D2 programs is small. The gap between
            top and bottom of D3 is wide.
          </p>

          <h2 className="serif">The Time Commitment Difference</h2>
          <p>
            <strong>D2:</strong> structured, year-round programs. Practices, lifts, film, travel.
            NCAA caps formal hours, but the implicit commitment is closer to a part-time job.
          </p>
          <p>
            <strong>D3:</strong> NCAA rules limit out-of-season activity more strictly. The
            official soccer commitment is smaller. Players have more time for academics, jobs,
            study abroad, and other extracurriculars. For some players that&apos;s the{' '}
            <em>point</em> of D3.
          </p>

          <h2 className="serif">The Academic Profile Difference</h2>
          <p>
            <strong>D2</strong> schools span a wide range — large public universities, regional
            state schools, smaller religious or private colleges. Academic profile varies
            enormously program-to-program.
          </p>
          <p>
            <strong>D3</strong> includes most of the academically elite small colleges in the
            U.S. — NESCAC, UAA, the Centennial Conference, the Liberty League, and many others.
            Many top D3 programs are at schools where academics drive admission and athletics is
            a complementary experience, not the headline.
          </p>

          <h2 className="serif">The Comparison At a Glance</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th></th>
                  <th>D2</th>
                  <th>D3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Athletic scholarships</td>
                  <td>Yes (9.0 men / 9.9 women, equivalency)</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Academic merit aid</td>
                  <td>Varies by school</td>
                  <td>Often substantial</td>
                </tr>
                <tr>
                  <td>Average athletic pace</td>
                  <td>High</td>
                  <td>Solid; tier below D2</td>
                </tr>
                <tr>
                  <td>Time commitment</td>
                  <td>Year-round, near full-time</td>
                  <td>Seasonal, more flexibility</td>
                </tr>
                <tr>
                  <td>Academic profile</td>
                  <td>Wide range</td>
                  <td>Often academically strong</td>
                </tr>
                <tr>
                  <td>Roster size</td>
                  <td>~25–30</td>
                  <td>~28–35</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif">How to Tell Where Your Player Actually Fits</h2>
          <p>Three honest questions:</p>
          <p>
            <strong>1. What do they want their college experience to look like?</strong> If the
            answer is &ldquo;soccer is the center, everything else is around it&rdquo; — D2 or
            higher. If the answer is &ldquo;I want soccer to be major but I also want to study
            abroad and have a normal college life&rdquo; — D3.
          </p>
          <p>
            <strong>2. What do the numbers actually say?</strong> Coaches at every level have
            minimum athletic profiles. A 5&apos;9&quot; forward with average pace probably
            isn&apos;t D1 material. They might be a strong D3 contributor and a roster-depth D2
            player. Get an honest evaluation before targeting a level.
          </p>
          <p>
            <strong>3. What does the financial math look like?</strong> A D3 school with a
            $40,000 academic merit award is often cheaper than a D2 with a $10,000 athletic
            scholarship. Run real numbers, not assumed ones.
          </p>

          <h2 className="serif">The Wrong Reasons to Choose Each</h2>
          <p>
            Don&apos;t choose D2 because &ldquo;D3 isn&apos;t a real college soccer
            experience.&rdquo; It is. Strong D3 programs play 18-game seasons, make NCAA
            tournaments, and produce post-college pro players — fewer than D1, but more than
            zero.
          </p>
          <p>
            Don&apos;t choose D3 because &ldquo;I couldn&apos;t get a D2 offer.&rdquo; Plenty of
            players who could play at D2 choose D3 because the academic and lifestyle fit is
            better. That&apos;s a strength, not a fallback.
          </p>

          <div className={styles.ctaBlock}>
            <h2 className="serif">Trying to Figure Out the Right Division Level?</h2>
            <p>
              One free consultation. Honest evaluation of where your player fits across all four
              levels. No pitch.
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
