import PageHeader from '../components/PageHeader'
import Stats from '../components/Stats'
import Cta from '../components/Cta'

const VALUES = [
  {
    icon: '🎯',
    title: 'Revenue Obsessed',
    desc: 'Every line of code must answer one question: how does this grow the business? If it doesn\u2019t, we don\u2019t build it.',
  },
  {
    icon: '⚡',
    title: 'Speed as a Feature',
    desc: 'Weekly demos, rapid prototypes, pre-built AI modules. Momentum is a competitive advantage and we protect it.',
  },
  {
    icon: '🤝',
    title: 'Partners, Not Vendors',
    desc: 'We stay after launch — monitoring, optimizing, and improving your AI while your competitors\u2019 projects gather dust.',
  },
  {
    icon: '🔍',
    title: 'Radical Transparency',
    desc: 'Clear pricing, honest timelines, and real metrics. You always know exactly what we\u2019re building and why.',
  },
]

const TIMELINE = [
  {
    year: 'Day 1',
    title: 'AI-native from the start',
    desc: 'Syfo was founded on a simple bet: businesses don\u2019t need more software — they need software that thinks.',
  },
  {
    year: 'Year 1',
    title: 'First 50 workflows shipped',
    desc: 'From chatbots that book meetings to pipelines that killed manual data entry, our playbook proved itself across industries.',
  },
  {
    year: 'Today',
    title: '200+ AI workflows live',
    desc: 'A growing portfolio of measurable wins: 40%+ average sales lifts, 3\u00d7 faster delivery, and clients who scale with us.',
  },
  {
    year: 'Next',
    title: 'Your business',
    desc: 'The next chapter is the one we write with you — one revenue-multiplying AI system at a time.',
  },
]

export default function AboutPage({ onOpenModal }) {
  return (
    <>
      <PageHeader
        eyebrow="About Syfo"
        title="We Build AI That"
        highlight="Pays For Itself."
        sub="Syfo AI Solution exists for one reason: to turn artificial intelligence into measurable business growth."
      />

      <section className="about-story" aria-label="Our story">
        <div className="story-grid">
          <div className="reveal-left">
            <div className="section-eyebrow">Our Story</div>
            <h2 className="section-title">
              Most Software Ships.<br />
              Ours <span style={{ color: 'var(--accent)' }}>Compounds.</span>
            </h2>
            <p className="story-text">
              We started Syfo after watching too many businesses pay for apps that
              looked great in demos and did nothing for revenue. Software should not
              be a cost center — it should be your hardest-working employee.
            </p>
            <p className="story-text">
              So we flipped the model. AI goes into the architecture from the very
              first line of code. Every feature maps to a KPI. And after launch, the
              system keeps learning from your real data — getting smarter, faster,
              and more profitable every single week.
            </p>
          </div>

          <div className="mission-card reveal-right">
            <div className="mission-icon" aria-hidden="true">🚀</div>
            <h3>Our Mission</h3>
            <p>
              Make every business we touch faster, smarter, and more profitable
              through AI that works while they sleep.
            </p>
            <div className="mission-metrics">
              <div>
                <span className="mission-val">40%+</span>
                <span className="mission-label">Avg. sales lift</span>
              </div>
              <div>
                <span className="mission-val">3×</span>
                <span className="mission-label">Faster delivery</span>
              </div>
              <div>
                <span className="mission-val">98%</span>
                <span className="mission-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values" id="values" aria-label="Our values">
        <div className="fade-in section-center">
          <div className="section-eyebrow">What We Stand For</div>
          <h2 className="section-title">
            The Principles Behind <span style={{ color: 'var(--accent)' }}>Every Build</span>
          </h2>
        </div>
        <div className="values-grid fade-in">
          {VALUES.map((v) => (
            <div className="why-card" key={v.title}>
              <div className="why-icon" aria-hidden="true">{v.icon}</div>
              <div className="why-title">{v.title}</div>
              <div className="why-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Stats />

      <section className="about-timeline" aria-label="Our journey">
        <div className="fade-in section-center">
          <div className="section-eyebrow">The Journey</div>
          <h2 className="section-title">
            From First Line of Code<br />
            to <span style={{ color: 'var(--accent)' }}>200+ Live Workflows</span>
          </h2>
        </div>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <div className={`tl-item ${i % 2 ? 'reveal-right' : 'reveal-left'}`} key={t.year}>
              <span className="tl-year">{t.year}</span>
              <h3 className="tl-title">{t.title}</h3>
              <p className="tl-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Cta onOpenModal={onOpenModal} />
    </>
  )
}
