import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './ask-the-gaffer.module.css'

export const metadata = {
  title: 'Ask The Gaffer — AI Match Prep & Session Planning for Coaches',
  description:
    'Ask The Gaffer is an AI prep assistant that knows your team — turning your roster and playing style into session plans, match prep, and scouting reports in minutes. Waitlist open, launching August 2026.',
  alternates: { canonical: '/ask-the-gaffer' },
  openGraph: {
    title: 'Ask The Gaffer | Promoted Sports Consultants',
    description:
      'It already knows your team. AI session plans, match prep, and scouting reports built around your actual roster — not a generic drill. Waitlist open.',
    url: 'https://www.promotedsoccerconsultants.com/ask-the-gaffer',
    type: 'website',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://www.promotedsoccerconsultants.com/ask-the-gaffer#software',
  name: 'Ask The Gaffer',
  url: 'https://askthegaffer.io',
  applicationCategory: 'SportsApplication',
  operatingSystem: 'Web, Progressive Web App',
  description:
    'AI coach prep assistant that knows a coach’s roster, players, and playing style, and generates session plans, match prep, and scouting reports. Does not perform automated video analysis.',
  publisher: { '@id': 'https://www.promotedsoccerconsultants.com#organization' },
  offers: [
    { '@type': 'Offer', name: 'Monthly', price: '29', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Season Pass', price: '149', priceCurrency: 'USD' },
  ],
}

const faqs = [
  {
    q: 'Does Ask The Gaffer analyze game film?',
    a: 'No. Ask The Gaffer does not do automated video analysis — that is a different job from Hudl, Wyscout, or Veo. You tell it about your team and your opponents, and your inputs become your scouting report. It is priced for a coach, not an athletic department.',
  },
  {
    q: 'How does it know my team?',
    a: 'You tell it about your roster, your players, and your playing style once. It remembers — so every session plan, match prep, and scouting report is built around your actual team, not a generic template.',
  },
  {
    q: 'What can it produce?',
    a: 'Session plans, match prep, and scouting reports in minutes — printable, shareable, and editable. It learns your preferences the more you use it.',
  },
  {
    q: 'Is this just ChatGPT with a soccer prompt?',
    a: 'No. A generic chatbot gives you a generic drill. Ask The Gaffer knows your team, your players, and your style, and turns that into prep you can use tonight. It is built by a coach who has done the job.',
  },
  {
    q: 'When does it launch, and what do founding coaches get?',
    a: 'It launches in August 2026. The waitlist is open now, and founding coaches get early access, founder pricing, and a say in the roadmap.',
  },
  {
    q: 'What does it cost?',
    a: 'From $29/month, or a $149 Season Pass for the months you are actually coaching. Club rollouts are available for whole coaching staffs.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.promotedsoccerconsultants.com/ask-the-gaffer#faq',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Ask The Gaffer', item: 'https://www.promotedsoccerconsultants.com/ask-the-gaffer' },
  ],
}

const steps = [
  {
    num: '1',
    title: 'Tell it about your team — once.',
    body: 'Your roster, your players, your playing style. It remembers, so you never start from a blank page again.',
  },
  {
    num: '2',
    title: 'Ask for what you need.',
    body: '“Build me a Tuesday session on pressing triggers.” “Prep my back four for a low block.” Plain language, no menus.',
  },
  {
    num: '3',
    title: 'Get it in minutes.',
    body: 'Printable, shareable, editable. It learns your preferences the more you coach with it.',
  },
]

const differentiators = [
  {
    title: 'It knows YOUR team',
    body: 'Not a generic ChatGPT drill. Tell it your roster, players, and style once, and everything it builds is shaped around them.',
  },
  {
    title: 'Built by a coach',
    body: 'Every workflow comes from real touchline problems — not a product team guessing what coaches need.',
  },
  {
    title: 'Minutes, not evenings',
    body: 'Session plans, match prep, and scouting reports in minutes. Printable, shareable, editable — you get your night back.',
  },
  {
    title: 'No video required — your inputs become your scouting report',
    body: 'Ask The Gaffer does no automated video analysis. That is a different job from Hudl, Wyscout, or Veo, priced for a coach — not an athletic department.',
  },
]

const pricing = [
  {
    name: 'Monthly',
    price: '$29',
    unit: '/ month',
    detail: 'Full access during your season. Session plans, match prep, and scouting reports — all built around your team.',
    highlight: false,
  },
  {
    name: 'Season Pass',
    price: '$149',
    unit: '/ season',
    detail: 'For the months you are actually coaching. The best value for a full campaign, start to finish.',
    highlight: true,
  },
]

export default function AskTheGaffer() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <Image
              src="/ask-the-gaffer.png"
              alt="The Gaffer"
              width={1254}
              height={1254}
              priority
              className={styles.heroPortrait}
            />
            <div className={styles.heroBadge}>Waitlist open · Launching August 2026</div>
            <h1 className="serif">It already knows your team.</h1>
            <p className={styles.heroLede}>
              Ask The Gaffer is an AI prep assistant that knows your roster, your players, and your
              playing style — and turns that into session plans, match prep, and scouting reports in
              minutes. Built by a coach. Floodlights on.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://askthegaffer.io/waitlist"
                className={styles.ctaPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the waitlist
              </a>
              <a href="#how-it-works" className={styles.ctaSecondary}>
                See how it works
              </a>
            </div>
            <p className={styles.heroSubtext}>
              Founding coaches get early access, founder pricing, and roadmap input.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.how} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>How it works</div>
            <h2 className="serif">Three steps. Then you go again.</h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className="serif">{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session-plan mock */}
      <section className={styles.mockSection}>
        <div className={styles.container}>
          <div className={styles.mockLayout}>
            <div className={styles.mockCopy}>
              <div className={styles.eyebrow}>What comes back</div>
              <h2 className="serif">Ask for a session. Get a session.</h2>
              <p>
                One line in — a full, printable plan out, built for the players you actually have.
                Edit it, share it with your staff, run it tonight.
              </p>
            </div>
            <div className={styles.mock} aria-hidden="true">
              <div className={styles.mockHeader}>
                <span className={styles.mockDot} />
                <span className={styles.mockPrompt}>
                  &ldquo;Build me a Tuesday session on pressing triggers.&rdquo;
                </span>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockTitle}>Tuesday · Pressing triggers · U16</div>
                <ul className={styles.mockList}>
                  <li><span>Warm-up</span><span>Rondo 4v2, press the split pass</span><em>15′</em></li>
                  <li><span>Phase 1</span><span>Trigger recognition — back-pass &amp; heavy touch</span><em>20′</em></li>
                  <li><span>Main</span><span>7v7 pressing shape, wide overloads</span><em>25′</em></li>
                  <li><span>Game</span><span>Conditioned — win it back in 6 seconds</span><em>15′</em></li>
                  <li><span>Cool-down</span><span>Recovery &amp; session debrief</span><em>10′</em></li>
                </ul>
                <div className={styles.mockFoot}>Tailored to your roster · Printable · Editable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className={styles.diff}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Why it&rsquo;s different</div>
            <h2 className="serif">Not another generic drill generator.</h2>
          </div>
          <div className={styles.diffGrid}>
            {differentiators.map((d) => (
              <div key={d.title} className={styles.diffCard}>
                <h3 className="serif">{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding coaches */}
      <section className={styles.founding}>
        <div className={styles.container}>
          <div className={styles.foundingBox}>
            <div className={styles.eyebrow}>Founding coaches</div>
            <h2 className="serif">Get in before the August 2026 kickoff.</h2>
            <p>
              Founding coaches get early access, founder pricing, and a real say in the roadmap —
              the features you ask for are the features we build first. Club rollouts are available
              for whole coaching staffs.
            </p>
            <a
              href="https://askthegaffer.io/waitlist"
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Pricing</div>
            <h2 className="serif">Priced for a coach, not an athletic department.</h2>
          </div>
          <div className={styles.pricingGrid}>
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`${styles.pricingCard} ${tier.highlight ? styles.pricingHighlight : ''}`}
              >
                {tier.highlight ? <div className={styles.pricingBadge}>Best value</div> : null}
                <h3 className="serif">{tier.name}</h3>
                <div className={styles.pricingPrice}>
                  {tier.price}
                  <span>{tier.unit}</span>
                </div>
                <p>{tier.detail}</p>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>
            Club rollouts available — bring Ask The Gaffer to your whole staff.{' '}
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to Bryan about a rollout →
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Questions</div>
            <h2 className="serif">Straight answers.</h2>
          </div>
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

      {/* Closing */}
      <section className={styles.closing}>
        <div className={styles.container}>
          <h2 className="serif">The floodlights are on.</h2>
          <p>
            Get on the waitlist before the August 2026 launch and lock in founder pricing and early
            access.
          </p>
          <a
            href="https://askthegaffer.io/waitlist"
            className={styles.ctaPrimary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the waitlist
          </a>
          <div className={styles.goAgain} aria-hidden="true">WE GO AGAIN.</div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
