import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './club-consulting.module.css'

export default function ClubConsulting() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className="serif">Club Consulting Services</h1>
            <p>Strengthen your soccer organization with strategic planning, coach development, and sustainable growth frameworks.</p>
            <a href="https://calendar.app.google/96Z4Kgp9mLh35sMj9" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
  Schedule Free Consultation Call
</a>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/promoted-soccer-consultants.png" 
              alt="Promoted Soccer Consultants"
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
          <p className={styles.subtext}>30-minute call · No obligation · Completely free</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
