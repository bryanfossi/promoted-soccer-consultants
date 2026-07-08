import { Fragment } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import styles from './home.module.css'

const REGISTER = 'https://fuse-id.online/register'
const CALENDAR = 'https://calendar.app.google/96Z4Kgp9mLh35sMj9'
const CLUBSTACK = 'https://clubstack.online'
const GAFFER = 'https://askthegaffer.io/waitlist'

export const metadata = {
  description:
    'One company. Three tools. Every sport. ClubStack runs the club, Ask The Gaffer preps the coach, and FUSE-ID gets the family recruited — built by a coach who has been each of them.',
  alternates: { canonical: '/' },
  openGraph: {
    url: 'https://www.promotedsoccerconsultants.com/',
  },
}

const clubModules = [
  { name: 'Registration & waivers', body: 'Online forms by age group, digital waivers, returning-player auto-fill.' },
  { name: 'Payments & billing', body: 'Stripe payments, installment plans, late reminders, family balances.' },
  { name: 'Roster & teams', body: 'Team creation, staff assignment, season rollover, player history.' },
  { name: 'Scheduling & calendar', body: 'Facility-grid master schedule with conflict detection.' },
  { name: 'Communication', body: 'Broadcasts, pinned announcements with read tracking, and DMs.' },
]

const facilityRows = [
  { time: '5:00', cells: [{ t: 'U12 Boys', s: 'booked' }, { t: '', s: 'open' }, { t: 'U14 Girls', s: 'booked' }] },
  { time: '6:00', cells: [{ t: 'U16 Boys', s: 'booked' }, { t: 'Conflict', s: 'conflict' }, { t: '', s: 'open' }] },
  { time: '7:00', cells: [{ t: '', s: 'open' }, { t: 'U19 Girls', s: 'booked' }, { t: 'Keepers', s: 'booked' }] },
]

const gafferSteps = [
  { n: '1', h: 'Tell it about your team — once.', p: 'Roster, players, playing style. It remembers.' },
  { n: '2', h: 'Ask for what you need.', p: '“Build me a Tuesday session on pressing triggers.”' },
  { n: '3', h: 'Get it in minutes.', p: 'Printable, shareable, editable. It learns your preferences.' },
]

const gafferDiffs = [
  { h: 'It knows YOUR team', p: 'Not a generic ChatGPT drill — everything is shaped around your actual roster.' },
  { h: 'Built by a coach', p: 'Every workflow comes from real touchline problems, not a product team guessing.' },
  { h: 'Minutes, not evenings', p: 'Session plans, match prep, and scouting reports in minutes.' },
  { h: 'No video required', p: 'No automated video analysis — your inputs become your scouting report. A different job from Hudl, Wyscout, or Veo.' },
]

const fuseFeatures = [
  { name: 'AI school matching', body: '8-dimension scoring across 2,400+ programs, ranked Lock / Realistic / Reach.' },
  { name: 'AI coach emails', body: 'Personalized, program-specific drafts. You review and send — always.' },
  { name: 'Recruiting pipeline', body: 'Board, List, and Top-10 views with follow-up reminders.' },
  { name: 'Offer tracker', body: 'Side-by-side comparison with net-cost estimates.' },
  { name: 'Profile gap analysis', body: 'Where your profile falls short — and how to fix it first.' },
  { name: 'Public profile + parent access', body: 'Shareable URL for coaches; read-only view for parents.' },
]

const kanbanCols = [
  { head: 'Researching', cards: [{ n: 'Northgate University', d: 'D2 · Regional' }, { n: 'Riverside College', d: 'D3' }] },
  { head: 'Contacted', cards: [{ n: 'Lakeside State', d: 'D1 · mid-major' }, { n: 'Fairview College', d: 'D3' }] },
  { head: 'Visited', cards: [{ n: 'Summit State', d: 'NAIA' }] },
  { head: 'Offer', cards: [{ n: 'Hillcrest University', d: 'D2' }] },
]

const fuseSteps = [
  { n: '1', h: 'Build your profile.', p: 'Stats, film, academics, schedule — one shareable page.' },
  { n: '2', h: 'Run the match engine.', p: 'See where you actually fit across 2,400+ programs.' },
  { n: '3', h: 'Reach out and track it.', p: 'Draft coach emails, log every reply, compare offers.' },
]

const ecoNodes = [
  { cls: styles.ecoNodeClub, role: 'The club', name: 'ClubStack', p: 'Registration, payments, rosters, scheduling, and communication in one place.' },
  { cls: styles.ecoNodeGaffer, role: 'The coach', name: 'Ask The Gaffer', p: 'Session plans, match prep, and scouting reports built around your team.' },
  { cls: styles.ecoNodeFuse, role: 'The athlete + family', name: 'FUSE-ID', p: 'AI-matched schools, coach outreach, and offer tracking the family owns.' },
]

