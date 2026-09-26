import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Hero.css'

const slides = [
  { src: '/images/new/img1.jpeg', alt: 'Planta y camioneta de Open Bag Group' },
  { src: '/images/new/img14.jpeg', alt: 'Bolsones de áridos impresos para corralón' },
  { src: '/images/new/img17.jpeg', alt: 'Flota de camionetas Open Bag Group' },
  { src: '/images/new/img3.jpeg', alt: 'Big bags listos para despacho' },
  { src: '/images/new/img10.jpeg', alt: 'Línea de costura en la planta' },
  { src: '/images/new/img18.jpeg', alt: 'Despacho de big bags' },
]

const SLIDE_MS = 5000

export function Hero() {
  const ref = useReveal<HTMLElement>()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [])

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
            Envases flexibles complejos para la industria alimenticia, química, agro,
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

        <div className="hero__visual reveal d2">
          <div className="hero__frame" aria-roledescription="carrusel" aria-label={slides[index].alt}>
            {slides.map((slide, i) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={i === index ? slide.alt : ''}
                className={`hero__img${i === index ? ' is-active' : ''}`}
              />
            ))}
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
