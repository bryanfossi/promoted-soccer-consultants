import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './article.module.css'

export const metadata = {
  title: 'How Many D1 Soccer Scholarships Are There? | Promoted Soccer Consultants',
  description:
    'D1 men\'s soccer programs get 9.9 scholarships split across rosters of 25–30 players. Most athletes receive partial aid, not full rides. Here\'s what that means for your recruiting strategy.',
  alternates: {
    canonical: 'https://www.promotedsoccerconsultants.com/blog/how-many-d1-soccer-scholarships',
  },
  openGraph: {
    title: 'How Many D1 Soccer Scholarships Are There — And What Does That Mean for Your Player?',
    description:
      'D1 men\'s programs get 9.9 scholarships divided across 25–30 players. Most athletes receive partial aid. Here\'s what families need to understand before anchoring a recruiting strategy to D1.',
    url: 'https://www.promotedsoccerconsultants.com/blog/how-many-d1-soccer-scholarships',
    siteName: 'Promoted Soccer Consultants',
    type: 'article',
  },
}

export default function D1ScholarshipsArticle() {
  return (
    <main>
      <Navbar />

      <div className={styles.pageWrap}>

        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true"> / </span>
          <a href="/blog">Blog</a>
          <span aria-hidden="true"> / </span>
          <span>D1 Soccer Scholarships</span>
        </nav>

        <article className={styles.article}>

          {/* Header */}
          <header className={styles.articleHeader}>
            <span className={styles.articleTag}>NCAA Rules &amp; Scholarships</span>
            <h1 className="serif">
              How Many D1 Soccer Scholarships Are There — And What Does That Mean for Your Player?
            </h1>
            <p className={styles.byline}>
              Bryan Fossi &middot; Promoted Soccer Consultants
            </p>
          </header>

          {/* Lead */}
          <p className={styles.lead}>
            D1 men&apos;s soccer programs are permitted 9.9 scholarships per roster. Women&apos;s
            programs get 14. Those numbers get split across rosters of 25–30 players — which means
            most D1 athletes receive partial aid, not full rides. Most families don&apos;t know
            that until it&apos;s too late to adjust their strategy.
          </p>

          {/* Section 1 */}
          <h2 className="serif">Equivalency vs. Headcount: The Distinction That Matters</h2>

          <p>
            Men&apos;s D1 soccer is an <strong>equivalency sport</strong>. That 9.9 number is a
            dollar cap — a total scholarship budget — that coaches divide however they choose. It
            does not mean nine full scholarships and one partial. A coach can give 25 players
            39% each if that&apos;s what the roster requires. The money is entirely at the
            coach&apos;s discretion.
          </p>

          <p>
            Women&apos;s D1 soccer works differently. It is a <strong>headcount sport</strong> — 14
            scholarships, each of which must be a full scholarship. A coach cannot split those 14
            across 28 players. If a player is on scholarship, it&apos;s 100%. That distinction
            changes the math for families significantly depending on which side of the equation
            their player is on.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Division</th>
                  <th>Men&apos;s Limit</th>
                  <th>Women&apos;s Limit</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>D1</td>
                  <td>9.9</td>
                  <td>14 (headcount)</td>
                  <td>Men: Equivalency · Women: Headcount</td>
                </tr>
                <tr>
                  <td>D2</td>
                  <td>9.0</td>
                  <td>9.9</td>
                  <td>Equivalency (both)</td>
                </tr>
                <tr>
                  <td>D3</td>
                  <td>None</td>
                  <td>None</td>
                  <td>No athletic aid — academic only</td>
                </tr>
                <tr>
                  <td>NAIA</td>
                  <td>12</td>
                  <td>12</td>
                  <td>Equivalency (both)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 2 */}
          <h2 className="serif">What Does a Partial Scholarship Actually Look Like?</h2>

          <p>
            Say a D1 program costs $55,000 per year. A 20% scholarship is $11,000 per year —
            $44,000 over four years. That&apos;s real money, and it sounds meaningful until you put
            it next to the $176,000 left on the table.
          </p>

          <p>
            Families who assume &ldquo;D1 scholarship&rdquo; means their cost is covered often hit
            a financial wall during the process — sometimes after a player has already committed.
            The offer sounds good. The actual net price, once you run it through a financial aid
            calculator, can be worse than a D3 school with strong academic merit aid.
          </p>

          <p>
            This is not a reason to avoid D1. It&apos;s a reason to evaluate offers accurately.
            Academic merit aid at D3 and NAIA programs is awarded independently of athletic
            recruitment and can close — or eliminate — the gap between divisions. A player who
            qualifies for $30,000/year in academic aid at a $45,000 D3 school may be paying less
            than a player with a 25% D1 scholarship at a $60,000 school. Run the actual numbers
            before the commitment conversation happens.
          </p>

          {/* Section 3 */}
          <h2 className="serif">The Honest Reality Check</h2>

          <p>
            There are 332 D1 men&apos;s soccer programs. At 9.9 scholarships each, that&apos;s
            roughly 3,300 scholarship equivalencies distributed nationally per year across all
            roster spots — new and returning. The number of new scholarships available to
            incoming players each year is a fraction of that.
          </p>

          <p>
            Club coaches sometimes oversell D1 fit — not typically out of dishonesty, but because
            it&apos;s an easier conversation. &ldquo;He&apos;s a D1 player&rdquo; is a better
            recruiting pitch than &ldquo;he&apos;s a strong D2 fit.&rdquo; The problem is that
            families build four-year strategies around a target that was never realistic, and the
            correction comes late.
          </p>

          <p>
            D1 is a real path for the right player. So are D2, D3, NAIA, and JUCO. The goal is
            the right fit at the right level — athletically, academically, and financially. A
            player thriving at a D2 program that fits them is in a better position than one
            sitting on the bench at a D1 school they couldn&apos;t afford.
          </p>

          {/* CTA Block */}
          <div className={styles.ctaBlock}>
            <h2 className="serif">Want to Know Where Your Player Actually Fits?</h2>
            <p>
              One free consultation. Real evaluation based on your player&apos;s actual profile.
              No pitch.
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

        {/* Back to Blog */}
        <div className={styles.backLink}>
          <a href="/blog">← Back to Recruiting Education</a>
        </div>

      </div>

      <Footer />
    </main>
  )
}
