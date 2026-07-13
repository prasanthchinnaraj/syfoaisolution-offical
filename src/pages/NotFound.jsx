import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="nf-wrap">
      <div className="nf-code" aria-hidden="true">404</div>
      <h1 className="nf-title">This page went off-script.</h1>
      <p className="nf-sub">
        Even our AI couldn't find what you're looking for. Let's get you back on track.
      </p>
      <div className="nf-actions">
        <Link to="/" className="btn-primary">Back to Home →</Link>
        <Link to="/contact" className="btn-outline">Contact Us</Link>
      </div>
    </section>
  )
}
