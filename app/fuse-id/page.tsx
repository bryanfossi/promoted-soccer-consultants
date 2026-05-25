import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './fuse-id.module.css'

export const metadata = {
  title: 'FUSE-ID — AI College Recruiting Platform',
  description:
    'The recruiting platform built for athletes, not agents. AI match engine across 2,400+ programs, personalized outreach drafts, and a recruiting pipeline you actually own. Free to start.',
  alternates: { canonical: '/fuse-id' },
  openGraph: {
    title: 'FUSE-ID | Promoted Sports Consultants',
    description:
      'AI-powered college recruiting for athletes and families. Every sport, every division. Free to start at fuse-id.online.',
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
    'AI-powered college recruiting platform for athletes and families. 8-dimension match engine across 2,400+ programs, AI-drafted coach outreach, recruiting pipeline, communications log, offers tracker, and shareable public profile.',
  publisher: { '@id': 'https://www.promotedsoccerconsultants.com#organization' },
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Tokens', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro', priceCurrency: 'USD' },
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
    body: 'Generic templates that every coach has read a thousand times. No program-specific detail. No reason for a coach to write back.',
  },
  {
    title: 'Offers arrive and you can’t compare them',
    body: 'Two schools, two offers, two completely different financial-aid structures. Most families have no way to know which one is actually the better deal.',
  },
]

const modules = [
  {
    tag: 'Module 1',
    name: 'AI Match Engine',
    body: '8-dimension scoring across 2,400+ NCAA D1, D2, D3, NAIA, and JUCO programs. Academics, athletic fit, aid potential, roster competition, distance, staff turnover, recent results, historical recruiting patterns — ranked for your athlete.',
  },
  {
    tag: 'Module 2',
    name: 'AI Email Drafting',
    body: 'Personalized, program-specific outreach drafts. References the coach’s recent season, the program’s playing style, and your athlete’s actual fit. You review and send — FUSE-ID never sends on your behalf.',
  },
  {
    tag: 'Module 3',
    name: 'My Schools pipeline',
    body: 'Track every program you’re considering in Kanban, list, or top-10 views. Move schools from "researching" to "contacted" to "visited" to "offer" as the process moves.',
  },
  {
    tag: 'Module 4',
    name: 'Communications log',
    body: 'Every email, every call, every visit logged in one place. Set follow-up reminders. See your full recruiting history at a glance instead of scrolling through six months of email.',
  },
  {
    tag: 'Module 5',
    name: 'Offers Tracker',
    body: 'Side-by-side offer comparison with net-cost calculations and merit-aid estimates. See which program actually leaves you better off — not just which one sent the bigger headline number.',
  },
  {
    tag: 'Module 6',
    name: 'Public profile + parent access',
    body: 'A shareable profile URL coaches can bookmark — highlights, stats, academics, schedule. Parents get a clean read-only view of the full recruiting pipeline without needing their own account.',
  },
]

const matchMock = [
  { school: 'University of Vermont', division: 'D1 · America East', score: 92, fit: 'Strong fit', tone: 'high' },
  { school: 'Middlebury College', division: 'D3 · NESCAC', score: 87, fit: 'Strong fit', tone: 'high' },
  { school: 'St. Lawrence University', division: 'D3 · Liberty League', score: 79, fit: 'Good fit', tone: 'mid' },
  { school: 'Trinity College', division: 'D3 · NESCAC', score: 64, fit: 'Stretch', tone: 'low' },
  { school: 'Bowdoin College', division: 'D3 · NESCAC', score: 58, fit: 'Stretch', tone: 'low' },
] as const

const sportTiers = [
  {
    name: "Men's & Women's Soccer",
    state: 'Live',
    body: '2,400+ programs scored. AI Match Engine, AI Email Drafting, and Offers Tracker fully built out for soccer. The use case Bryan lives every day as a coach.',
    live: true,
  },
  {
    name: 'Volleyball',
    state: 'Beta Q3 2026',
    body: 'Program database and scoring model in build. Match engine launches next, then email drafting follows the same path soccer took.',
    live: false,
  },
  {
    name: 'Basketball, Lacrosse, Field Hockey, Baseball, Softball, T&F',
    state: 'Roadmap',
    body: 'Sport-by-sport expansion. Each new sport adds program data, recruiting calendars, and division-specific scoring criteria before the AI engine turns on.',
    live: false,
  },
]

const pricingTiers = [
  {
    name: 'Free',
    sub: 'Start here',
    headline: 'No credit card',
    detail: '1 match run. Full read access to your profile, communications log, and the program database. Enough to know whether FUSE-ID is for you.',
    cta: 'Start free',
    href: 'https://fuse-id.online',
    highlight: false,
  },
  {
    name: 'Tokens',
    sub: 'Burst capacity',
    headline: 'Pay as you go',
    detail: 'Buy a pack, use anytime. Each token unlocks another match run, an AI email draft, or an offer comparison. Good for families who don’t need the platform every day.',
    cta: 'Buy tokens',
    href: 'https://fuse-id.online',
    highlight: false,
  },
  {
    name: 'Pro',
    sub: 'Most popular',
    headline: 'Unlimited',
    detail: 'Unlimited match runs, unlimited email drafts, unlimited offer comparisons. Priority AI processing and full pipeline tools. The right pick for an active recruiting season.',
    cta: 'Go Pro',
    href: 'https://fuse-id.online',
    highlight: true,
  },
]

