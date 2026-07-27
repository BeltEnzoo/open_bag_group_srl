import { useReveal } from '../hooks/useReveal'
import './Hero.css'

export function Hero() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero__stage">
        <div className="hero__copy">
          <p className="hero__eyebrow reveal">San Antonio de Areco · Bs. As.</p>
          <h1 className="display hero__title">
            <span className="reveal">Fabricamos</span>
            <span className="reveal d1 hero__title-accent">confianza</span>
            <span className="reveal d2">en cada big bag</span>
          </h1>
          <p className="hero__lead reveal d3">
            Envases flexibles complejos para industria alimenticia, química, agro,
            petrolera, ganadera y pesquera.
          </p>
          <div className="hero__actions reveal d4">
            <a href="#contacto" className="btn-red">
              Pedir cotización
            </a>
            <a href="#planta" className="btn-line">
              Ver la planta
            </a>
          </div>
        </div>

        <div className="hero__visual reveal d2" aria-hidden="true">
          <div className="hero__frame">
            <img src="/images/new/img1.jpeg" alt="" className="hero__img" />
            <div className="hero__scrub" />
          </div>
          <div className="hero__badge">
            <strong>1500 m²</strong>
            <span>planta modelo</span>
          </div>
        </div>
      </div>

      <div className="hero__rail" aria-hidden="true">
        <div className="hero__rail-track">
          <span>BIG BAGS</span>
          <span>·</span>
          <span>LINERS</span>
          <span>·</span>
          <span>ÁRIDOS</span>
          <span>·</span>
          <span>IMPRESIÓN HD</span>
          <span>·</span>
          <span>ENTREGA 100 KM</span>
          <span>·</span>
          <span>BIG BAGS</span>
          <span>·</span>
          <span>LINERS</span>
          <span>·</span>
          <span>ÁRIDOS</span>
          <span>·</span>
          <span>IMPRESIÓN HD</span>
          <span>·</span>
          <span>ENTREGA 100 KM</span>
          <span>·</span>
        </div>
      </div>
    </section>
  )
}
