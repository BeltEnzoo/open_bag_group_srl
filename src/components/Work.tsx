import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Lightbox } from './Lightbox'
import './Work.css'

const shots = [
  { src: '/images/new/img3.jpeg', alt: 'Big bags listos para despacho' },
  { src: '/images/new/img13.jpeg', alt: 'Confección en planta Open Bag' },
  { src: '/images/new/img7.jpeg', alt: 'Big bag en operación con autoelevador' },
  { src: '/images/new/img2.jpeg', alt: 'Depósito y stock en fachada' },
  { src: '/images/new/img10.jpeg', alt: 'Línea de costura industrial' },
  { src: '/images/new/img5.jpeg', alt: 'Pallets de envases flexibles' },
  { src: '/images/new/img12.jpeg', alt: 'Flota de distribución Open Bag' },
  { src: '/images/new/img1.jpeg', alt: 'Planta y unidad Open Bag Group' },
  { src: '/images/new/img6.jpeg', alt: 'Producción Open Bag' },
  { src: '/images/new/img11.jpeg', alt: 'Detalle de fabricación' },
  { src: '/images/new/img9.jpeg', alt: 'Identidad Open Bag' },
  { src: '/images/new/img8.jpeg', alt: 'Marca Open Bag Group' },
]

export function Work() {
  const ref = useReveal<HTMLElement>()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="trabajo" className="work" ref={ref}>
      <div className="shell">
        <div className="work__head">
          <p className="work__kicker reveal">Trabajo real</p>
          <h2 className="display work__title reveal d1">
            La fábrica
            <br />
            en primer plano
          </h2>
          <p className="work__lead reveal d2">
            Planta, producto y distribución. Tocá una imagen para verla en
            grande.
          </p>
        </div>

        <div className="work__mosaic reveal d2">
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              className={`work__cell work__cell--${(i % 5) + 1}`}
              onClick={() => setActive(i)}
              aria-label={`Ampliar: ${shot.alt}`}
            >
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={shots}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() =>
          setActive((i) =>
            i === null ? i : (i - 1 + shots.length) % shots.length,
          )
        }
        onNext={() =>
          setActive((i) => (i === null ? i : (i + 1) % shots.length))
        }
      />
    </section>
  )
}
