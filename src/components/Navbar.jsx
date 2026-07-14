import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on every route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav
      className={`nav${scrolled || menuOpen ? ' scrolled' : ''}`}
      id="navbar"
      aria-label="Main navigation"
    >
      <Link to="/" className="logo-link" aria-label="Syfo AI Solution — home">
        <img className="logo-img" src="/logo-dark.png" alt="Syfo AI Solution" width="1066" height="379" />
      </Link>

      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to} end={l.end}>{l.label}</NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="btn-nav" onClick={onOpenModal}>
          Get a Free Demo
        </button>
        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map((l, i) => (
          <NavLink
            to={l.to}
            end={l.end}
            key={l.to}
            className="mobile-link"
            style={{ transitionDelay: menuOpen ? `${0.06 + i * 0.05}s` : '0s' }}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <button
          className="btn-nav mobile-cta"
          style={{ transitionDelay: menuOpen ? '0.3s' : '0s' }}
          onClick={() => { setMenuOpen(false); onOpenModal() }}
        >
          Get a Free Demo
        </button>
      </div>
    </nav>
  )
}
