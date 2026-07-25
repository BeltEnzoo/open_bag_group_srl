import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Nosotros } from './components/Nosotros'
import { WhyUs } from './components/WhyUs'
import { Servicios } from './components/Servicios'
import { Gallery } from './components/Gallery'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { WhatsApp } from './components/WhatsApp'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nosotros />
        <WhyUs />
        <Servicios />
        <Gallery />
        <Contacto />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
