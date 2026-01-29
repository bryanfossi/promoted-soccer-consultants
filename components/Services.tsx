import Link from 'next/link'
import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      image: '/promoted-soccer-consultants.png',
      title: 'Club Consulting Services',
      description: 'We partner with soccer clubs and organizations to strengthen structure, improve communication, and support long-term player development.',
      features: [
        'Strategic planning & club audits',
        'Coach education & support',
        'Player pathway alignment',
        'Parent communication frameworks'
      ],
      link: '/club-consulting'
    },
    {
      image: '/fuse-id-logo.png',
      title: 'FUSE-ID Recruiting Services',
      description: 'Our college recruiting education program designed to help players and parents understand the recruiting process, timelines, and realistic opportunities.',
      features: [
        'Recruiting timelines by division',
        'NCAA communication rules',
        'What college coaches evaluate',
        'Strategy, planning, and decision support'
      ],
      link: '/fuse-id'
    }
  ]

  return (
    <section className={styles.services} id="services">
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className="serif">Our Services</h2>
          <p>Comprehensive support for clubs seeking organizational excellence and families navigating the college recruiting journey</p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Link href={service.link} key={index} className={styles.serviceCardLink}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                </div>
                <h3 className="serif">{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.serviceList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.learnMoreBtn}>
                  Learn More
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