export default function FuseId() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>Live · Free to start</div>
            <h1 className="serif">The recruiting platform built for athletes, not agents.</h1>
            <p>
              FUSE-ID is AI-powered college recruiting for athletes and families. Match across
              2,400+ programs, draft program-specific outreach, and track every coach conversation
              in one place. You send every email. You own every relationship. We just make the
              work clearer.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://fuse-id.online"
                className={styles.ctaPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free at fuse-id.online
              </a>
              <a
                href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
                className={styles.ctaSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to PSC first
              </a>
            </div>
            <p className={styles.heroSubtext}>No credit card · No agent contract · 30 minutes · Free · No pitch</p>
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
          <h2 className="serif">Six modules. One recruiting workflow.</h2>
          <p className={styles.subtitle}>
            Everything an athlete and family need to run the recruiting process — from first match
            list to first offer — in one platform. No spreadsheets. No lost emails.
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
                historical recruiting patterns — then ranks them by how well each one actually
                fits your athlete.
              </p>
              <ul className={styles.matchList}>
                <li>2,400+ programs scored across NCAA D1, D2, D3, NAIA, and JUCO.</li>
                <li>Match scores update when grades, club season results, or interest changes.</li>
                <li>Drill into any program to see exactly which dimensions drove the score.</li>
                <li>Save a top-10 view and turn it into your active outreach list in one click.</li>
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
          <h2 className="serif">Built for athletes. Soccer at launch, volleyball next.</h2>
          <p className={styles.subtitle}>
            FUSE-ID is engineered sport-agnostic at the core. Every sport gets the same match
            engine, the same email drafting, the same pipeline tools — once the program data and
            recruiting calendars are in place. We add sports one at a time so the model is
            actually accurate when it goes live.
          </p>
          <div className={styles.tierStrip}>
            {sportTiers.map((t) => (
              <div
                key={t.name}
                className={`${styles.tierBlock} ${t.live ? styles.tierLive : ''}`}
              >
                <div className={styles.tierState}>{t.state}</div>
                <h3 className="serif">{t.name}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PSC Differentiator */}
      <section className={styles.differentiator}>
        <div className={styles.container}>
          <div className={styles.differentiatorBox}>
            <div className={styles.differentiatorBadge}>The PSC differentiator</div>
            <h2 className="serif">Built by a coach. No agent contracts. Ever.</h2>
            <p>
              FUSE-ID will never sign an agent agreement with your family, will never send an email
              on your behalf, and will never take a placement fee from a college program. Every
              outreach draft is yours to edit and send. Every coach relationship is yours to own.
            </p>
            <ul className={styles.differentiatorList}>
              <li>You send every email — FUSE-ID drafts; you review, edit, and send.</li>
              <li>You own every coach relationship — no agency layer between you and the program.</li>
              <li>No commissions, no kickbacks, no "preferred program" placements.</li>
              <li>
                Built by a current high school head coach and MLS Next Academy coach who knows
                what college coaches actually read.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <h2 className="serif">Pricing that works for actual families.</h2>
          <p className={styles.subtitle}>
            Free to start, with no credit card. Tokens when you need a burst. Pro when recruiting
            is your daily reality. Full pricing detail lives on fuse-id.online — that’s the
            source of truth for current rates.
          </p>
          <div className={styles.pricingGrid}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`${styles.pricingCard} ${tier.highlight ? styles.pricingHighlight : ''}`}
              >
                {tier.highlight && <div className={styles.pricingBadge}>Most popular</div>}
                <h3 className="serif">{tier.name}</h3>
                <p className={styles.pricingSub}>{tier.sub}</p>
                <p className={styles.pricingHeadline}>{tier.headline}</p>
                <p className={styles.pricingDetail}>{tier.detail}</p>
                <a
                  href={tier.href}
                  className={`${styles.pricingCta} ${tier.highlight ? styles.pricingCtaHighlight : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta} →
                </a>
              </div>
            ))}
          </div>
          <p className={styles.pricingFootnote}>
            See current rates and token-pack sizes at <a href="https://fuse-id.online" target="_blank" rel="noopener noreferrer">fuse-id.online</a>.
          </p>
        </div>
      </section>

      {/* Human in the Loop bridge */}
      <section className={styles.humanLoop}>
        <div className={styles.container}>
          <div className={styles.humanLoopBox}>
            <h2 className="serif">Want a coach in your corner alongside the platform?</h2>
            <p>
              FUSE-ID gives families the platform. <strong>PSC Recruiting Services</strong> adds a
              former college coach — calls, evaluations, outreach review, decision support — for
              the part of recruiting an AI can’t replace. Use them together, or just use the
              platform. Your call.
            </p>
            <a href="/recruiting-services" className={styles.humanLoopCta}>
              See PSC Recruiting Services →
            </a>
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
            <a
              href="https://fuse-id.online"
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start free at fuse-id.online
            </a>
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              className={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to PSC first
            </a>
          </div>
          <p className={styles.heroSubtext}>30 minutes · Free · No pitch.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
