import { useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogo'
import './Nav.css'

const links = [
  { href: '#planta', label: 'Planta' },
  { href: '#capacidad', label: 'Capacidad' },
  { href: '#trabajo', label: 'Trabajo' },
  { href: '#pagos', label: 'Pagos' },
  { href: '#contacto', label: 'Contacto' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__bar shell">
        <a href="#top" className="nav__brand" aria-label="Open Bag">
          <BrandLogo variant="light" className="brand-logo--nav" />
        </a>

        <button
          className="nav__burger"
          aria-label={open ? 'Cerrar' : 'Menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="nav__cta" onClick={() => setOpen(false)}>
            Hablar ahora
          </a>
        </nav>
      </div>
    </header>
  )
}
