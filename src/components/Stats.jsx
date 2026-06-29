import { useEffect, useRef, useState } from 'react'

const STATS = [
  { target: 40, unit: '%+', label: 'Average Sales Increase' },
  { target: 3, unit: '×', label: 'Faster App Delivery' },
  { target: 200, unit: '+', label: 'AI Workflows Deployed' },
  { target: 98, unit: '%', label: 'Client Satisfaction' },
]

function Counter({ target }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const duration = 1800
          const frameDur = 14
          const steps = duration / frameDur
          const inc = target / steps
          let cur = 0
          const timer = setInterval(() => {
            cur += inc
            if (cur >= target) {
              cur = target
              clearInterval(timer)
            }
            setVal(Math.round(cur))
          }, frameDur)
          observer.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span className="counter" ref={ref}>{val}</span>
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-grid">
        {STATS.map((s) => (
          <div className="stat-box fade-in" key={s.label}>
            <div className="stat-num">
              <Counter target={s.target} />
              <span className="stat-unit">{s.unit}</span>
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
