import styles from './WhyUs.module.css'

export default function WhyUs() {
  return (
    <section className={styles.whyUs} id="why-us">
      <div className={styles.sectionContainer}>
        <div className={styles.whyContent}>
          <h2 className="serif">Why Promoted Soccer Consultants</h2>
          <p>We believe the soccer landscape is strongest when clubs are supported, families are educated, and expectations are realistic.</p>
          <p>Our work is grounded in real experience—as players, coaches, and leaders—and focused on providing structure, clarity, and guidance rather than promises or shortcuts.</p>
          <div className={styles.highlightBox}>
            <p>Whether we are working with a club or a family, our goal is the same: help people make better decisions in a complex and constantly changing environment.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
