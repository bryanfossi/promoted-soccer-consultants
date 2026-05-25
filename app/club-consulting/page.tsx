import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './club-consulting.module.css'

export const metadata = {
  title: 'Club Consulting Services',
  description:
    "Strategic consulting for youth sports clubs and organizations: club audits, coach education, player pathway alignment, and parent communication frameworks.",
  alternates: { canonical: '/club-consulting' },
  openGraph: {
    title: 'Club Consulting Services | Promoted Sports Consultants',
    description:
      'Strategic consulting for youth sports clubs: audits, coach education, player pathways, and parent communication.',
    url: 'https://www.promotedsoccerconsultants.com/club-consulting',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.promotedsoccerconsultants.com/club-consulting#service',
  name: 'Club Consulting Services',
  url: 'https://www.promotedsoccerconsultants.com/club-consulting',
  description:
    'Strategic consulting for youth sports clubs and organizations: club audits, coach education, player pathway alignment, and parent communication frameworks.',
  provider: { '@id': 'https://www.promotedsoccerconsultants.com#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Youth Sports Club Strategic Consulting',
  audience: {
    '@type': 'Audience',
    audienceType: 'Competitive youth clubs, recreational programs, high school programs',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Club Consulting Offerings',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic Planning & Club Audits' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Coach Education & Support' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Player Pathway Alignment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parent Communication Frameworks' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Club Consulting', item: 'https://www.promotedsoccerconsultants.com/club-consulting' },
  ],
}

export default function ClubConsulting() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className="serif">Stronger Clubs Start With Honest Strategic Guidance</h1>
            <p>Strategic consulting for youth sports clubs, recreational programs, and high school programs ready to grow without compromising development.</p>
            <a href="https://calendar.app.google/96Z4Kgp9mLh35sMj9" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
              Schedule Free Consultation Call
            </a>
            <p className={styles.subtext}>30 minutes &middot; Free &middot; No pitch</p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/psc-logo-full.png"
              alt=""
              width={1600}
              height={533}
              priority
              sizes="(max-width: 768px) 280px, 380px"
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className="serif">What We Offer</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className="serif">Strategic Planning & Club Audits</h3>
              <p>Comprehensive evaluation of your club's structure, operations, and competitive positioning. We identify strengths, gaps, and opportunities for sustainable growth.</p>
              <ul>
                <li>Organizational assessment</li>
                <li>Competitive analysis</li>
                <li>3-5 year strategic roadmap</li>
                <li>Implementation support</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3 className="serif">Coach Education & Support</h3>
              <p>Develop your coaching staff with tailored education programs, mentorship, and ongoing professional development resources.</p>
              <ul>
                <li>Coaching philosophy alignment</li>
                <li>Technical and tactical training</li>
                <li>Age-appropriate curriculum design</li>
                <li>One-on-one coach mentoring</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3 className="serif">Player Pathway Alignment</h3>
              <p>Create clear, developmentally appropriate player pathways that align with your club's philosophy and prepare athletes for the next level.</p>
              <ul>
                <li>Age-group progression frameworks</li>
                <li>Playing time and development balance</li>
                <li>Talent identification systems</li>
                <li>College recruiting support</li>
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <h3 className="serif">Parent Communication Frameworks</h3>
              <p>Establish transparent, effective communication systems that build trust and manage expectations with families.</p>
              <ul>
                <li>Parent education programs</li>
                <li>Communication protocols</li>
                <li>Conflict resolution strategies</li>
                <li>Expectation-setting frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clubstack Callout */}
      <section className={styles.clubstackCallout}>
        <div className={styles.container}>
          <div className={styles.calloutBox}>
            <div className={styles.calloutBadge}>Looking for software, not consulting?</div>
            <h2 className="serif">Clubstack handles registration, payments, rosters, scheduling, and recruiting visibility.</h2>
            <p>
              The operational side of running a club — registration forms, installment plans,
              roster management, master schedule, broadcast communication, and a club-wide
              recruiting dashboard — is exactly what <strong>Clubstack</strong> was built to
              solve. If you came here for software, that's where to start.
            </p>
            <p>
              Many clubs use both: Clubstack for day-to-day operations, plus a Club Consulting
              engagement for the strategic work that software can't do.
            </p>
            <a href="/clubstack" className={styles.calloutButton}>
              See Clubstack →
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className={styles.approach}>
        <div className={styles.container}>
          <h2 className="serif">Our Approach</h2>
          <div className={styles.approachContent}>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className="serif">Discovery Call</h3>
              <p>We start with a free consultation to understand your club's unique challenges, goals, and organizational culture.</p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className="serif">Assessment & Analysis</h3>
              <p>We conduct a thorough evaluation of your current operations, identifying opportunities and creating a tailored action plan.</p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className="serif">Implementation</h3>
              <p>We work alongside your leadership team to implement solutions, provide training, and ensure sustainable change.</p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>4</div>
              <h3 className="serif">Ongoing Support</h3>
              <p>We remain available for check-ins, adjustments, and continued guidance as your club grows and evolves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className={styles.whoWeWorkWith}>
        <div className={styles.container}>
          <h2 className="serif">Who We Work With</h2>
          <div className={styles.clientTypes}>
            <div className={styles.clientCard}>
              <h3 className="serif">Competitive Youth Clubs</h3>
              <p>Travel and academy programs looking to strengthen infrastructure, improve player development pathways, and build sustainable competitive success.</p>
            </div>
            <div className={styles.clientCard}>
              <h3 className="serif">Recreational Programs</h3>
              <p>Community organizations seeking to create positive youth sports experiences while building strong foundations for player growth.</p>
            </div>
            <div className={styles.clientCard}>
              <h3 className="serif">High School Programs</h3>
              <p>School-based teams working to elevate their competitive level, develop coaching staff, and support college-bound athletes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className="serif">Ready to Strengthen Your Club?</h2>
          <p>Schedule a free consultation call to discuss your organization's needs and how we can help you achieve your goals.</p>
          <a href="https://calendar.app.google/96Z4Kgp9mLh35sMj9" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
  Schedule Free Consultation Call
</a>
          <p className={styles.subtext}>30 minutes &middot; Free &middot; No pitch</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
