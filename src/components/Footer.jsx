import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link to="/" className="logo-link" aria-label="Syfo AI Solution">
            <img className="logo-img" src="/logo-dark.png" alt="Syfo AI Solution" width="1066" height="379" />
          </Link>
          <p className="footer-brand-text">
            We don't just build apps — we build AI systems that accelerate your growth and
            multiply your revenue, continuously.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services#chatbots">AI Chatbots</Link></li>
            <li><Link to="/services#automation">Workflow Automation</Link></li>
            <li><Link to="/services#integration">AI Integration</Link></li>
            <li><Link to="/services#ecommerce">E-Commerce AI</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Syfo</Link></li>
            <li><Link to="/#testimonials">Client Stories</Link></li>
            <li><Link to="/#process">Process</Link></li>
            <li><Link to="/#faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:syfoaisolution@gmail.com">syfoaisolution@gmail.com</a></li>
            <li><a href="tel:+916369621168">+91 6369621168</a></li>
            <li><a href="https://www.linkedin.com/in/syfo-ai-solutions-bb3534419" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/syfo.ai" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Syfo AI Solution. All rights reserved.</p>
        <p className="footer-copy">Built with Advanced AI Technology</p>
      </div>
    </footer>
  )
}
