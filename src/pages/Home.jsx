import Hero from '../components/Hero'
import TechMarquee from '../components/TechMarquee'
import WhySyfo from '../components/WhySyfo'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Cta from '../components/Cta'

export default function Home({ onOpenModal }) {
  return (
    <>
      <Hero />
      <TechMarquee />
      <WhySyfo />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <Faq />
      <Cta onOpenModal={onOpenModal} />
    </>
  )
}
