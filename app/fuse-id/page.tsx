import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './fuse-id.module.css'

const REGISTER = 'https://fuse-id.online/register'
const CALENDAR = 'https://calendar.app.google/96Z4Kgp9mLh35sMj9'

export const metadata = {
  title: 'FUSE-ID — AI College Recruiting Platform',
  description:
    'The AI college recruiting platform for student-athletes — and the parents in their corner. Match scoring across 2,400+ programs (D1, D2, D3, NAIA, NJCAA), AI-drafted coach emails, and a recruiting pipeline you own. Free to start, athletes 13+.',
  alternates: { canonical: '/fuse-id' },
  openGraph: {
    title: 'FUSE-ID | Promoted Sports Consultants',
    description:
      'AI-powered college recruiting for student-athletes and parents. 2,400+ programs, AI coach emails, offer tracking. Free to start — most plans are under $10/month.',
    url: 'https://www.promotedsoccerconsultants.com/fuse-id',
    type: 'website',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://www.promotedsoccerconsultants.com/fuse-id#software',
  name: 'FUSE-ID',
  url: 'https://fuse-id.online',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web, Progressive Web App',
  description:
    'AI-powered college recruiting platform for student-athletes and parents. 8-dimension match engine across 2,400+ programs (D1, D2, D3, NAIA, NJCAA), AI-drafted coach outreach, recruiting pipeline, offer tracker with net-cost estimates, profile gap analysis, and shareable public profile with parent access.',
  publisher: { '@id': 'https://www.promotedsoccerconsultants.com#organization' },
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Starter', price: '9.99', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro', price: '14.99', priceCurrency: 'USD' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'FUSE-ID', item: 'https://www.promotedsoccerconsultants.com/fuse-id' },
  ],
}

const pains = [
  {
    title: 'Recruiting consultants cost $5,000+',
    body: 'Out of reach for most families. The advice is good, but the price tag means only a small fraction of athletes ever get help. The rest are flying blind.',
  },
  {
    title: 'Spreadsheets and guesswork',
    body: 'Families build target lists from forum posts and gut feel. No real signal on which programs are realistic, which are reaches, and which are wastes of time.',
  },
  {
    title: 'Cold emails that get ignored',
    body: 'Generic templates every coach has read a thousand times. No program-specific detail. No reason for a coach to write back.',
  },
  {
    title: 'Offers you can’t actually compare',
    body: 'Two schools, two offers, two completely different financial-aid structures. Most families have no way to know which one is actually the better deal.',
  },
]

const modules = [
  {
    tag: 'Module 1',
    name: 'AI school matching',
    body: '8-dimension scoring across 2,400+ programs — D1, D2, D3, NAIA, and NJCAA — ranked into a shortlist of Lock, Realistic, and Reach schools for your athlete.',
  },
  {
    tag: 'Module 2',
    name: 'AI coach email generator',
    body: 'Personalized, program-specific drafts — initial contact, follow-up, thank-you, visit request, offer response. You review and send. FUSE-ID never emails coaches on your behalf.',
  },
  {
    tag: 'Module 3',
    name: 'Recruiting pipeline',
    body: 'Track every program in Board, List, or Top-10 views. Log every coach contact with follow-up reminders so nothing slips through a six-month recruiting cycle.',
  },
  {
    tag: 'Module 4',
    name: 'Scholarship offer tracker',
    body: 'Side-by-side offer comparison with net-cost estimates. See which program actually leaves you better off — not just which one sent the bigger headline number.',
  },
  {
    tag: 'Module 5',
    name: 'AI profile gap analysis',
    body: 'Where does your profile fall short for the schools you want? FUSE-ID flags the gaps — film, stats, academics, timing — so you fix them before a coach ever sees you.',
  },
  {
    tag: 'Module 6',
    name: 'Public profile + parent access',
    body: 'A shareable profile URL coaches can bookmark — highlights, stats, academics, schedule. Parents get a clean read-only view of the full pipeline (Pro), no separate account needed.',
  },
]

const matchMock = [
  { school: 'University of Vermont', division: 'D1 · America East', score: 92, fit: 'Lock', tone: 'high' },
  { school: 'Middlebury College', division: 'D3 · NESCAC', score: 87, fit: 'Lock', tone: 'high' },
  { school: 'St. Lawrence University', division: 'D3 · Liberty League', score: 79, fit: 'Realistic', tone: 'mid' },
  { school: 'Trinity College', division: 'D3 · NESCAC', score: 64, fit: 'Reach', tone: 'low' },
  { school: 'Bowdoin College', division: 'D3 · NESCAC', score: 58, fit: 'Reach', tone: 'low' },
] as const

