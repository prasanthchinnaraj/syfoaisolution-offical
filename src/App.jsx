import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySyfo from './components/WhySyfo'
import Services from './components/Services'
import Stats from './components/Stats'
import Process from './components/Process'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'
import StrategyModal from './components/StrategyModal'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  // Reveal-on-scroll for all `.fade-in` elements after the tree mounts
  useScrollReveal()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header>
        <Navbar onOpenModal={openModal} />
      </header>

      <main id="main-content">
        <Hero />
        <WhySyfo />
        <Services />
        <Stats />
        <Process />
        <Faq />
        <Cta onOpenModal={openModal} />
      </main>

      <Footer />

      <StrategyModal open={modalOpen} onClose={closeModal} />
    </>
  )
}
