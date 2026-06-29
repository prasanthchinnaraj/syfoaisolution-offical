const CARDS = [
  {
    icon: '🎯',
    title: 'Results-Tied Development',
    desc: 'Every feature is connected to a KPI. Faster responses, higher conversions, lower costs — we build to move the numbers that matter.',
  },
  {
    icon: '🧠',
    title: 'AI-Native from Day One',
    desc: 'No bolt-ons. AI is in the architecture from the very first line of code — not patched on as an afterthought.',
  },
  {
    icon: '⚡',
    title: '3× Faster Time to Market',
    desc: 'Pre-built AI modules and rapid prototyping mean you go live weeks ahead of competitors who are just getting started.',
  },
  {
    icon: '🔌',
    title: 'Your Stack, Enhanced',
    desc: "We plug AI into your existing tools — no rip-and-replace required. Maximum impact, minimum disruption to what's already working.",
  },
  {
    icon: '📈',
    title: 'Sales-Focused Engineering',
    desc: 'Our team asks "how does this feature grow revenue?" before writing a single line of code — and we mean it.',
  },
  {
    icon: '🔄',
    title: 'Continuous AI Optimization',
    desc: 'Post-launch, our AI learns from your real data and continuously improves outcomes — your system gets smarter every week.',
  },
]

export default function WhySyfo() {
  return (
    <section id="why">
      <div className="fade-in">
        <div className="section-eyebrow">Why Syfo</div>
        <h2 className="section-title">
          Most Agencies Build &amp; Hand Off.<br />
          We Build &amp; <span style={{ color: 'var(--primary)' }}>Scale With You.</span>
        </h2>
        <p className="section-sub">
          Every decision we make is tied to one question: how does this grow your business?
        </p>
      </div>

      <div className="why-grid fade-in">
        {CARDS.map((card) => (
          <div className="why-card" key={card.title}>
            <div className="why-icon">{card.icon}</div>
            <div className="why-title">{card.title}</div>
            <div className="why-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
