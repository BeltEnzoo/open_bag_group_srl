import { useCallback, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Lightbox } from './Lightbox'
import './Gallery.css'

const work = [
  { src: '/images/foto_1.jpg', alt: 'Confección de big bags en planta' },
  { src: '/images/foto_2.jpg', alt: 'Depósito con stock de envases' },
  { src: '/images/foto_3.jpg', alt: 'Big bags apilados listos para entrega' },
  { src: '/images/foto_4.jpg', alt: 'Detalle de producción Open Bag' },
  { src: '/images/foto_5.jpg', alt: 'Línea productiva de Open Bag' },
  { src: '/images/foto_6.jpg', alt: 'Envases flexibles en depósito' },
  { src: '/images/foto_7.jpg', alt: 'Proceso de fabricación' },
  { src: '/images/foto_8.jpg', alt: 'Productos terminados Open Bag' },
]

export function Gallery() {
  const ref = useReveal<HTMLElement>()
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + work.length) % work.length)),
    [],
  )
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % work.length)),
    [],
  )

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
          {work.map((item, i) => (
            <button
              key={item.src}
              type="button"
              className={`gallery__item gallery__item--${(i % 4) + 1}`}
              onClick={() => setActive(i)}
              aria-label={`Ampliar: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </button>
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

      <Lightbox
        images={work}
        index={active}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}
