import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Plant } from './components/Plant'
import { Capacidad } from './components/Capacidad'
import { Work } from './components/Work'
import { Pagos } from './components/Pagos'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { WhatsApp } from './components/WhatsApp'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Plant />
        <Capacidad />
        <Work />
        <Pagos />
        <Contacto />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
