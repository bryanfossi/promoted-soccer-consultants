'use client'

import { useState } from 'react'
import styles from './Resources.module.css'

type Status = 'idle' | 'loading' | 'success' | 'error'

declare global {
  interface Window {
    [key: string]: unknown
  }
}

export default function Resources() {
  const topics = [
    'College recruiting timelines',
    'NCAA communication rules',
    'Common recruiting myths',
    'What families should be doing by grade level',
    'Understanding scholarship offers',
    'The reality of walk-on opportunities',
  ]

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    setMessage('')

    const callbackName = `mc_cb_${Date.now()}`
    const params = new URLSearchParams({
      u: '0761b4ca0608a7d7df49c3212',
      id: 'e08c5d946a',
      f_id: '00b1c2e1f0',
      EMAIL: email,
      b_0761b4ca0608a7d7df49c3212_e08c5d946a: '',
      c: callbackName,
    })

    const url = `https://promotedsoccerconsultants.us6.list-manage.com/subscribe/post-json?${params.toString()}`
    const script = document.createElement('script')
    let timeoutId: ReturnType<typeof setTimeout>

    const cleanup = () => {
      clearTimeout(timeoutId)
      delete window[callbackName]
      script.remove()
    }

    window[callbackName] = (response: { result: string; msg: string }) => {
      cleanup()
      if (response.result === 'success') {
        setStatus('success')
        setMessage('Check your email to confirm your subscription.')
        setEmail('')
      } else {
        setStatus('error')
        const cleanMsg = (response.msg || 'Something went wrong. Please try again.')
          .replace(/^\d+\s*-\s*/, '')
          .replace(/<[^>]*>/g, '')
        setMessage(cleanMsg)
      }
    }

    script.src = url
    script.onerror = () => {
      cleanup()
      setStatus('error')
      setMessage('Network error — please try again.')
    }

    timeoutId = setTimeout(() => {
      cleanup()
      setStatus('error')
      setMessage('Request timed out. Please try again.')
    }, 10000)

    document.body.appendChild(script)
  }

  return (
    <>
      <section className={styles.resources} id="resources" aria-labelledby="resources-heading">
        <div className={styles.sectionContainer}>
          <div className={styles.resourcesContent}>
            <div className={styles.resourcesText}>
              <h2 id="resources-heading" className="serif">
                Free Recruiting Education &amp; Resources
              </h2>
              <p>
                We regularly host free webinars and publish educational resources for players,
                parents, and coaches to better understand the college recruiting process.
              </p>
              <p>
                Our commitment to education extends beyond our paid services. We believe informed
                families make better decisions.
              </p>
            </div>
            <div className={styles.topicsBlock}>
              <p className={styles.topicsLabel}>Topics We Cover</p>
              <ul className={styles.resourcesList}>
                {topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.newsletter}
        id="newsletter"
        aria-labelledby="newsletter-heading"
      >
        <div className={styles.sectionContainer}>
          <div className={styles.newsletterInner}>
            <h2 id="newsletter-heading" className="serif">
              Stay Informed
            </h2>
            <p>
              Subscribe to receive recruiting newsletters, webinar invites, and exclusive tips.
            </p>

            <form onSubmit={handleSubmit} className={styles.emailForm} noValidate>
              <input
                type="email"
                name="EMAIL"
                className={styles.emailInput}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading' || status === 'success'}
                aria-label="Email address"
                aria-describedby="newsletter-status"
              />
              <button
                type="submit"
                className={styles.subscribeButton}
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading'
                  ? 'Subscribing…'
                  : status === 'success'
                  ? 'Subscribed'
                  : 'Subscribe'}
              </button>
            </form>

            <div
              id="newsletter-status"
              role="status"
              aria-live="polite"
              className={`${styles.statusMessage} ${
                status === 'success' ? styles.statusSuccess : ''
              } ${status === 'error' ? styles.statusError : ''}`}
            >
              {message}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