const sportTiers = [
  {
    name: "Soccer & Volleyball",
    state: 'Live today',
    body: 'Full program databases scored. AI match engine, AI coach emails, and the offer tracker are fully built out for both sports right now.',
    live: true,
  },
  {
    name: 'More sports on the roadmap',
    state: 'In build',
    body: 'Basketball, lacrosse, field hockey, baseball, softball, and track & field. Each sport adds program data and division-specific scoring before the AI engine turns on — so the model is accurate when it goes live.',
    live: false,
  },
]

const compareRows = [
  ['Monthly cost', 'Free to start · most plans under $10/mo', 'Typically $100+/mo'],
  ['AI-native match + email drafting', 'Built in', 'Add-on or absent'],
  ['You own every coach relationship', 'Always — no agent layer', 'Varies by model'],
  ['Free, fully usable tier', 'Yes — 1 match run, full dashboard', 'Rare'],
] as const

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    detail: 'Everything you need to start:',
    features: ['1 AI match run', 'Full dashboard', 'Offer tracker', 'Communications log', 'No credit card'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '$9.99',
    period: '/month',
    detail: 'For an active month of recruiting:',
    features: ['20 AI tokens', 'Everything in Free'],
    cta: 'Get Starter',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$14.99',
    period: '/month',
    detail: 'For families in the thick of it:',
    features: ['30 AI tokens', 'Email analyzer', 'Parent access', 'Everything in Starter'],
    cta: 'Go Pro',
    highlight: true,
  },
]

const tokenPacks = [
  { name: 'Mini', tokens: '5 tokens', price: '$2.99' },
  { name: 'Standard', tokens: '15 tokens', price: '$7.99' },
  { name: 'Max', tokens: '30 tokens', price: '$14.99' },
]

