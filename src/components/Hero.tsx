import { useReveal } from '../hooks/useReveal'
import { BrandLogo } from './BrandLogo'
import './Hero.css'

export function Hero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="inicio" className="hero" aria-label="Portada">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/banner_home.jpg"
          alt=""
          className="hero__image"
        />
        <div className="hero__veil" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content container reveal" ref={ref}>
        <BrandLogo variant="light" className="brand-logo--hero reveal-delay-1" />
        <h1 className="hero__title reveal-delay-1">Envases flexibles</h1>
        <p className="hero__lead reveal-delay-2">
          Nos especializamos en big bag complejos para la industria alimenticia,
          química, agro, petrolera, ganadera y pesquera.
        </p>
        <div className="hero__actions reveal-delay-3">
          <a href="#contacto" className="btn">
            Contactanos
          </a>
          <a href="#nosotros" className="btn btn--ghost">
            Conocenos
          </a>
        </div>
      </div>

      <a href="#nosotros" className="hero__scroll" aria-label="Ir a Nosotros">
        <span />
      </a>
    </section>
  )
}
