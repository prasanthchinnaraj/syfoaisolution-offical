import PageHeader from '../components/PageHeader'
import Process from '../components/Process'
import Cta from '../components/Cta'

const DETAILS = [
  {
    id: 'chatbots',
    icon: '🤖',
    title: 'AI Chatbots & Assistants',
    desc: 'Intelligent bots trained on your exact business data and brand voice. They qualify leads, answer customers instantly, and book appointments around the clock — so you never miss a conversion again.',
    bullets: [
      'Custom-trained on your products, policies and FAQs',
      'Books meetings straight into your calendar',
      'Hands off to a human seamlessly when needed',
      'Works on your website, WhatsApp and Instagram',
    ],
    chips: ['24/7 Availability', '80% tickets automated'],
    stat: { val: '+38%', label: 'avg. lead conversion lift' },
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: 'Workflow Automation',
    desc: 'We map your repetitive manual processes and replace them with reliable AI pipelines — approvals, follow-ups, data sync, and reporting that run themselves while your team focuses on growth.',
    bullets: [
      'Automated follow-ups that never forget a lead',
      'Cross-tool data sync with zero copy-paste',
      'Auto-generated reports delivered on schedule',
      'Error rates near zero on repetitive tasks',
    ],
    chips: ['100s of hours saved', 'Zero human error'],
    stat: { val: '90+', label: 'hours saved per month' },
  },
  {
    id: 'integration',
    icon: '🔗',
    title: 'AI Integration into Existing Apps',
    desc: 'Already have software you love? We layer in powerful AI capabilities — smart search, predictive analytics, auto-tagging, recommendations — without rebuilding your stack from scratch.',
    bullets: [
      'Smart semantic search across your data',
      'Predictive analytics on your existing metrics',
      'Auto-tagging and classification pipelines',
      'Clean API-first integration, no rip-and-replace',
    ],
    chips: ['Your stack, enhanced', 'API-first'],
    stat: { val: '3×', label: 'faster than a rebuild' },
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-Commerce AI Solutions',
    desc: 'Personalized recommendations, dynamic pricing, cart recovery, and AI-powered product discovery — each one directly and measurably lifting your revenue and average order value.',
    bullets: [
      'Personalized product recommendations',
      'Dynamic pricing tuned to demand',
      'Automated cart-recovery journeys',
      'AI product discovery your customers love',
    ],
    chips: ['Revenue-first AI', 'Plug into Shopify'],
    stat: { val: '+27%', label: 'average order value' },
  },
]

export default function ServicesPage({ onOpenModal }) {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="AI That Works While"
        highlight="You Sleep."
        sub="Four battle-tested service lines — each engineered to move a revenue metric, not just ship a feature."
      />

      <section className="services-detail" aria-label="Service details">
        {DETAILS.map((s, i) => (
          <div className={`sd-row${i % 2 ? ' rev' : ''}`} id={s.id} key={s.id}>
            <div className={`sd-text ${i % 2 ? 'reveal-right' : 'reveal-left'}`}>
              <span className="service-icon" aria-hidden="true">{s.icon}</span>
              <h2 className="sd-title">{s.title}</h2>
              <p className="sd-desc">{s.desc}</p>
              <ul className="sd-bullets">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <button className="btn-primary" onClick={onOpenModal}>
                Discuss This Service →
              </button>
            </div>

            <div className={`sd-visual ${i % 2 ? 'reveal-left' : 'reveal-right'}`}>
              <span className="sd-visual-icon" aria-hidden="true">{s.icon}</span>
              <span className="sd-chip sd-chip-a">{s.chips[0]}</span>
              <span className="sd-chip sd-chip-b">{s.chips[1]}</span>
              <div className="sd-stat">
                <span className="sd-stat-val">{s.stat.val}</span>
                <span className="sd-stat-label">{s.stat.label}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Process />
      <Cta onOpenModal={onOpenModal} />
    </>
  )
}