const faqs = [
  {
    q: 'How much does FUSE-ID cost?',
    a: 'Free to start, no credit card. Starter is $9.99/month (20 AI tokens); Pro is $14.99/month (30 tokens, email analyzer, and parent access). Token packs run from $2.99 (Mini 5) to $14.99 (Max 30). Most plans are under $10/month.',
  },
  {
    q: 'How is FUSE-ID different from NCSA, SportsRecruits, or FieldLevel?',
    a: 'Those platforms typically run well over $100/month. FUSE-ID is AI-native and free to start — the same recruiting intelligence without the price tag, and without a pay-to-play exposure model. You own every coach relationship.',
  },
  {
    q: 'What sports and divisions are covered?',
    a: 'Soccer and volleyball today, with more sports on the roadmap. The match engine scores 2,400+ programs across NCAA D1, D2, D3, NAIA, and NJCAA.',
  },
  {
    q: 'Who can use it?',
    a: 'Any student-athlete aged 13 or older — and the parents in their corner. Pro adds read-only guardian access so a parent can see the full recruiting pipeline without their own account.',
  },
  {
    q: 'Does FUSE-ID contact coaches for me?',
    a: 'No. FUSE-ID drafts personalized, program-specific outreach; you review, edit, and send every message. It never communicates with college coaches on your behalf.',
  },
  {
    q: 'Do I still need a recruiting consultant?',
    a: 'Not required — FUSE-ID is built to run the recruiting process without one. If you want a former college coach in your corner too, Recruiting Services adds that human layer, with FUSE-ID Pro included.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.promotedsoccerconsultants.com/fuse-id#faq',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FuseId() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <Image
              src="/fuse-id-wordmark.png"
              alt="FUSE-ID"
              width={1304}
              height={336}
              priority
              className={styles.heroLogo}
            />
            <div className={styles.heroBadge}>Live · Free to start · Athletes 13+</div>
            <h1 className="serif">
              The AI college recruiting platform for student-athletes — and the parents in their
              corner.
            </h1>
            <p>
              Match across 2,400+ programs, draft program-specific outreach, and track every coach
              conversation in one place. You send every email. You own every relationship. FUSE-ID
              just makes the work clear.
            </p>
            <div className={styles.heroCtas}>
              <a href={REGISTER} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
                Start free
              </a>
              <a href={CALENDAR} className={styles.ctaSecondary} target="_blank" rel="noopener noreferrer">
                Talk to PSC first
              </a>
            </div>
            <p className={styles.heroSubtext}>
              No credit card · Most plans are under $10/month
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className={styles.painSection}>
        <div className={styles.container}>
          <h2 className="serif">Recruiting is a black box. Most families never get a key.</h2>
          <p className={styles.subtitle}>
            The information that decides where an athlete ends up — which programs are realistic,
            which coaches respond, which offers are actually good — sits behind a $5,000 consultant
            or a stack of forum posts. FUSE-ID puts the same intelligence inside the platform.
          </p>
          <div className={styles.painsGrid}>
            {pains.map((p) => (
              <div className={styles.painCard} key={p.title}>
                <h3 className="serif">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Platform — Six Modules */}
      <section className={styles.modules}>
        <div className={styles.container}>
          <h2 className="serif">Six tools. One recruiting workflow.</h2>
          <p className={styles.subtitle}>
            Everything a student-athlete and their parents need to run recruiting — from first match
            list to signed offer — in one platform. No spreadsheets. No lost emails.
          </p>
          <div className={styles.modulesGrid}>
            {modules.map((m) => (
              <div className={styles.moduleCard} key={m.name}>
                <div className={styles.moduleTag}>{m.tag}</div>
                <h3 className="serif">{m.name}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Match Engine Showcase */}
      <section className={styles.matchShowcase}>
        <div className={styles.container}>
          <div className={styles.matchGrid}>
            <div className={styles.matchText}>
              <div className={styles.signatureTag}>Signature feature</div>
              <h2 className="serif">Ranked match scores, not just division filters.</h2>
              <p>
                Most recruiting tools sort programs by division and call it a day. FUSE-ID scores
                every program across <strong>eight dimensions</strong> — academics, athletic fit,
                aid potential, roster competition, distance, staff turnover, recent results, and
                historical recruiting patterns — then ranks them by how well each one actually fits
                your athlete.
              </p>
              <ul className={styles.matchList}>
                <li>2,400+ programs scored across NCAA D1, D2, D3, NAIA, and NJCAA.</li>
                <li>Match scores update when grades, club results, or interest change.</li>
                <li>Drill into any program to see exactly which dimensions drove the score.</li>
                <li>Save a Top-10 and turn it into your active outreach list in one click.</li>
              </ul>
            </div>
            <div className={styles.matchVisual} aria-hidden="true">
              <div className={styles.matchMock}>
                <div className={styles.matchMockHeader}>
                  <span>Program</span>
                  <span className={styles.matchScoreLabel}>Match score</span>
                </div>
                {matchMock.map((row) => (
                  <div className={styles.matchRow} key={row.school}>
                    <div className={styles.matchSchool}>
                      <span className={styles.matchSchoolName}>{row.school}</span>
                      <span className={styles.matchSchoolDiv}>{row.division}</span>
                    </div>
                    <div className={styles.matchScoreWrap}>
                      <div className={styles.matchScoreBarTrack}>
                        <div
                          className={`${styles.matchScoreBar} ${styles[`tone_${row.tone}`]}`}
                          style={{ width: `${row.score}%` }}
                        />
                      </div>
                      <div className={styles.matchScoreNum}>{row.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Sport */}
      <section className={styles.multisport}>
        <div className={styles.container}>
          <h2 className="serif">Soccer and volleyball today. More sports on the roadmap.</h2>
          <p className={styles.subtitle}>
            FUSE-ID is engineered sport-agnostic at the core. Every sport gets the same match
            engine, the same email drafting, the same pipeline tools — once the program data and
            recruiting calendars are in place. We add sports one at a time so the model is accurate
            when it goes live.
          </p>
          <div className={styles.tierStrip}>
            {sportTiers.map((t) => (
              <div key={t.name} className={`${styles.tierBlock} ${t.live ? styles.tierLive : ''}`}>
                <div className={styles.tierState}>{t.state}</div>
                <h3 className="serif">{t.name}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.compare}>
        <div className={styles.container}>
          <h2 className="serif">The same intelligence, a fraction of the price.</h2>
          <p className={styles.subtitle}>
            NCSA, SportsRecruits, and FieldLevel typically run $100+ per month. FUSE-ID is free to
            start, and most plans are under $10/month.
          </p>
          <div className={styles.compareTableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th></th>
                  <th className={styles.compareUs}>FUSE-ID</th>
                  <th>NCSA · SportsRecruits · FieldLevel</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([label, us, them]) => (
                  <tr key={label}>
                    <td className={styles.compareLabel}>{label}</td>
                    <td className={styles.compareUs}>{us}</td>
                    <td>{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PSC Differentiator */}
      <section className={styles.differentiator}>
        <div className={styles.container}>
          <div className={styles.differentiatorBox}>
            <div className={styles.differentiatorBadge}>The PSC difference</div>
            <h2 className="serif">Built by a coach. No agent contracts. Ever.</h2>
            <p>
              FUSE-ID will never sign an agent agreement with your family, never send an email on
              your behalf, and never take a placement fee from a college program. Every outreach
              draft is yours to edit and send. Every coach relationship is yours to own.
            </p>
            <ul className={styles.differentiatorList}>
              <li>You send every email — FUSE-ID drafts; you review, edit, and send.</li>
              <li>You own every coach relationship — no agency layer between you and the program.</li>
              <li>No commissions, no kickbacks, no “preferred program” placements.</li>
              <li>Built by a current high school head coach and MLS Next Academy coach who knows what college coaches actually read.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <h2 className="serif">Pricing that works for actual families.</h2>
          <p className={styles.subtitle}>
            Free to start, no credit card. Add tokens when you need a burst, or go Pro for a full
            recruiting season. Most plans are under $10/month.
          </p>
          <div className={styles.pricingGrid}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`${styles.pricingCard} ${tier.highlight ? styles.pricingHighlight : ''}`}
              >
                {tier.highlight ? <div className={styles.pricingBadge}>Most popular</div> : null}
                <h3 className="serif">{tier.name}</h3>
                <div className={styles.pricingPrice}>
                  {tier.price}<span>{tier.period}</span>
                </div>
                <p className={styles.pricingDetail}>{tier.detail}</p>
                <ul className={styles.pricingFeatures}>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href={REGISTER}
                  className={`${styles.pricingCta} ${tier.highlight ? styles.pricingCtaHighlight : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta} →
                </a>
              </div>
            ))}
          </div>

          <div className={styles.packs}>
            <div className={styles.packsLabel}>Token packs — no subscription required</div>
            <div className={styles.packsRow}>
              {tokenPacks.map((p) => (
                <div className={styles.packCard} key={p.name}>
                  <span className={styles.packName}>{p.name}</span>
                  <span className={styles.packTokens}>{p.tokens}</span>
                  <span className={styles.packPrice}>{p.price}</span>
                </div>
              ))}
            </div>
          </div>

          <p className={styles.pricingFootnote}>
            Current rates and token-pack sizes live at{' '}
            <a href="https://fuse-id.online" target="_blank" rel="noopener noreferrer">fuse-id.online</a>.
          </p>
        </div>
      </section>

      {/* Human in the Loop bridge */}
      <section className={styles.humanLoop}>
        <div className={styles.container}>
          <div className={styles.humanLoopBox}>
            <h2 className="serif">Want a coach in your corner alongside the platform?</h2>
            <p>
              FUSE-ID gives families the platform. <strong>Recruiting Services</strong> adds a
              former college coach — calls, evaluations, outreach review, decision support — for the
              part of recruiting an AI can’t replace. Use them together, or just use the platform.
              Your call. Every Recruiting Services tier includes FUSE-ID Pro.
            </p>
            <a href="/recruiting-services" className={styles.humanLoopCta}>
              See Recruiting Services →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className="serif">Questions, answered straight.</h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className="serif">Start free at fuse-id.online.</h2>
          <p>
            No credit card. 1 free match run. Full read access to the platform. Decide whether
            FUSE-ID is worth more before you spend a dollar.
          </p>
          <div className={styles.heroCtas}>
            <a href={REGISTER} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
              Start free
            </a>
            <a href={CALENDAR} className={styles.ctaSecondary} target="_blank" rel="noopener noreferrer">
              Talk to PSC first
            </a>
          </div>
          <p className={styles.heroSubtext}>30 minutes · Free · No pitch.</p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className={styles.disclaimerSection}>
        <div className={styles.container}>
          <p className={styles.disclaimer}>
            FUSE-ID is an AI-powered college recruiting platform operated by Promoted Soccer
            Consultants, LLC. FUSE-ID is an educational tool and does not act as an agent, guarantee
            scholarships, roster positions, or recruiting outcomes, and does not communicate with
            college coaches on behalf of athletes.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
