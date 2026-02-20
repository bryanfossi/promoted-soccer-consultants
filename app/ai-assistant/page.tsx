import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './ai-assistant.module.css'

export const metadata = {
  title: 'PSC AI Assistant | Your 24/7 College Soccer Recruiting Expert',
  description: 'Get instant, accurate answers to your college soccer recruiting questions. The PSC AI Assistant is trained on full NCAA rules and PSC expertise — exclusively for PSC clients.',
}

export default function AIAssistantPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>PSC Exclusive</div>
            <h1 className="serif">Your Personal Recruiting Assistant. Available 24/7.</h1>
            <p>
              The PSC AI Assistant gives you instant, expert answers to your college soccer
              recruiting questions — trained on full NCAA rules and PSC&apos;s proven methodology.
              No waiting. No Googling. Just clear answers.
            </p>
            <a href="https://ai.promotedsoccerconsultants.com" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
              Unlock the PSC AI Assistant
            </a>
            <p className={styles.heroSubtext}>Exclusively available to PSC subscribers</p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.chatPreview}>
              <div className={styles.chatHeader}>
                <div className={styles.chatDot}></div>
                <span>PSC AI Assistant</span>
                <span className={styles.chatLive}>Live</span>
              </div>
              <div className={styles.chatMessages}>
                <div className={styles.chatMessageUser}>
                  What do coaches look for in a player?
                </div>
                <div className={styles.chatMessageBot}>
                  College coaches evaluate players across four areas: technical ability, athleticism,
                  soccer IQ, and character. At the D1 level, athleticism is non-negotiable — but
                  coachability and film that shows decision-making under pressure often separates
                  similar players. Want me to break down what each division prioritizes?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className={styles.whatItIs}>
        <div className={styles.container}>
          <h2 className="serif">What Is the PSC AI Assistant?</h2>
          <p className={styles.subtitle}>
            A conversational AI built specifically for Promoted Soccer Consultants clients.
            Unlike a generic chatbot, the PSC AI is trained on real NCAA recruiting rules,
            PSC&apos;s consulting philosophy, and the questions families actually ask — so the
            answers are accurate, relevant, and actionable.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className="serif">What It Can Do</h2>
          <p className={styles.subtitle}>
            Your personal recruiting expert — in your pocket, around the clock.
          </p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📋</div>
              <h3 className="serif">Full NCAA Rule Knowledge</h3>
              <p>
                Ask anything about Division I, II, or III recruiting rules — contact periods,
                official visits, scholarship limits, dead periods, and more. No outdated
                summaries. Current, complete, accurate.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3 className="serif">PSC Methodology Built In</h3>
              <p>
                The assistant understands PSC&apos;s philosophy, services, and approach. It gives
                answers consistent with what your consultant would tell you — not generic
                internet advice that may mislead your family.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🕐</div>
              <h3 className="serif">Available 24/7</h3>
              <p>
                Got a question at 10pm the night before a showcase? Wondering about roster
                spots while reviewing film on a Sunday? The PSC AI is always on and
                always ready to help.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💬</div>
              <h3 className="serif">Conversational & Personalized</h3>
              <p>
                Ask follow-up questions. Dig deeper. The AI understands context across a
                conversation, so you get specific answers — not a wall of generic text
                you have to sort through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Questions */}
      <section className={styles.examples}>
        <div className={styles.container}>
          <h2 className="serif">Ask It Anything</h2>
          <p className={styles.subtitle}>Here are just a few of the questions families ask the PSC AI every day.</p>
          <div className={styles.examplesGrid}>
            <div className={styles.exampleCard}>
              <div className={styles.exampleQuestion}>
                &ldquo;What do coaches look for in a player at the D2 level?&rdquo;
              </div>
              <div className={styles.exampleTag}>Recruiting Criteria</div>
            </div>
            <div className={styles.exampleCard}>
              <div className={styles.exampleQuestion}>
                &ldquo;When can a D1 coach first contact my player?&rdquo;
              </div>
              <div className={styles.exampleTag}>NCAA Rules</div>
            </div>
            <div className={styles.exampleCard}>
              <div className={styles.exampleQuestion}>
                &ldquo;What should be in my player&apos;s first email to a coach?&rdquo;
              </div>
              <div className={styles.exampleTag}>Communication Strategy</div>
            </div>
            <div className={styles.exampleCard}>
              <div className={styles.exampleQuestion}>
                &ldquo;What&apos;s the difference between a preferred walk-on and a scholarship offer?&rdquo;
              </div>
              <div className={styles.exampleTag}>Offers & Scholarships</div>
            </div>
            <div className={styles.exampleCard}>
              <div className={styles.exampleQuestion}>
                &ldquo;How many players does a typical college coach recruit each year?&rdquo;
              </div>
              <div className={styles.exampleTag}>Coach Insight</div>
            </div>
            <div className={styles.exampleCard}>
              <div className={styles.exampleQuestion}>
                &ldquo;What should my player be doing in 9th grade to prepare for recruiting?&rdquo;
              </div>
              <div className={styles.exampleTag}>Timeline & Planning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className={styles.whyDifferent}>
        <div className={styles.container}>
          <h2 className="serif">Why Not Just Google It?</h2>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h3>Google</h3>
              <ul>
                <li>Outdated articles and blog posts</li>
                <li>You have to know the right question to ask</li>
                <li>No follow-up — each search starts over</li>
                <li>Conflicting information from unverified sources</li>
              </ul>
            </div>
            <div className={`${styles.comparisonCard} ${styles.comparisonCardMiddle}`}>
              <h3>Generic AI (ChatGPT, etc.)</h3>
              <ul>
                <li>Not trained on current NCAA rules</li>
                <li>No knowledge of PSC&apos;s methods or philosophy</li>
                <li>Generic advice that may not apply to your situation</li>
                <li>May confidently give wrong information</li>
              </ul>
            </div>
            <div className={`${styles.comparisonCard} ${styles.comparisonCardHighlight}`}>
              <h3>PSC AI Assistant</h3>
              <ul>
                <li>✓ Trained on current, complete NCAA rules</li>
                <li>✓ Built on PSC&apos;s expertise and philosophy</li>
                <li>✓ Conversational — ask follow-ups naturally</li>
                <li>✓ Answers consistent with your PSC consultant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Unlock */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className="serif">How to Get Access</h2>
          <p className={styles.subtitle}>The PSC AI Assistant is exclusively available to PSC subscribers.</p>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className="serif">Choose a PSC Package</h3>
              <p>Subscribe to any FUSE-ID recruiting package — Basic, Premier, or Elite.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className="serif">Get Your Access</h3>
              <p>Upon enrollment, receive direct access to the PSC AI Assistant as part of your membership.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className="serif">Ask Anything, Anytime</h3>
              <p>Use the AI alongside your consultant — get quick answers between sessions, any time of day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className="serif">Ready for Expert Recruiting Guidance — On Demand?</h2>
          <p>Subscribe to a PSC package to unlock the AI Assistant and start navigating the recruiting process with confidence.</p>
          <a href="/fuse-id" className={styles.ctaButtonFinal}>
            View PSC Packages
          </a>
          <p className={styles.ctaSubtext}>
            Already a PSC client? Your AI Assistant access is already active.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
