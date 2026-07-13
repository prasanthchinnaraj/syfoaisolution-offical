import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: '🤖',
    title: 'AI Chatbots & Assistants',
    desc: '24/7 intelligent bots that qualify leads, answer customers instantly, and book appointments — trained on your exact business data and brand voice. Never miss a conversion again.',
    tags: ['Lead Qualification', 'Customer Support', 'Auto-Booking', 'NLP'],
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    desc: 'Eliminate repetitive manual tasks. We automate approvals, follow-ups, data sync, and reporting — saving your team hundreds of hours every month while reducing costly human errors.',
    tags: ['Process Automation', 'Auto Follow-ups', 'Data Pipelines', 'Reporting'],
  },
  {
    icon: '🔗',
    title: 'AI Integration into Existing Apps',
    desc: 'Already have software? We layer in powerful AI capabilities — smart search, predictive analytics, auto-tagging, recommendations — without rebuilding your stack from scratch.',
    tags: ['Smart Search', 'Predictions', 'Auto-Tagging', 'API Integration'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce AI Solutions',
    desc: 'Personalized recommendations, dynamic pricing, cart recovery, and AI-powered product discovery — each one directly and measurably lifting your revenue and average order value.',
    tags: ['Recommendations', 'Dynamic Pricing', 'Cart Recovery', 'Product AI'],
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="fade-in">
        <div className="section-eyebrow">What We Build</div>
        <h2 className="section-title">
          Advanced AI Solutions<br />
          Tailored to <span style={{ color: 'var(--accent)' }}>Your Business</span>
        </h2>
        <p className="section-sub">
          From intelligent chatbots to full workflow automation — we build AI that works while
          you sleep and grows while you scale.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <div className="service-card fade-in" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.desc}</div>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span className="service-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="services-more fade-in">
        <Link to="/services" className="btn-outline">Explore All Services in Detail →</Link>
      </div>
    </section>
  )
}
