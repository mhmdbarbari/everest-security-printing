import About from '../components/About'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Quotations from '../components/Quotations'
import SecurityFeatures from '../components/SecurityFeatures'
import Services from '../components/Services'
import { useReveal } from '../hooks/useReveal'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />
      <About />
      <SecurityFeatures />
      <Services />
      <Portfolio />
      <Quotations />
    </>
  )
}
