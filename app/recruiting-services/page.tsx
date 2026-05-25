import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './recruiting-services.module.css'

export const metadata = {
  title: 'Recruiting Services — Human-Led Recruiting Support',
  description:
    "PSC's hands-on recruiting service for families who want a coach in their corner. Basic, Premier, and Elite packages — paired with FUSE-ID for the families that want both software and a human.",
  alternates: { canonical: '/recruiting-services' },
  openGraph: {
    title: 'Recruiting Services | Promoted Sports Consultants',
    description:
      "Human-led recruiting support paired with FUSE-ID. Basic, Premier, and Elite packages for families who want a coach guiding the process.",
    url: 'https://www.promotedsoccerconsultants.com/recruiting-services',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.promotedsoccerconsultants.com/recruiting-services#service',
  name: 'Recruiting Services',
  alternateName: 'PSC Recruiting Services',
  url: 'https://www.promotedsoccerconsultants.com/recruiting-services',
  description:
    "Human-led recruiting consulting from a former college coach. Basic, Premier, and Elite packages providing realistic evaluation, division-by-division strategy, and decision support for families.",
  provider: { '@id': 'https://www.promotedsoccerconsultants.com#organization' },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'College Recruiting Consulting',
  audience: {
    '@type': 'Audience',
    audienceType: 'Student athletes and families navigating the college recruiting process',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Recruiting Services Packages',
    itemListElement: [
      { '@type': 'Offer', name: 'Basic', price: '350', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Premier', price: '2500', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Elite', price: '5000', priceCurrency: 'USD' },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promotedsoccerconsultants.com' },
    { '@type': 'ListItem', position: 2, name: 'Recruiting Services', item: 'https://www.promotedsoccerconsultants.com/recruiting-services' },
  ],
}

export default function RecruitingServices() {
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

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className="serif">A coach in your corner for the recruiting process.</h1>
            <p>
              Recruiting Services is the human-led tier of PSC. FUSE-ID handles the software side
              of recruiting — match scoring, AI emails, pipeline tracking. Recruiting Services
              adds a former college coach helping you make the calls that software can't make for
              you.
            </p>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WqijoQUGp3BUMj6hE99CV6GOUGzFliVszCSbgCgX-B_VOfjNvAOWK6m_els0Y4Ge5LUniN65R"
              className={styles.ctaButtonSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Free Consultation
            </a>
            <p className={styles.subtext}>30 minutes &middot; Free &middot; No pitch</p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/psc-logo-mark.png"
              alt=""
              width={512}
              height={512}
              priority
              sizes="(max-width: 768px) 220px, 280px"
            />
          </div>
        </div>
      </section>

      {/* How This Fits With FUSE-ID */}
      <section className={styles.fitBlock}>
        <div className={styles.container}>
          <div className={styles.fitBox}>
            <div className={styles.fitBadge}>How this works</div>
            <h2 className="serif">FUSE-ID does the work software does best. We do the rest.</h2>
            <p>
              Most families don't need to choose between a platform and a person — they need both.
              FUSE-ID gives every athlete the same recruiting intelligence elite programs have:
              match scoring, personalized coach emails, offer comparisons. Recruiting Services adds
              the part FUSE-ID can't: a coach who has been in the room when offers were made, who
              can read between the lines of a coach's message, who can sit on the phone when the
              decision is hard.
            </p>
            <p>
              <strong>Every Recruiting Services client gets FUSE-ID Pro included</strong>, so
              you're never paying twice for overlapping work.
            </p>
            <a href="/fuse-id" className={styles.fitLink}>
              Learn more about FUSE-ID →
            </a>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className={styles.whatWeOffer}>
        <div className={styles.container}>
          <h2 className="serif">What We Provide</h2>
          <p className={styles.subtitle}>
            Recruiting Services is education-first. We don't make promises or guarantees — we
            provide clarity, strategy, and honest guidance.
          </p>

          <div className={styles.offeringsGrid}>
            <div className={styles.offeringCard}>
              <h3 className="serif">Recruiting Education</h3>
              <p>NCAA rules, recruiting timelines, and what college coaches actually evaluate at each division level.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3 className="serif">Realistic Assessment</h3>
              <p>Honest evaluation of your athlete's competitive level and which college programs are realistic targets.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3 className="serif">Strategic Planning</h3>
              <p>A personalized recruiting roadmap based on academic standing, athletic ability, and family goals.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3 className="serif">Communication Support</h3>
              <p>How and when to contact coaches, what to include in outreach, and how to follow up without overstepping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.packages}>
        <div className={styles.container}>
          <h2 className="serif">Choose Your Package</h2>
          <p className={styles.subtitle}>Select the level of support that fits your family's needs.</p>

          <div className={styles.packagesGrid}>
            {/* Basic */}
            <div className={styles.packageCard}>
              <h3 className="serif">Basic</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>350</span>
              </div>
              <p className={styles.packageDescription}>Essential education and guidance to get started</p>

              <ul className={styles.featureList}>
                <li>Initial consultation call (60 min)</li>
                <li>Athlete evaluation &amp; realistic assessment</li>
                <li>Division-level targeting guidance</li>
                <li>Personalized college target list (40 schools)</li>
                <li>NCAA recruiting rules education</li>
                <li>Email template library</li>
                <li>Recruiting timeline roadmap</li>
                <li><strong>FUSE-ID Pro included</strong></li>
              </ul>

              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0gVHwbknurMB721Ay_SJUDbVAxz3Imw09ZV9u6Ix4VIg8ZMhfqoBk6JgcllPGcPLRmmPRw39rb"
                className={styles.packageButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started with Basic
              </a>
            </div>

            {/* Premier */}
            <div className={`${styles.packageCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>Most Popular</div>
              <div className={styles.includedBadge}>
                <span className={styles.includedIcon}>✓</span> Recruiting Website Included
              </div>
              <h3 className="serif">Premier</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>2,500</span>
              </div>
              <p className={styles.packageDescription}>Comprehensive support throughout the recruiting process</p>

              <ul className={styles.featureList}>
                <li>Everything in Basic, plus:</li>
                <li>Monthly strategy calls (9 months)</li>
                <li>Email and communication review</li>
                <li>Video profile guidance</li>
                <li>Academic eligibility planning</li>
                <li>Official visit preparation</li>
                <li>Offer evaluation support</li>
                <li className={styles.highlightFeature}><strong>Player Recruiting Website ($199 value)</strong></li>
              </ul>

              <a
                href="https://buy.stripe.com/00w5kCgWZ4BR5Ao61b0oM01?locale=en&__embed_source=buy_btn_1SmHpkCEhePNOFCev3wHWtbb"
                className={`${styles.packageButton} ${styles.popularButton}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started with Premier
              </a>
            </div>

            {/* Elite */}
            <div className={styles.packageCard}>
              <div className={styles.includedBadge}>
                <span className={styles.includedIcon}>✓</span> Recruiting Website Included
              </div>
              <h3 className="serif">Elite</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>5,000</span>
              </div>
              <p className={styles.packageDescription}>White-glove service with ongoing support</p>

              <ul className={styles.featureList}>
                <li>Everything in Premier, plus:</li>
                <li>Extended support (12 months)</li>
                <li>Unlimited email/text support</li>
                <li>Bi-weekly check-in calls</li>
                <li>Camp and showcase recommendations</li>
                <li>Financial aid strategy</li>
                <li>Transfer portal guidance (if needed)</li>
                <li>Family advocacy and support</li>
                <li className={styles.highlightFeature}><strong>Player Recruiting Website ($199 value)</strong></li>
              </ul>

              <a
                href="https://buy.stripe.com/6oUdR8gWZ0lBaUI2OZ0oM02?locale=en&__embed_source=buy_btn_1SmHtNCEhePNOFCenc9FsRRa"
                className={styles.packageButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started with Elite
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Already Enrolled */}
      <section className={styles.alreadyEnrolled}>
        <div className={styles.container}>
          <div className={styles.enrolledBox}>
            <h2 className="serif">Already enrolled? Access your FUSE-ID dashboard.</h2>
            <p>
              Log in to your recruiting CRM, track your school list, and use your AI tools.
              Recruiting Services clients get FUSE-ID Pro included with every package.
            </p>
            <a
              href="https://fuse-id.online"
              className={styles.enrolledButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to FUSE-ID Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Player Recruiting Website */}
      <section className={styles.recruitingWebsite}>
        <div className={styles.container}>
          <div className={styles.websiteContent}>
            <div className={styles.websiteText}>
              <h2 className="serif">Professional Player Recruiting Website</h2>
              <p>
                Give coaches one easy link with everything they need to evaluate your athlete.
                A professional recruiting website makes you easier to find, follow, and remember
                — and goes beyond the public profile FUSE-ID already provides.
              </p>
              <p>
                Custom subdomain (playername.promotedsoccerconsultants.com), embedded highlight
                videos, stats, academic info, game schedule, and direct coach contact form.
              </p>

              <div className={styles.websitePrice}>
                <div className={styles.priceTag}>$199</div>
                <p className={styles.priceDetail}>one-time payment · setup in 5 business days</p>
                <p className={styles.priceIncluded}>Included FREE with Premier &amp; Elite packages</p>
              </div>

              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WqijoQUGp3BUMj6hE99CV6GOUGzFliVszCSbgCgX-B_VOfjNvAOWK6m_els0Y4Ge5LUniN65R"
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </div>

            <div>
              <h3 className="serif">Why It Works:</h3>
              <ul className={styles.websiteList}>
                <li>Coaches bookmark it — not buried in email</li>
                <li>Always current — update stats anytime</li>
                <li>Mobile-friendly — review on any device</li>
                <li>Professional impression — shows organization</li>
                <li>A tool, not a guarantee — makes evaluation easier</li>
                <li>You own all content — 1 year hosting included</li>
              </ul>

              <a
                href="https://playername.promotedsoccerconsultants.com"
                className={styles.viewExample}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Example →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className="serif">How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className="serif">Schedule Consultation</h3>
              <p>Book a free 30-minute call to discuss your athlete's situation, goals, and which package fits best.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className="serif">Choose Your Package</h3>
              <p>Select Basic, Premier, or Elite based on your needs. No pressure — we'll help you decide what makes sense.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className="serif">Get Started</h3>
              <p>Complete enrollment, get your FUSE-ID Pro access, and schedule your first strategy session.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className="serif">Execute Together</h3>
              <p>We guide you through outreach, communication, evaluation, and decision-making every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className={styles.notice}>
        <div className={styles.container}>
          <div className={styles.noticeBox}>
            <h3 className="serif">Important: What We Don't Do</h3>
            <p>
              Recruiting Services is an <strong>education and consulting service</strong>, not an
              agency. We do not:
            </p>
            <ul>
              <li>Guarantee scholarships, roster spots, or recruiting outcomes</li>
              <li>Act as agents or negotiate with college coaches on your behalf</li>
              <li>Guarantee contact with specific programs or coaches</li>
              <li>Replace the work that athletes and families must do themselves</li>
            </ul>
            <p>
              <strong>What we do:</strong> Provide honest guidance, realistic expectations, and
              NCAA-compliant education to help your family navigate the process with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className="serif">Ready to Start Your Recruiting Journey?</h2>
          <p>Schedule a free consultation to discuss your athlete's goals and find the right package for your family.</p>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WqijoQUGp3BUMj6hE99CV6GOUGzFliVszCSbgCgX-B_VOfjNvAOWK6m_els0Y4Ge5LUniN65R"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Free Consultation
          </a>
          <p className={styles.subtext}>30 minutes · Free · No pitch</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
