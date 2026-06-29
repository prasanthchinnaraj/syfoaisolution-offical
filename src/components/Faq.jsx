import { useState } from 'react'

const FAQS = [
  {
    q: 'What exactly does Syfo AI Solution build?',
    a: 'We build AI chatbots & virtual assistants, workflow automation systems, AI integrations for existing apps, and e-commerce AI solutions — all engineered to directly increase your revenue and reduce operational costs.',
  },
  {
    q: 'How long does it take to go live?',
    a: 'Most projects launch within 2–6 weeks. Our AI-first development framework and pre-built modules let us deliver production-ready solutions 3× faster than traditional agencies.',
  },
  {
    q: 'Do you work with our existing tools and software?',
    a: "Yes — we layer AI into your current stack without requiring a full rebuild. We integrate with CRMs, e-commerce platforms, support desks, and custom software via API with zero disruption to what's already working.",
  },
  {
    q: 'What results can we realistically expect?',
    a: 'Our clients see an average 40%+ increase in sales, 60% reduction in response time, and 3× improvement in lead conversion. Every solution is tied to measurable KPIs from day one — we only build features that move the numbers that matter.',
  },
  {
    q: 'Is the free strategy call really free with no obligations?',
    a: 'Absolutely. The 30-minute session is 100% free with no obligation or pressure. Our AI strategists audit your business, identify the highest-value AI opportunities, and give you a clear action plan — whether you work with us or not.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. We provide continuous post-launch optimization — monitoring performance, retraining AI models on your live data, and releasing improvements. Your system gets measurably smarter every week after go-live.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" aria-labelledby="faq-heading">
      <div className="fade-in section-center">
        <div className="section-eyebrow">FAQ</div>
        <h2 className="section-title" id="faq-heading">
          Frequently Asked <span style={{ color: 'var(--primary)' }}>Questions</span>
        </h2>
        <p className="section-sub">Everything you need to know about working with Syfo AI Solution.</p>
      </div>

      <div className="faq-list fade-in">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
              <button
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={`faq-a${i + 1}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {item.q}
              </button>
              <div className="faq-a" id={`faq-a${i + 1}`} role="region">
                {item.a}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
