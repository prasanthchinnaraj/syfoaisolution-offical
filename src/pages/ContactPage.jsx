import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const STRATEGY_API_URL =
  import.meta.env.VITE_STRATEGY_API_URL ||
  'https://syfoaisolution-offical-backend.onrender.com/api/book-strategy'

const CHANNELS = [
  {
    icon: '✉️',
    label: 'Email us',
    value: 'syfoaisolution@gmail.com',
    href: 'mailto:syfoaisolution@gmail.com',
  },
  {
    icon: '📞',
    label: 'Call or WhatsApp',
    value: '+91 6369621168',
    href: 'tel:+916369621168',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Syfo AI Solutions',
    href: 'https://www.linkedin.com/in/syfo-ai-solutions-bb3534419',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@syfo.ai',
    href: 'https://www.instagram.com/syfo.ai',
  },
]

const EMPTY = { full_name: '', email: '', phone: '', company_name: '', biggest_challenge: '' }

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const fullName = form.full_name.trim()
    const email = form.email.trim()
    if (!fullName || !email) {
      setError('Please fill in your name and email — they are required.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(STRATEGY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          email,
          phone: form.phone.trim() || null,
          company_name: form.company_name.trim() || null,
          industry: null,
          monthly_revenue: null,
          biggest_challenge: form.biggest_challenge.trim() || null,
          preferred_call_time: null,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong. Please try again.')
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Failed to send. Please email us directly.')
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Talk About"
        highlight="Your Growth."
        sub="Tell us where your business is stuck — we'll show you where AI can unstick it. Replies within 24 hours."
      />

      <section className="contact-section" aria-label="Contact options">
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h2 className="contact-info-title">Reach us directly</h2>
            <p className="contact-info-sub">
              Prefer a human right away? Every channel below lands with our team, not a bot
              — ironic, we know.
            </p>
            {CHANNELS.map((c) => (
              <a
                className="ci-item"
                href={c.href}
                key={c.label}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="ci-icon" aria-hidden="true">{c.icon}</span>
                <span className="ci-text">
                  <span className="ci-label">{c.label}</span>
                  <span className="ci-value">{c.value}</span>
                </span>
                <span className="ci-arrow" aria-hidden="true">→</span>
              </a>
            ))}
            <div className="ci-note">
              <span className="eyebrow-dot"></span>
              Average first response: under 4 business hours
            </div>
          </div>

          <div className="contact-form-card reveal-right">
            {success ? (
              <div className="modal-success" style={{ display: 'block' }}>
                <div className="modal-success-icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>
                  Thanks for reaching out.<br />
                  Our team will get back to you within <strong>24 hours</strong>.
                </p>
              </div>
            ) : (
              <>
                <h2 className="contact-form-title">Send us a message</h2>
                <form noValidate onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cf_name">Full Name <span>*</span></label>
                      <input className="form-input" type="text" id="cf_name" name="full_name" placeholder="John Smith" value={form.full_name} onChange={update} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="cf_email">Email Address <span>*</span></label>
                      <input className="form-input" type="email" id="cf_email" name="email" placeholder="john@company.com" value={form.email} onChange={update} required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cf_phone">Phone Number</label>
                      <input className="form-input" type="tel" id="cf_phone" name="phone" placeholder="+91 00000 00000" value={form.phone} onChange={update} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="cf_company">Company / Business Name</label>
                      <input className="form-input" type="text" id="cf_company" name="company_name" placeholder="Acme Corp" value={form.company_name} onChange={update} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cf_message">How can we help?</label>
                    <textarea className="form-textarea" id="cf_message" name="biggest_challenge" placeholder="Tell us about your project, challenge, or the workflow you want to automate…" value={form.biggest_challenge} onChange={update}></textarea>
                  </div>

                  <div className="modal-error" style={{ display: error ? 'block' : 'none' }}>
                    {error}
                  </div>
                  <button type="submit" className="modal-submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
