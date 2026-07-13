import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StrategyModal from './components/StrategyModal'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const location = useLocation()

  // Reveal-on-scroll for all reveal elements; re-runs on every route change
  useScrollReveal([location.pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header>
        <Navbar onOpenModal={openModal} />
      </header>

      <ScrollToTop />

      <main id="main-content">
        <div className="page-transition" key={location.pathname}>
          <Routes>
            <Route path="/" element={<Home onOpenModal={openModal} />} />
            <Route path="/services" element={<ServicesPage onOpenModal={openModal} />} />
            <Route path="/about" element={<AboutPage onOpenModal={openModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />

      <StrategyModal open={modalOpen} onClose={closeModal} />
    </>
  )
}
