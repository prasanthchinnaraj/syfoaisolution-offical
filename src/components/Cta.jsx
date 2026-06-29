export default function Cta({ onOpenModal }) {
  return (
    <section id="cta">
      <div className="cta-box fade-in">
        <div className="cta-glow"></div>
        <h2>
          Ready to Turn AI Into Your<br />
          <span style={{ color: 'var(--primary)' }}>Competitive Advantage?</span>
        </h2>
        <p>
          Book a free 30-minute strategy session with our AI experts.<br />
          No obligations. Just clarity on what AI can do for your business.
        </p>
        <div className="cta-btns">
          <button
            className="btn-primary"
            style={{ fontSize: '16px', padding: '17px 38px' }}
            onClick={onOpenModal}
          >
            Book Free Strategy Call →
          </button>
          <a href="#services" className="btn-outline" style={{ fontSize: '16px', padding: '17px 38px' }}>
            See Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
