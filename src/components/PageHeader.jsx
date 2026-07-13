export default function PageHeader({ eyebrow, title, highlight, sub }) {
  return (
    <section className="page-header">
      <div className="ph-orb ph-orb-a" aria-hidden="true"></div>
      <div className="ph-orb ph-orb-b" aria-hidden="true"></div>
      <div className="page-header-inner">
        <div className="eyebrow">
          <span className="eyebrow-dot"></span>
          {eyebrow}
        </div>
        <h1>
          {title} <span className="h1-grad">{highlight}</span>
        </h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  )
}
