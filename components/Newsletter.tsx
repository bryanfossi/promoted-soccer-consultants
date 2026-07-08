'use client'

import { useState } from 'react'
import styles from './Newsletter.module.css'

type Status = 'idle' | 'loading' | 'success' | 'error'

declare global {
  interface Window {
    [key: string]: unknown
  }
}

export default function Newsletter() {
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
    <section className={styles.newsletter} id="newsletter" aria-labelledby="newsletter-heading">
      <div className={styles.inner}>
        <h2 id="newsletter-heading" className="serif">
          Get one honest recruiting insight each month.
        </h2>
        <p>
          No daily emails. No upsell pitches. Just one short note from Bryan when something actually
          matters.
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
            {status === 'loading' ? 'Subscribing…' : status === 'success' ? 'Subscribed' : 'Subscribe'}
          </button>
        </form>

        <div
          id="newsletter-status"
          role="status"
          aria-live="polite"
          className={`${styles.statusMessage} ${status === 'success' ? styles.statusSuccess : ''} ${
            status === 'error' ? styles.statusError : ''
          }`}
        >
          {message}
        </div>
      </div>
    </section>
  )
}
