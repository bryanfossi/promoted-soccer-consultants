import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './ai-assistant.module.css'

export const metadata = {
  title: 'AI Recruiting Assistant',
  description:
    "Instant, accurate answers to college soccer recruiting questions. The PSC AI Assistant is trained on full NCAA rules and PSC's methodology.",
  alternates: { canonical: '/ai-assistant' },
  openGraph: {
    title: 'AI Recruiting Assistant | Promoted Soccer Consultants',
    description:
      "Instant answers to college soccer recruiting questions, trained on NCAA rules and PSC's methodology.",
    url: 'https://www.promotedsoccerconsultants.com/ai-assistant',
    type: 'website',
  },
}

const faqItems = [
  {
    tag: 'Recruiting Criteria',
    question: 'What do coaches look for in a player at the D2 level?',
    answer:
      "D2 coaches prioritize technical ability, soccer IQ, and an athletic profile that translates against fast competition. Most need players who can contribute as freshmen — depth recruiting is rare. Position-specific physical baselines matter more than they do at D3.",
  },
  {
    tag: 'NCAA Rules',
    question: 'When can a D1 coach first contact my player?',
    answer:
      "For D1 men's and women's soccer, coaches can begin direct communication on June 15 after the player's sophomore year. Before that date, communication must go through the player's high school or club coach. Calendar specifics shift — check the AI for the current window.",
  },
  {
    tag: 'Communication Strategy',
    question: "What should be in my player's first email to a coach?",
    answer:
      'Subject line with name, position, and graduation year. Body: brief intro, key athletic info (height, foot, position), academic info (GPA, test scores), club and high school program, link to highlight film, and an upcoming event schedule. Keep it under 150 words.',
  },
  {
    tag: 'Offers & Scholarships',
    question: "What's the difference between a preferred walk-on and a scholarship offer?",
    answer:
      'A preferred walk-on has a guaranteed roster spot with no athletic aid — recruited and expected, just unfunded. A scholarship offer comes with athletic dollars, partial or full. Both are real recruiting outcomes; PWO status can convert to scholarship later based on contribution.',
  },
  {
    tag: 'Coach Insight',
    question: 'How many players does a typical college coach recruit each year?',
    answer:
      'A D1 program typically signs 4–8 new players per recruiting class to maintain a 25–30 person roster. D2 and D3 ranges are similar. The total spots available nationally each year are far smaller than most families assume going in.',
  },
  {
    tag: 'Timeline & Planning',
    question: 'What should my player be doing in 9th grade to prepare for recruiting?',
    answer:
      'Focus on grades, athletic development, and finding the right club fit. Begin building a target school list (10–15 schools spanning divisions). Start a basic film library. Most outreach should wait — 9th grade is foundation-building, not active recruiting.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function AIAssistantPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>PSC Exclusive</div>
            <h1 className="serif">Your College Soccer Recruiting Assistant. Available 24/7.</h1>
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
          <p className={styles.subtitle}>
            A preview of the questions the PSC AI handles every day — with the kind of direct
            answers families actually need.
          </p>
          <div className={styles.examplesGrid}>
            {faqItems.map((item) => (
              <div className={styles.exampleCard} key={item.question}>
                <div className={styles.exampleTag}>{item.tag}</div>
                <h3 className={styles.exampleQuestion}>{item.question}</h3>
                <p className={styles.exampleAnswer}>{item.answer}</p>
              </div>
            ))}
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
