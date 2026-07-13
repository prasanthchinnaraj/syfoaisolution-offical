import { useEffect, useState } from 'react'

const ITEMS = [
  {
    quote: 'Their AI chatbot now handles 80% of our support tickets and books demos while we sleep. Our response time went from hours to seconds — and conversions followed.',
    name: 'Arjun Mehta',
    role: 'Founder, CartLoop E-Commerce',
    result: '+38% conversions',
  },
  {
    quote: 'Syfo automated our entire order-to-invoice workflow. What used to take my team 3 hours a day now happens automatically with zero errors.',
    name: 'Priya Raghavan',
    role: 'COO, Vertex Retail Group',
    result: '90+ hrs saved / month',
  },
  {
    quote: 'They layered AI recommendations into our existing store without a rebuild. Average order value jumped within the first month — the ROI was immediate.',
    name: 'Daniel Kim',
    role: 'Head of Growth, Nova Living',
    result: '+27% AOV',
  },
  {
    quote: 'The weekly demos kept us in control the whole way. We went from idea to a live AI assistant in under five weeks — our old vendor quoted six months.',
    name: 'Sarah Thompson',
    role: 'Product Director, FinEdge SaaS',
    result: '5-week delivery',
  },
]

const initials = (name) => name.split(' ').map((w) => w[0]).join('').slice(0, 2)

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = (i) => setIdx((i + ITEMS.length) % ITEMS.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIdx((i) => (i + 1) % ITEMS.length), 5200)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <div className="fade-in section-center">
        <div className="section-eyebrow">Client Stories</div>
        <h2 className="section-title" id="testimonials-heading">
          Real Businesses. <span style={{ color: 'var(--accent)' }}>Real Results.</span>
        </h2>
        <p className="section-sub">
          Here's what happens when AI is built around revenue from day one.
        </p>
      </div>

      <div
        className="ts-carousel fade-in"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="ts-viewport">
          <div className="ts-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {ITEMS.map((t, i) => (
              <figure className={`ts-slide${i === idx ? ' active' : ''}`} key={t.name}>
                <div className="ts-stars" aria-hidden="true">★★★★★</div>
                <blockquote className="ts-quote">“{t.quote}”</blockquote>
                <figcaption className="ts-person">
                  <span className="ts-avatar" aria-hidden="true">{initials(t.name)}</span>
                  <span className="ts-who">
                    <span className="ts-name">{t.name}</span>
                    <span className="ts-role">{t.role}</span>
                  </span>
                  <span className="ts-result">{t.result}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="ts-controls">
          <button className="ts-arrow" onClick={() => go(idx - 1)} aria-label="Previous testimonial">←</button>
          <div className="ts-dots" role="tablist" aria-label="Testimonials">
            {ITEMS.map((t, i) => (
              <button
                key={t.name}
                className={`ts-dot${i === idx ? ' active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-selected={i === idx}
                role="tab"
              />
            ))}
          </div>
          <button className="ts-arrow" onClick={() => go(idx + 1)} aria-label="Next testimonial">→</button>
        </div>
      </div>
    </section>
  )
}
