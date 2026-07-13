import { useEffect, useState } from 'react'
import NeuralCanvas from './NeuralCanvas'

const WORDS = ['Revenue.', 'Sales.', 'Growth.', 'Profits.']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="home">
      <NeuralCanvas />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-dot"></span>
          Powered by Advanced AI
        </div>
        <h1>
          <span className="h1-line"><span className="h1-line-inner">We Don't Just</span></span>
          <span className="h1-line"><span className="h1-line-inner">Build Apps.</span></span>
          <span className="h1-line"><span className="h1-line-inner">We <span className="h1-grad h1-multiply">Multiply</span></span></span>
          <span className="h1-line">
            <span className="h1-line-inner">
              Your{' '}
              <span className="word-rotator">
                <span className="word" key={wordIdx}>{WORDS[wordIdx]}</span>
              </span>
            </span>
          </span>
        </h1>
        <p className="hero-desc">
          Syfo AI Solution combines next-gen AI with deep business expertise — delivering
          chatbots, workflow automation, AI integrations, and e-commerce intelligence that
          make your business faster and your sales stronger.
        </p>
        <div className="hero-ctas">
          <a href="#cta" className="btn-primary">Start Your AI Journey →</a>
          <a href="#services" className="btn-outline">See What We Build</a>
        </div>
        <div className="hero-proof">
          <div className="proof-avatars" aria-hidden="true">
            <span className="proof-avatar">AM</span>
            <span className="proof-avatar">PR</span>
            <span className="proof-avatar">DK</span>
            <span className="proof-avatar">ST</span>
            <span className="proof-avatar proof-more">+46</span>
          </div>
          <div className="proof-text">
            <span className="proof-stars" aria-hidden="true">★★★★★</span>
            <span>Trusted by <strong>50+ growing businesses</strong></span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-chip chip-top"><span className="chip-dot"></span>AI Assistant — Online</div>
        <div className="metrics-card">
          <div className="card-header">
            <span className="card-title">Client Impact Dashboard</span>
            <span className="live-badge"><span className="live-dot"></span>Live</span>
          </div>

          <div className="metric-row">
            <div className="metric-label-group">
              <div className="metric-label">Revenue Growth</div>
              <div className="metric-bar-track">
                <div className="metric-bar-fill bar-anim" style={{ width: '78%', background: 'var(--accent)' }}></div>
              </div>
            </div>
            <div className="metric-val val-accent">+42%</div>
          </div>

          <div className="metric-row">
            <div className="metric-label-group">
              <div className="metric-label">Response Time Saved</div>
              <div className="metric-bar-track">
                <div className="metric-bar-fill bar-anim" style={{ width: '62%', background: 'var(--primary)', animationDelay: '0.3s' }}></div>
              </div>
            </div>
            <div className="metric-val val-blue">−60%</div>
          </div>

          <div className="metric-row" style={{ borderBottom: 'none' }}>
            <div className="metric-label-group">
              <div className="metric-label">Lead Conversion</div>
              <div className="metric-bar-track">
                <div className="metric-bar-fill bar-anim" style={{ width: '55%', background: 'linear-gradient(90deg, #0037C7, #1E5BFF)', animationDelay: '0.6s' }}></div>
              </div>
            </div>
            <div className="metric-val val-mid">+3×</div>
          </div>

          <div className="mini-grid">
            <div className="mini-card">
              <div className="mini-val">98%</div>
              <div className="mini-label">Client Satisfaction</div>
            </div>
            <div className="mini-card">
              <div className="mini-val">200+</div>
              <div className="mini-label">AI Workflows Live</div>
            </div>
          </div>
        </div>
        <div className="visual-chip chip-bottom">📈 +42% revenue this quarter</div>
      </div>

      <a href="#why" className="scroll-cue" aria-label="Scroll to explore">
        <span className="scroll-mouse"><span className="scroll-wheel"></span></span>
        Scroll to explore
      </a>
    </section>
  )
}