const credentials = [
  'Former D1 college player',
  'College assistant coach who evaluated and recruited prospects',
  '9 years a varsity high school head coach — multiple District Championships and Coach of the Year',
  'Current MLS Next Academy Division coach',
  'Deep NCAA, NAIA, and NJCAA rules knowledge',
]

function cellClass(s: string) {
  if (s === 'booked') return styles.facBooked
  if (s === 'conflict') return styles.facConflict
  return ''
}

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* 1 · Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={`serif ${styles.heroH1}`}>
            One company. <span className={styles.gold}>Three tools.</span> Every sport.
          </h1>
          <p className={styles.heroSub}>
            For the director running a club, the coach prepping a team, and the family chasing the
            next level — one company, three tools, built by a coach who has been each of them.
          </p>
          <div className={styles.heroCtas}>
            <a href="#suite" className={styles.btnPrimary}>Explore the products</a>
            <a href={CALENDAR} className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
              Schedule Consultation
            </a>
          </div>
          <p className={styles.heroTrust}>30 minutes · Free · No pitch</p>
        </div>
        <div className={styles.heroPanels} aria-hidden="true">
          <div className={`${styles.panel} ${styles.panelClub}`}>
            <div className={styles.panelTag}>Runs the club</div>
            <div className={styles.panelName}>ClubStack</div>
            <div className={styles.panelLine} /><div className={styles.panelLine} />
            <div className={styles.panelLine} /><div className={styles.panelAccent} />
          </div>
          <div className={`${styles.panel} ${styles.panelGaffer}`}>
            <div className={styles.panelTag}>Preps the coach</div>
            <div className={styles.panelName}>Ask The Gaffer</div>
            <div className={styles.panelLine} /><div className={styles.panelLine} />
            <div className={styles.panelLine} /><div className={styles.panelAccent} />
          </div>
          <div className={`${styles.panel} ${styles.panelFuse}`}>
            <div className={styles.panelTag}>Gets them recruited</div>
            <div className={styles.panelName}>FUSE-ID</div>
            <div className={styles.panelLine} /><div className={styles.panelLine} />
            <div className={styles.panelLine} /><div className={styles.panelAccent} />
          </div>
        </div>
      </section>

      {/* 2 · Suite intro strip */}
      <section className={styles.suite} id="suite" aria-labelledby="suite-heading">
        <div className={styles.container} id="why-us">
          <span className={styles.sectionEyebrow}>Three independent products, one coach</span>
          <h2 id="suite-heading" className={`serif ${styles.suiteTitle}`}>
            Each one stands alone. Together, they cover the whole youth-sports triangle.
          </h2>
          <p className={styles.suiteLead}>Pick the one that fits your job today. Where do you sit?</p>
          <div className={styles.suiteChips}>
            <a href="/clubstack" className={`${styles.chip} ${styles.chipClub}`}>
              <span className={styles.chipRole}>I run a club</span>
              <span className={styles.chipProduct}>→ ClubStack</span>
            </a>
            <a href="/ask-the-gaffer" className={`${styles.chip} ${styles.chipGaffer}`}>
              <span className={styles.chipRole}>I coach a team</span>
              <span className={styles.chipProduct}>→ Ask The Gaffer</span>
            </a>
            <a href="/fuse-id" className={`${styles.chip} ${styles.chipFuse}`}>
              <span className={styles.chipRole}>I’m an athlete or parent</span>
              <span className={styles.chipProduct}>→ FUSE-ID</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 · ClubStack */}
      <section className={`${styles.prodSection} ${styles.club}`}>
        <div className={styles.container}>
          <div className={styles.prodHead}>
            <Image src="/clubstack-mark.png" alt="ClubStack" width={223} height={258} className={styles.markShield} />
            <span className={styles.sectionEyebrow}>ClubStack · runs the club</span>
            <span className={styles.comingSoon}>Coming soon · waitlist open</span>
            <h2 className={`serif ${styles.prodTagline}`}>Run your club. Not your inbox.</h2>
            <p>
              The all-in-one club platform — with a built-in recruiting layer most club software
              doesn’t have. Replace the registration site, the payments spreadsheet, and five group
              texts.
            </p>
          </div>

          <div className={styles.moduleGrid}>
            {clubModules.map((m) => (
              <div className={styles.moduleCard} key={m.name}>
                <h3 className="serif">{m.name}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.facilityWrap} aria-hidden="true">
            <div className={styles.facilityTitle}>Master schedule · conflict detection</div>
            <div className={styles.facilityGrid}>
              <div className={`${styles.facCell} ${styles.facHead}`}></div>
              <div className={`${styles.facCell} ${styles.facHead}`}>Field 1</div>
              <div className={`${styles.facCell} ${styles.facHead}`}>Field 2</div>
              <div className={`${styles.facCell} ${styles.facHead}`}>Field 3</div>
              {facilityRows.map((row) => (
                <Fragment key={row.time}>
                  <div className={`${styles.facCell} ${styles.facTime}`}>{row.time}</div>
                  {row.cells.map((c, i) => (
                    <div className={`${styles.facCell} ${cellClass(c.s)}`} key={i}>{c.t}</div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>

          <div className={styles.onlyBand}>
            <span className={styles.onlyBadge}>The ClubStack difference</span>
            <p>
              The Recruiting Integration Module gives directors a club-wide view of every player’s
              recruiting status — and bridges natively into FUSE-ID. Recruiting visibility is built
              in from day one, not bolted on.
            </p>
          </div>

          <div className={styles.pricePills}>
            <span className={styles.pricePill}><strong>Free</strong> ≤25</span>
            <span className={styles.pricePill}><strong>Team</strong> $49</span>
            <span className={styles.pricePill}><strong>Starter</strong> $129</span>
            <span className={`${styles.pricePill} ${styles.pricePillHot}`}><strong>Club</strong> $249 · recruiting</span>
            <span className={styles.pricePill}><strong>Academy</strong> $449</span>
            <span className={styles.pricePill}><strong>Enterprise</strong> custom</span>
          </div>

          <a href={CLUBSTACK} className={styles.clubCta} target="_blank" rel="noopener noreferrer">
            Join the waitlist · founding-club pricing →
          </a>
        </div>
      </section>

      {/* 4 · Ask The Gaffer */}
      <section className={`${styles.prodSection} ${styles.gaffer}`}>
        <div className={styles.container}>
          <div className={styles.prodHead}>
            <Image src="/gaffer-avatar.png" alt="The Gaffer" width={540} height={540} className={styles.markAvatar} />
            <span className={styles.sectionEyebrow}>Ask The Gaffer · preps the coach</span>
            <h2 className={`serif ${styles.prodTagline}`}>It already knows your team.</h2>
            <p>
              An AI prep assistant that knows your roster and style — and turns it into session
              plans, match prep, and scouting reports in minutes. Launching August 2026.
            </p>
          </div>

          <div className={styles.steps}>
            {gafferSteps.map((s) => (
              <div className={styles.stepCard} key={s.n}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3 className="serif">{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          <div className={styles.gafferBody}>
            <div className={styles.sessionMock} aria-hidden="true">
              <div className={styles.sessionHead}>“Build me a Tuesday session on pressing triggers.”</div>
              <div className={styles.sessionBody}>
                <div className={styles.sessionTitle}>Tuesday · Pressing triggers · U16</div>
                <ul className={styles.sessionList}>
                  <li><span>Warm-up</span><span>Rondo 4v2, press the split pass</span><em>15′</em></li>
                  <li><span>Phase 1</span><span>Trigger recognition — back-pass</span><em>20′</em></li>
                  <li><span>Main</span><span>7v7 pressing shape, wide overloads</span><em>25′</em></li>
                  <li><span>Game</span><span>Win it back in 6 seconds</span><em>15′</em></li>
                </ul>
              </div>
            </div>
            <div className={styles.diffGrid}>
              {gafferDiffs.map((d) => (
                <div className={styles.diffCard} key={d.h}>
                  <h4>{d.h}</h4>
                  <p>{d.p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.gafferFooter}>
            <div className={styles.gafferPrice}>
              From <strong>$29/month</strong> · or a <strong>$149 Season Pass</strong> for the months you’re actually coaching · club rollouts available.
            </div>
            <a href={GAFFER} className={styles.gafferCta} target="_blank" rel="noopener noreferrer">
              Join the waitlist →
            </a>
          </div>

          <div className={styles.goAgain} aria-hidden="true">WE GO AGAIN.</div>
        </div>
      </section>

      {/* 5 · FUSE-ID */}
      <section className={`${styles.prodSection} ${styles.fuse}`}>
        <div className={styles.container}>
          <div className={styles.prodHead}>
            <Image src="/fuse-id-wordmark.png" alt="FUSE-ID" width={1304} height={336} className={styles.markWordmark} />
            <span className={styles.sectionEyebrow}>FUSE-ID · gets the family recruited</span>
            <h2 className={`serif ${styles.prodTagline}`}>
              The AI college recruiting platform for student-athletes — and the parents in their corner.
            </h2>
            <p>
              Match across 2,400+ programs (D1, D2, D3, NAIA, NJCAA), draft program-specific coach
              emails, and track every offer. Free to start, athletes 13+.
            </p>
          </div>

          <div className={styles.featGrid}>
            {fuseFeatures.map((f) => (
              <div className={styles.featCard} key={f.name}>
                <h3 className="serif">{f.name}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.kanban} aria-hidden="true">
            {kanbanCols.map((col) => (
              <div className={styles.kanColumn} key={col.head}>
                <div className={styles.kanColHead}>{col.head}</div>
                {col.cards.map((c) => (
                  <div className={styles.kanCard} key={c.n}>
                    {c.n}<span>{c.d}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.fuseSteps}>
            {fuseSteps.map((s) => (
              <div className={styles.fuseStep} key={s.n}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3 className="serif">{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>

          <div className={styles.fusePricePills}>
            <span className={styles.fusePricePill}><strong>Free</strong> $0/forever</span>
            <span className={styles.fusePricePill}><strong>Starter</strong> $9.99/mo</span>
            <span className={styles.fusePricePill}><strong>Pro</strong> $14.99/mo</span>
          </div>

          <div className={styles.compareBand}>
            NCSA, SportsRecruits, and FieldLevel typically run <strong>$100+/month</strong>. FUSE-ID
            is free to start — <strong>most plans are under $10/month</strong>.
          </div>

          <a href={REGISTER} className={styles.fuseCta} target="_blank" rel="noopener noreferrer">
            Start free →
          </a>
        </div>
      </section>

      {/* 6 · Ecosystem triangle */}
      <section className={styles.eco} id="ecosystem">
        <div className={styles.container}>
          <span className={styles.sectionEyebrow}>The youth-sports triangle</span>
          <h2 className={`serif ${styles.ecoTitle}`}>Club ⇄ Coach ⇄ Athlete + Family.</h2>
          <div className={styles.ecoTriangle}>
            {ecoNodes.map((n, i) => (
              <Fragment key={n.name}>
                <div className={`${styles.ecoNode} ${n.cls}`}>
                  <div className={styles.ecoRole}>{n.role}</div>
                  <h3 className="serif">{n.name}</h3>
                  <p>{n.p}</p>
                </div>
                {i < ecoNodes.length - 1 ? (
                  <div className={styles.ecoConnector} aria-hidden="true">⇄</div>
                ) : null}
              </Fragment>
            ))}
          </div>
          <div className={styles.threadBand}>
            The recruiting thread runs through all three — ClubStack’s recruiting module bridges
            natively into FUSE-ID. Adopt any one on its own; they work better together.
          </div>
        </div>
      </section>

      {/* 7 · Founder */}
      <section className={styles.founder} id="about">
        <div className={styles.founderInner}>
          <span className={styles.sectionEyebrow}>The founder</span>
          <blockquote className={styles.founderQuote}>
            Every product exists because he hit the problem himself.
          </blockquote>
          <ul className={styles.credList}>
            {credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 · Services strip (subordinate) */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesHead}>
            <span className={styles.sectionEyebrow}>Want a human in the loop?</span>
            <h2 className="serif">Two human-led services, when software isn’t enough.</h2>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className="serif">Recruiting Services</h3>
              <p>A former college coach guiding evaluation, coach communication, and offer review. FUSE-ID Pro included.</p>
              <div className={styles.serviceTiers}>Basic $350 · Premier $2,500 · Elite $5,000</div>
              <a href="/recruiting-services" className={styles.serviceLink}>See Recruiting Services →</a>
            </div>
            <div className={styles.serviceCard}>
              <h3 className="serif">Club Consulting</h3>
              <p>Strategic planning, coach education, player-pathway design, and parent-communication frameworks — scoped to your club.</p>
              <div className={styles.serviceTiers}>Custom engagements · priced per scope</div>
              <a href="/club-consulting" className={styles.serviceLink}>See Club Consulting →</a>
            </div>
          </div>
          <p className={styles.servicesConsult}>
            Not sure which fits?{' '}
            <a href={CALENDAR} target="_blank" rel="noopener noreferrer">
              Book a free 30-minute consult →
            </a>{' '}
            <span>No pitch.</span>
          </p>
        </div>
      </section>

      {/* 9 · Newsletter */}
      <Newsletter />

      {/* 10 · Final CTA band */}
      <section className={styles.finalCta}>
        <h2>
          Whether you run a club, coach a team, or are chasing the next level — there’s a tool for
          that.
        </h2>
        <div className={styles.finalLinks}>
          <a href="/clubstack" className={`${styles.finalLink} ${styles.finalLinkClub}`}>
            <span className={styles.finalLinkName}>ClubStack</span>
            <span className={styles.finalLinkDesc}>Run the club</span>
          </a>
          <a href="/ask-the-gaffer" className={`${styles.finalLink} ${styles.finalLinkGaffer}`}>
            <span className={styles.finalLinkName}>Ask The Gaffer</span>
            <span className={styles.finalLinkDesc}>Prep the coach</span>
          </a>
          <a href="/fuse-id" className={`${styles.finalLink} ${styles.finalLinkFuse}`}>
            <span className={styles.finalLinkName}>FUSE-ID</span>
            <span className={styles.finalLinkDesc}>Get recruited</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
