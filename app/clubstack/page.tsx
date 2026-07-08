import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './clubstack.module.css'

export const metadata = {
  title: 'ClubStack — Club Management Software',
  description:
    "ClubStack is a club management platform with a built-in recruiting layer most club software doesn't have. Registration, payments, rosters, scheduling, and communication — built for multi-sport clubs.",
  alternates: { canonical: '/clubstack' },
  openGraph: {
    title: 'ClubStack | Promoted Sports Consultants',
    description:
      'Run your club. Not your inbox. ClubStack handles registration, payments, rosters, scheduling, and communication — with a built-in recruiting integration most club software lacks.',
    url: 'https://www.promotedsoccerconsultants.com/clubstack',
    type: 'website',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://www.promotedsoccerconsultants.com/clubstack#software',
  name: 'ClubStack',
  url: 'https://clubstack.online',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Progressive Web App',
  description:
    'Multi-sport club management platform: registration, payments, rosters, scheduling, communication, and recruiting integration. Built for Club Directors, Directors of Coaching, and team coaches.',
  publisher: { '@id': 'https://www.promotedsoccerconsultants.com#organization' },
  offers: [
    { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Team', price: '49', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Starter', price: '129', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Club', price: '249', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Academy', price: '449', priceCurrency: 'USD' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'ClubStack', item: 'https://www.promotedsoccerconsultants.com/clubstack' },
  ],
}

const faqs = [
  {
    q: 'What does ClubStack replace?',
    a: 'The patchwork most clubs run today — a registration platform, a payments spreadsheet, a messaging app, and group texts. ClubStack handles registration, payments, rosters, scheduling, and communication in one place.',
  },
  {
    q: 'How is ClubStack different from GotSport, TeamSnap, or SportsEngine?',
    a: 'It has a built-in recruiting layer most club software doesn’t. The Recruiting Integration Module gives directors a club-wide view of every player’s recruiting status and bridges natively into FUSE-ID — recruiting visibility built in from day one, not bolted on.',
  },
  {
    q: 'How much does it cost?',
    a: 'Flat monthly pricing by org size, with no per-player fees: Free (≤25 players), Team $49, Starter $129, Club $249 (recruiting unlocks here), Academy $449, and Enterprise (custom). Annual billing is about 15% off.',
  },
  {
    q: 'Is ClubStack only for soccer?',
    a: 'No. ClubStack is sport-agnostic — registration, payments, rosters, scheduling, and communication work for any club. It was built first with competitive soccer clubs, which is where the workflows were pressure-tested.',
  },
  {
    q: 'When can we start?',
    a: 'ClubStack is in launch prep. Join the waitlist for early access and founding-club pricing — founding clubs get a direct line to Bryan when their club comes online.',
  },
  {
    q: 'Is ClubStack a background-check or sanctioning organization?',
    a: 'No. ClubStack is a business-operations tool for clubs. It is not a youth-protection, background-check, or sanctioning organization.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.promotedsoccerconsultants.com/clubstack#faq',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const pains = [
  {
    title: 'Bloated tools nobody actually uses',
    body: 'You pay for the platform every club uses, but half the features are broken and parents avoid it. Coaches export rosters to spreadsheets just to get work done.',
  },
  {
    title: 'Payments are a manual nightmare',
    body: 'Late fees, installment plans, and overdue balances tracked by hand. No real-time view of who is current vs. delinquent. Missed payments compound for months.',
  },
  {
    title: 'Five apps for one conversation',
    body: 'Group texts for one team, email for another, an app for messaging, a website for the schedule. Parents miss information. Coaches miss messages. Nothing lives in one place.',
  },
  {
    title: 'No view into player recruiting',
    body: 'You have 80 athletes being recruited — or trying to be — and zero centralized view of where each stands, who has reached out, or which families are on top of it.',
  },
]

const coreModules = [
  {
    tag: 'Module 1',
    name: 'Registration & waivers',
    body: 'Customizable online forms by age group and program. Digital waivers, returning-player auto-fill, waitlist management, medical info, and emergency contacts.',
  },
  {
    tag: 'Module 2',
    name: 'Payments & billing',
    body: 'Stripe-powered payments at registration. Installment plan builder, automated late reminders, refund workflows, and a real-time view of every family balance.',
  },
  {
    tag: 'Module 3',
    name: 'Roster & team management',
    body: 'Team creation by age group, coaching staff assignment, roster status tracking, season rollover, and player history at your fingertips.',
  },
  {
    tag: 'Module 4',
    name: 'Scheduling & calendar',
    body: 'Practice and game scheduling, RSVP and attendance tracking, coach and parent calendars, conflict detection, and our signature facility-grid master schedule.',
  },
  {
    tag: 'Module 5',
    name: 'Communication',
    body: 'Broadcast messaging by team, age group, or club-wide. Announcement board with pinned posts and read tracking. Direct messaging with real-time updates.',
  },
]

const addOns = [
  {
    name: 'Tryout Evaluation',
    body: 'Mobile-first scoring with shirt-number identification, quick-select grading, star ratings, multi-evaluator support, and offline mode for fields without signal.',
  },
  {
    name: 'Roster Builder',
    body: 'Drag-and-drop team building from tryout results or your registration pool. Snaking draft auto-generate, verbal commit tracking, and tokenized parent invites.',
  },
]

const pricingTiers = [
  {
    name: 'Free',
    sub: 'Solo coach, 1 team',
    monthly: '$0',
    annual: '$0 / yr',
    detail: 'Up to 25 players. Core roster, scheduling, and communication. No payments, no recruiting. No credit card required.',
    highlight: false,
  },
  {
    name: 'Team',
    sub: 'JV + Varsity',
    monthly: '$49 / mo',
    annual: '$490 / yr',
    detail: 'Up to 50 players, 2 teams. Payments unlock. Designed for high school programs and small competitive setups.',
    highlight: false,
  },
  {
    name: 'Starter',
    sub: 'Small clubs',
    monthly: '$129 / mo',
    annual: '$1,290 / yr',
    detail: 'Up to 75 players, unlimited teams. All core modules. Rec leagues and small competitive clubs.',
    highlight: false,
  },
  {
    name: 'Club',
    sub: 'Most popular',
    monthly: '$249 / mo',
    annual: '$2,490 / yr',
    detail: '76–200 players, unlimited teams. Recruiting Integration unlocks here. The sweet spot for mid-size competitive clubs.',
    highlight: true,
  },
  {
    name: 'Academy',
    sub: 'Top-flight programs',
    monthly: '$449 / mo',
    annual: '$4,490 / yr',
    detail: '201–500 players, unlimited teams. Full feature set. Built for elite multi-team academies.',
    highlight: false,
  },
  {
    name: 'Enterprise',
    sub: 'Multi-program orgs',
    monthly: 'Custom',
    annual: 'Custom',
    detail: '500+ players. Custom contract, dedicated onboarding, multi-program governance support.',
    highlight: false,
  },
]

const competitiveRows = [
  ['Registration & waivers', true, true, true, true],
  ['Payments & installments', true, 'Partial', 'Partial', 'Partial'],
  ['Roster & team management', true, true, true, true],
  ['Scheduling & calendar', true, true, true, true],
  ['Facility booking grid view', true, false, false, false],
  ['Team communication', true, 'Partial', true, 'Partial'],
  ['Tryout evaluation + bucketing', true, 'Partial', false, 'Partial'],
  ['Drag-and-drop roster builder', true, false, false, false],
  ['Recruiting status dashboard', 'ClubStack only', false, false, false],
  ['College coach contact log', 'ClubStack only', false, false, false],
  ['Built by an active coach', 'ClubStack only', false, false, false],
  ['Progressive Web App (PWA)', true, false, 'Partial', false],
] as const

const cellRender = (cell: boolean | string) => {
  if (cell === true) return <span className={styles.checkYes}>✓</span>
  if (cell === false) return <span className={styles.checkNo}>—</span>
  if (cell === 'Partial') return <span className={styles.checkPartial}>Partial</span>
  return <span className={styles.checkExclusive}>★ {cell}</span>
}

export default function ClubStack() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <Image
              src="/clubstack-mark.png"
              alt="ClubStack"
              width={223}
              height={258}
              priority
              className={styles.heroMark}
            />
            <div className={styles.heroBadge}>Coming Soon · Join the waitlist · founding-club pricing</div>
            <h1 className="serif">Run your club. Not your inbox.</h1>
            <p>
              ClubStack handles registration, payments, rosters, scheduling, and communication —
              and adds a recruiting integration that most club software lacks. Built for multi-sport
              clubs by a coach who runs one.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://clubstack.online"
                className={styles.ctaPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the waitlist
              </a>
              <a
                href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
                className={styles.ctaSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a 15-min walkthrough
              </a>
            </div>
            <p className={styles.heroSubtext}>Get early access and founding-club pricing.</p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className={styles.painSection}>
        <div className={styles.container}>
          <h2 className="serif">The patchwork stack every director is running today</h2>
          <p className={styles.subtitle}>
            Most clubs are stitched together from a registration platform that nobody likes, a
            spreadsheet for installment plans, an app for messaging, and a group text for
            everything else. ClubStack replaces all of it.
          </p>
          <div className={styles.painsGrid}>
            {pains.map((pain) => (
              <div className={styles.painCard} key={pain.title}>
                <h3 className="serif">{pain.title}</h3>
                <p>{pain.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className={styles.modules}>
        <div className={styles.container}>
          <h2 className="serif">Five core modules. One subscription.</h2>
          <p className={styles.subtitle}>
            Everything you need to run a club is in the platform from day one — not unlocked
            piece by piece behind tiered add-ons.
          </p>
          <div className={styles.modulesGrid}>
            {coreModules.map((m) => (
              <div className={styles.moduleCard} key={m.name}>
                <div className={styles.moduleTag}>{m.tag}</div>
                <h3 className="serif">{m.name}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Schedule Showcase */}
      <section className={styles.scheduleShowcase}>
        <div className={styles.container}>
          <div className={styles.scheduleGrid}>
            <div className={styles.scheduleText}>
              <div className={styles.signatureTag}>Signature feature</div>
              <h2 className="serif">The master schedule that actually shows you the schedule.</h2>
              <p>
                Toggle between a clean month view and a custom <strong>facility-grid week view</strong>
                — facilities down the side, days across the top, every event color-coded by type.
                See instantly which fields are booked, which are free, and where conflicts are
                stacking up.
              </p>
              <ul className={styles.scheduleList}>
                <li>Click any empty cell to add an event pre-filled with that facility and date.</li>
                <li>Overlapping events flag with a red CONFLICT badge — warning only, never blocking.</li>
                <li>Filter by facility or by team. Navigate weeks with one click.</li>
                <li>Real-time updates — when another admin moves an event, the grid updates live.</li>
              </ul>
            </div>
            <div className={styles.scheduleVisual} aria-hidden="true">
              <div className={styles.gridMock}>
                <div className={styles.gridHeader}>
                  <span></span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                </div>
                <div className={styles.gridRow}>
                  <span className={styles.gridFacility}>Field A</span>
                  <span className={`${styles.gridCell} ${styles.cellPractice}`}>U14 · 5:00</span>
                  <span className={styles.gridCellEmpty}>Available</span>
                  <span className={`${styles.gridCell} ${styles.cellGame}`}>U16 · 6:30</span>
                  <span className={`${styles.gridCell} ${styles.cellPractice}`}>U14 · 5:00</span>
                </div>
                <div className={styles.gridRow}>
                  <span className={styles.gridFacility}>Field B</span>
                  <span className={`${styles.gridCell} ${styles.cellGame}`}>U12 · 5:00</span>
                  <span className={`${styles.gridCell} ${styles.cellConflict}`}>CONFLICT</span>
                  <span className={styles.gridCellEmpty}>Available</span>
                  <span className={`${styles.gridCell} ${styles.cellRental}`}>Rental · 7:00</span>
                </div>
                <div className={styles.gridRow}>
                  <span className={styles.gridFacility}>Gym 1</span>
                  <span className={styles.gridCellEmpty}>Available</span>
                  <span className={`${styles.gridCell} ${styles.cellPractice}`}>VB · 6:00</span>
                  <span className={`${styles.gridCell} ${styles.cellPractice}`}>VB · 6:00</span>
                  <span className={styles.gridCellEmpty}>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Modules */}
      <section className={styles.addOns}>
        <div className={styles.container}>
          <h2 className="serif">Tryouts and team-building, finally on the same platform</h2>
          <p className={styles.subtitle}>
            Optional add-ons that turn tryout day from chaos to a clean handoff into your real
            roster.
          </p>
          <div className={styles.addOnGrid}>
            {addOns.map((a) => (
              <div className={styles.addOnCard} key={a.name}>
                <h3 className="serif">{a.name}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Sport */}
      <section className={styles.multisport}>
        <div className={styles.container}>
          <h2 className="serif">Built for every sport. Built for every level.</h2>
          <p className={styles.subtitle}>
            ClubStack is sport-agnostic at its core — registration, payments, rosters,
            scheduling, and communication don't care whether you're running soccer, volleyball,
            basketball, or lacrosse.
          </p>
          <div className={styles.tierStrip}>
            <div className={styles.tierBlock}>
              <h3 className="serif">Competitive</h3>
              <p>Travel and academy programs. 50–500 players. High admin burden. Recruiting is a daily conversation.</p>
            </div>
            <div className={styles.tierBlock}>
              <h3 className="serif">High school</h3>
              <p>Athletic department teams. Coaches doubling as admins. Recruiting matters for every junior and senior on the roster.</p>
            </div>
            <div className={styles.tierBlock}>
              <h3 className="serif">Recreational</h3>
              <p>House leagues and rec organizations. 100–500 families. Registration and payments are the primary pain.</p>
            </div>
          </div>
          <p className={styles.credibility}>
            ClubStack was built first with competitive soccer clubs — the use case Bryan lives
            every day as a coach. The platform expands sport by sport as each new program comes
            online.
          </p>
        </div>
      </section>

      {/* PSC Differentiator */}
      <section className={styles.differentiator}>
        <div className={styles.container}>
          <div className={styles.differentiatorBox}>
            <div className={styles.differentiatorBadge}>The PSC differentiator</div>
            <h2 className="serif">A club platform with recruiting built in.</h2>
            <p>
              Recruiting is in PSC's DNA — built in from day one, not bolted on. ClubStack's
              Recruiting Integration Module gives staff a club-wide view of every player's recruiting status,
              division targets, last coach contact, and FUSE-ID enrollment — and gives families a
              clean check-in workflow to update what's actually happening with their player.
            </p>
            <ul className={styles.differentiatorList}>
              <li>Staff dashboard with status, division targets, and contact-log filters</li>
              <li>Player profiles with 8-stage recruiting status and RLS-protected internal notes</li>
              <li>Family-facing check-in queue — coaches see updates from families in one place</li>
              <li>Native bridge to <a href="/fuse-id" className={styles.differentiatorInlineLink}>FUSE-ID</a> for the families that want the AI platform</li>
            </ul>
            <p className={styles.differentiatorNote}>
              Recruiting Integration unlocks at the <strong>Club tier</strong> and above.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.pricing}>
        <div className={styles.container}>
          <h2 className="serif">Pricing built for directors, not for vendors</h2>
          <p className={styles.subtitle}>
            Flat monthly rate by org size — no per-player fees, no per-transaction tax, no
            unpredictable surprises at registration time. Annual plans save about 15% (two months
            free).
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
                <p className={styles.pricingMonthly}>{tier.monthly}</p>
                <p className={styles.pricingAnnual}>{tier.annual}</p>
                <p className={styles.pricingDetail}>{tier.detail}</p>
              </div>
            ))}
          </div>
          <p className={styles.pricingFootnote}>
            All paid tiers include Stripe-powered payments, unlimited admins, and unlimited
            coaching staff. Free tier excludes the payments and recruiting modules.
          </p>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className={styles.comparison}>
        <div className={styles.container}>
          <h2 className="serif">How ClubStack compares</h2>
          <p className={styles.subtitle}>
            What you get with ClubStack versus what the rest of the category offers.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className={styles.colUs}>ClubStack</th>
                  <th>GotSport</th>
                  <th>TeamSnap</th>
                  <th>SportsEngine</th>
                </tr>
              </thead>
              <tbody>
                {competitiveRows.map(([feature, us, gs, ts, se]) => (
                  <tr key={String(feature)}>
                    <td>{feature}</td>
                    <td className={styles.colUs}>{cellRender(us)}</td>
                    <td>{cellRender(gs)}</td>
                    <td>{cellRender(ts)}</td>
                    <td>{cellRender(se)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Built By a Coach */}
      <section className={styles.builtBy}>
        <div className={styles.container}>
          <div className={styles.builtByBox}>
            <h2 className="serif">Built by someone who actually coaches at your level.</h2>
            <p>
              ClubStack is built by Bryan Fossi — a current high school head coach and MLS Next
              Academy coach. Every workflow in the platform exists because of a real frustration
              from a real Tuesday-night practice or Saturday-morning tournament. No
              outsiders-guessing-what-clubs-need product design.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <h2 className="serif">ClubStack, answered.</h2>
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
          <h2 className="serif">Want early access?</h2>
          <p>
            ClubStack is launching soon. Join the waitlist for early access, founding-club
            pricing, and a direct line to Bryan when your club comes online.
          </p>
          <div className={styles.heroCtas}>
            <a
              href="https://clubstack.online"
              className={styles.ctaPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the waitlist
            </a>
            <a
              href="https://calendar.app.google/96Z4Kgp9mLh35sMj9"
              className={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a 15-min walkthrough
            </a>
          </div>
          <p className={styles.heroSubtext}>30 minutes · Free · No pitch.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
