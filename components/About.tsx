import styles from './About.module.css'

export default function About() {
  const credentials = [
    'Former college player who experienced the recruiting journey firsthand',
    'College coaching experience evaluating and recruiting prospects',
    'Current high school head coach supporting families through the process',
    'Multiple District Championships and Coach of the Year recognition',
    'Deep understanding of NCAA, NAIA, and NJCAA regulations'
  ]

  return (
    <section className={styles.about} id="about">
      <div className={styles.sectionContainer}>
        <div className={styles.aboutContent}>
          <h2 className="serif">About Us</h2>
          <p>Promoted Soccer Consultants was founded by a coach who has experienced the recruiting process from every angle—as a recruited player, a college coach evaluating prospects, and a high school coach supporting families through the process.</p>
          <p>This perspective allows us to bridge the gap between clubs, families, and the college game with honesty and insight.</p>
          
          <div className={styles.credentials}>
            <h3 className="serif">Experience That Matters</h3>
            <ul>
              {credentials.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
