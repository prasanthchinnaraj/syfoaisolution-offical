import { useEffect, useRef, useState } from 'react'

const STRATEGY_API_URL =
  import.meta.env.VITE_STRATEGY_API_URL ||
  'https://syfoaisolution-offical-backend.onrender.com/api/book-strategy'

const EMPTY = {
  full_name: '',
  email: '',
  phone: '',
  company_name: '',
  industry: '',
  monthly_revenue: '',
  biggest_challenge: '',
  preferred_call_time: '',
}

export default function StrategyModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const overlayRef = useRef(null)

  // Reset state + lock body scroll whenever the modal opens
  useEffect(() => {
    if (open) {
      setForm(EMPTY)
      setSubmitting(false)
      setSuccess(false)
      setError('')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape while open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const fullName = form.full_name.trim()
    const email = form.email.trim()
    if (!fullName || !email) {
      setError('Please fill in your name and email — they are required.')
      return
    }

    const payload = {
      full_name: fullName,
      email,
      phone: form.phone.trim() || null,
      company_name: form.company_name.trim() || null,
      industry: form.industry || null,
      monthly_revenue: form.monthly_revenue || null,
      biggest_challenge: form.biggest_challenge.trim() || null,
      preferred_call_time: form.preferred_call_time || null,
    }

    setSubmitting(true)
    try {
      const res = await fetch(STRATEGY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong. Please try again.')
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again or email us directly.')
      setSubmitting(false)
    }
  }

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      id="strategyModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      ref={overlayRef}
      onClick={onOverlayClick}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <div id="modalFormContent" style={{ display: success ? 'none' : '' }}>
          <div className="modal-badge">
            <span className="modal-badge-dot"></span>
            Free 30-Min Session
          </div>
          <h2 className="modal-title" id="modalTitle">Book Your Free Strategy Call</h2>
          <p className="modal-sub">
            Tell us about your business and we'll show you exactly how AI can multiply your revenue.
          </p>

          <form id="strategyForm" noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="sf_name">Full Name <span>*</span></label>
                <input className="form-input" type="text" id="sf_name" name="full_name" placeholder="John Smith" value={form.full_name} onChange={update} required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="sf_email">Email Address <span>*</span></label>
                <input className="form-input" type="email" id="sf_email" name="email" placeholder="john@company.com" value={form.email} onChange={update} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="sf_phone">Phone Number</label>
                <input className="form-input" type="tel" id="sf_phone" name="phone" placeholder="+1 555 000 0000" value={form.phone} onChange={update} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="sf_company">Company / Business Name</label>
                <input className="form-input" type="text" id="sf_company" name="company_name" placeholder="Acme Corp" value={form.company_name} onChange={update} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="sf_industry">Industry</label>
                <select className="form-select" id="sf_industry" name="industry" value={form.industry} onChange={update}>
                  <option value="" disabled>Select industry…</option>
                  <option>E-Commerce</option>
                  <option>SaaS / Tech</option>
                  <option>Agency / Marketing</option>
                  <option>Healthcare</option>
                  <option>Retail</option>
                  <option>Fintech</option>
                  <option>Real Estate</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="sf_revenue">Monthly Revenue</label>
                <select className="form-select" id="sf_revenue" name="monthly_revenue" value={form.monthly_revenue} onChange={update}>
                  <option value="" disabled>Select range…</option>
                  <option>Under $10K</option>
                  <option>$10K – $50K</option>
                  <option>$50K – $100K</option>
                  <option>$100K – $500K</option>
                  <option>$500K+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="sf_challenge">Biggest Business Challenge</label>
              <textarea className="form-textarea" id="sf_challenge" name="biggest_challenge" placeholder="e.g. We struggle to qualify leads quickly, our support team is overwhelmed…" value={form.biggest_challenge} onChange={update}></textarea>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="sf_time">Preferred Call Time</label>
              <select className="form-select" id="sf_time" name="preferred_call_time" value={form.preferred_call_time} onChange={update}>
                <option value="" disabled>Select a time slot…</option>
                <option>Morning (9 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 4 PM)</option>
                <option>Evening (4 PM – 7 PM)</option>
                <option>Flexible / Any time</option>
              </select>
            </div>

            <div className="modal-error" id="modalError" style={{ display: error ? 'block' : 'none' }}>
              {error}
            </div>
            <button type="submit" className="modal-submit" id="submitBtn" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Confirm My Free Strategy Call →'}
            </button>
          </form>
        </div>

        <div className="modal-success" id="modalSuccess" style={{ display: success ? 'block' : 'none' }}>
          <div className="modal-success-icon">🎉</div>
          <h3>You're Booked!</h3>
          <p>
            Thanks for reaching out.<br />
            Our AI strategy expert will contact you within <strong>24 hours</strong> to confirm your session.
            <br /><br />
            Check your inbox for a confirmation email.
          </p>
        </div>
      </div>
    </div>
  )
}
