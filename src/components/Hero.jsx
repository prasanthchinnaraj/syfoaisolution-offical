import NeuralCanvas from './NeuralCanvas'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <NeuralCanvas />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-dot"></span>
          Powered by Advanced AI
        </div>
        <h1>
          We Don't Just<br />
          Build Apps.<br />
          We <span className="h1-gold">Multiply</span><br />
          Your <span className="h1-accent">Revenue.</span>
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
        <div className="trust-signals">
          <div className="trust-item"><span className="trust-dot"></span>3× Faster Delivery</div>
          <div className="trust-item"><span className="trust-dot"></span>40%+ Sales Lift</div>
          <div className="trust-item"><span className="trust-dot"></span>AI-First Approach</div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="metrics-card">
          <div className="card-header">
            <span className="card-title">Client Impact Dashboard</span>
            <span className="live-badge"><span className="live-dot"></span>Live</span>
          </div>

          <div className="metric-row">
            <div className="metric-label-group">
              <div className="metric-label">Revenue Growth</div>
              <div className="metric-bar-track">
                <div className="metric-bar-fill bar-anim" style={{ width: '78%', background: 'var(--teal)' }}></div>
              </div>
            </div>
            <div className="metric-val val-teal">+42%</div>
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
                <div className="metric-bar-fill bar-anim" style={{ width: '55%', background: 'var(--gold)', animationDelay: '0.6s' }}></div>
              </div>
            </div>
            <div className="metric-val val-gold">+3×</div>
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
      </div>
    </section>
  )
}
