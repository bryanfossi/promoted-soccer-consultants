import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './fuse-id.module.css'

export default function FuseId() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className="serif">FUSE-ID Recruiting Services</h1>
            <p>Navigate the college soccer recruiting process with clarity, realistic guidance, and NCAA-compliant education.</p>
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WqijoQUGp3BUMj6hE99CV6GOUGzFliVszCSbgCgX-B_VOfjNvAOWK6m_els0Y4Ge5LUniN65R" className={styles.ctaButtonSecondary} target="_blank" rel="noopener noreferrer">
              Schedule Free Consultation
            </a>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/fuse-id-logo.png" 
              alt="FUSE-ID Recruiting"
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className={styles.whatWeOffer}>
        <div className={styles.container}>
          <h2 className="serif">What We Provide</h2>
          <p className={styles.subtitle}>FUSE-ID is an education-first recruiting program. We don't make promises or guarantees—we provide clarity, strategy, and honest guidance.</p>
          
          <div className={styles.offeringsGrid}>
            <div className={styles.offeringCard}>
              <h3 className="serif">Recruiting Education</h3>
              <p>Understand NCAA rules, recruiting timelines, and what college coaches actually evaluate at each division level.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3 className="serif">Realistic Assessment</h3>
              <p>Honest evaluation of your player's competitive level and which college programs are realistic targets.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3 className="serif">Strategic Planning</h3>
              <p>Create a personalized recruiting roadmap based on academic standing, athletic ability, and family goals.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3 className="serif">Communication Support</h3>
              <p>Learn how and when to contact coaches, what to include in emails, and how to follow up effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className={styles.packages}>
        <div className={styles.container}>
          <h2 className="serif">Choose Your Package</h2>
          <p className={styles.subtitle}>Select the level of support that fits your family's needs</p>
          
          <div className={styles.packagesGrid}>
            {/* Basic Package */}
            <div className={styles.packageCard}>
              <h3 className="serif">Basic</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>350</span>
              </div>
              <p className={styles.packageDescription}>Essential education and guidance to get started</p>
              
              <ul className={styles.featureList}>
  <li>Initial consultation call (60 min)</li>
  <li>Player evaluation & realistic assessment</li>
  <li>Division-level targeting guidance</li>
  <li>Personalized college target list (40 schools)</li>
  <li>NCAA recruiting rules education</li>
  <li>Email template library</li>
  <li>Recruiting timeline roadmap</li>
</ul>
              
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0gVHwbknurMB721Ay_SJUDbVAxz3Imw09ZV9u6Ix4VIg8ZMhfqoBk6JgcllPGcPLRmmPRw39rb" className={styles.packageButton} target="_blank" rel="noopener noreferrer">
                Get Started with Basic
              </a>
            </div>

            {/* Premier Package */}
            <div className={`${styles.packageCard} ${styles.popular}`}>
              <div className={styles.popularBadge}>Most Popular</div>
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
</ul>
              
              <a href="https://buy.stripe.com/00w5kCgWZ4BR5Ao61b0oM01?locale=en&__embed_source=buy_btn_1SmHpkCEhePNOFCev3wHWtbb" className={`${styles.packageButton} ${styles.popularButton}`} target="_blank" rel="noopener noreferrer">
                Get Started with Premier
              </a>
            </div>

            {/* Elite Package */}
            <div className={styles.packageCard}>
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
              </ul>
              
              <a href="https://buy.stripe.com/6oUdR8gWZ0lBaUI2OZ0oM02?locale=en&__embed_source=buy_btn_1SmHtNCEhePNOFCenc9FsRRa" className={styles.packageButton} target="_blank" rel="noopener noreferrer">
                Get Started with Elite
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
              <p>Book a free 30-minute call to discuss your player's situation, goals, and which package fits best.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className="serif">Choose Your Package</h3>
              <p>Select Basic, Premier, or Elite based on your needs. No pressure—we'll help you decide what makes sense.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className="serif">Get Started</h3>
              <p>Complete enrollment, schedule your first strategy session, and begin building your recruiting roadmap.</p>
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
            <p>FUSE-ID is an <strong>education and consulting service</strong>, not an agency. We do not:</p>
            <ul>
              <li>Guarantee scholarships, roster spots, or recruiting outcomes</li>
              <li>Act as agents or negotiate with college coaches on your behalf</li>
              <li>Guarantee contact with specific programs or coaches</li>
              <li>Replace the work that players and families must do themselves</li>
            </ul>
            <p><strong>What we do:</strong> Provide honest guidance, realistic expectations, and NCAA-compliant education to help your family navigate the process with confidence.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className="serif">Ready to Start Your Recruiting Journey?</h2>
          <p>Schedule a free consultation to discuss your player's goals and find the right package for your family.</p>
          <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1WqijoQUGp3BUMj6hE99CV6GOUGzFliVszCSbgCgX-B_VOfjNvAOWK6m_els0Y4Ge5LUniN65R" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
            Schedule Free Consultation
          </a>
          <p className={styles.subtext}>30-minute call · No obligation · No pressure</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
