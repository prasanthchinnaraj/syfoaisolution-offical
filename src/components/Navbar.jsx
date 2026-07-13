import { useEffect, useState } from 'react'

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="navbar" aria-label="Main navigation">
      <a href="#home" className="logo-link" aria-label="Syfo AI Solution — home">
        <img className="logo-img" src="/logo-dark.png" alt="Syfo AI Solution" width="1066" height="379" />
      </a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#why">Why Us</a></li>
        <li><a href="#stats">Results</a></li>
        <li><a href="#process">Process</a></li>
      </ul>
      <button className="btn-nav" onClick={onOpenModal}>
        Get a Free Demo
      </button>
    </nav>
  )
}
