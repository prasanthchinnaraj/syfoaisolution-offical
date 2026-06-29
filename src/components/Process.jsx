const STEPS = [
  {
    n: '1',
    title: 'Discover',
    desc: 'We audit your business, map your workflows, and pinpoint the highest-value AI opportunities for immediate revenue impact.',
  },
  {
    n: '2',
    title: 'Build',
    desc: 'Rapid AI-powered development with weekly demos. You see real progress every week — not after months of silence.',
  },
  {
    n: '3',
    title: 'Grow',
    desc: 'We launch, monitor, and optimize continuously. Your AI gets smarter and more profitable over time — guaranteed.',
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="fade-in section-center">
        <div className="section-eyebrow">How We Work</div>
        <h2 className="section-title">
          From Idea to Revenue<br />
          in <span style={{ color: 'var(--primary)' }}>Weeks, Not Months</span>
        </h2>
        <p className="section-sub">
          A clear, fast, transparent process focused on getting you measurable results as
          quickly as possible.
        </p>
      </div>

      <div className="process-wrap fade-in">
        <div className="process-line"></div>
        <div className="process-steps">
          {STEPS.map((step) => (
            <div className="process-step" key={step.n}>
              <div className="step-circle">{step.n}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
