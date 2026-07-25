import { useReveal } from '../hooks/useReveal'
import './Gallery.css'

const work = [
  '/images/foto_1.jpg',
  '/images/foto_2.jpg',
  '/images/foto_3.jpg',
  '/images/foto_4.jpg',
  '/images/foto_5.jpg',
  '/images/foto_6.jpg',
  '/images/foto_7.jpg',
  '/images/foto_8.jpg',
]

export function Gallery() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="gallery" ref={ref} aria-labelledby="gallery-title">
      <div className="container">
        <header className="gallery__header reveal">
          <h2 id="gallery-title" className="section-title">
            Modelos de big bag
          </h2>
          <div className="section-rule" aria-hidden="true">
            <span />
          </div>
          <p className="gallery__lead">
            Cada compromiso que asumimos es un sello de confianza con usted.
          </p>
        </header>

        <div className="gallery__grid reveal reveal-delay-1">
          {work.map((src, i) => (
            <figure key={src} className={`gallery__item gallery__item--${(i % 4) + 1}`}>
              <img src={src} alt={`Producción Open Bag ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="gallery__payment reveal reveal-delay-2">
          <div>
            <h3>Medios de pago</h3>
            <p>
              Contamos con amplias formas y medios de pago: transferencias,
              valores propios o de terceros, iCheck y Mercado Pago.
            </p>
          </div>
          <img
            src="/images/medios_pago.jpg"
            alt="Medios de pago aceptados"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
