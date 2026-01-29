import styles from './Resources.module.css'

export default function Resources() {
  const topics = [
    'College recruiting timelines',
    'NCAA communication rules',
    'Common recruiting myths',
    'What families should be doing by grade level',
    'Understanding scholarship offers',
    'The reality of walk-on opportunities'
  ]

  return (
    <section className={styles.resources} id="resources">
      <div className={styles.sectionContainer}>
        <div className={styles.resourcesContent}>
          <div className={styles.resourcesText}>
            <h2 className="serif">Free Recruiting Education & Resources</h2>
            <p>We regularly host free webinars and publish educational resources for players, parents, and coaches to better understand the college recruiting process.</p>
            <p>Our commitment to education extends beyond our paid services. We believe informed families make better decisions.</p>
          </div>
          <div>
            <h3 className="serif">Topics We Cover:</h3>
            <ul className={styles.resourcesList}>
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={styles.newsletterSection}>
          <h3 className="serif">Stay Informed</h3>
          <p>Subscribe to receive recruiting newsletters, webinar invites, and exclusive tips.</p>
          
          <form action="https://promotedsoccerconsultants.us6.list-manage.com/subscribe/post?u=0761b4ca0608a7d7df49c3212&amp;id=e08c5d946a&amp;f_id=00b1c2e1f0" method="post" target="_blank" className={styles.emailForm}>
            <input 
              type="email" 
              name="EMAIL" 
              className={styles.emailInput} 
              placeholder="Enter your email"
              required 
            />
            <input 
              type="submit" 
              value="Subscribe" 
              className={styles.subscribeButton}
            />
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text" name="b_0761b4ca0608a7d7df49c3212_e08c5d946a" tabIndex={-1} value="" readOnly />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}