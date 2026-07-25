import { useReveal } from '../hooks/useReveal'
import './WhyUs.css'

const pillars = [
  {
    title: 'Profesionalismo',
    text: 'Brindamos soluciones con alto grado de flexibilidad, confiabilidad y profesionalismo a nuestros clientes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="16" width="32" height="24" stroke="currentColor" strokeWidth="1.75" />
        <path d="M18 16V12a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 24h32" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: 'Prestigio',
    text: 'Contamos con más de 10 años de experiencia en fabricación de envases flexibles.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M10 40c2.5-8 8-12 14-12s11.5 4 14 12"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path d="M20 22.5h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Responsabilidad',
    text: 'Nuestros productos son elaborados con la más alta calidad del mercado.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M14 24c0-4 3-7 7-7h1c1.5-3 4-5 7-5 4.5 0 8 3.5 8 8 0 .7-.1 1.3-.2 2H38c3 0 5 2.2 5 5s-2 5-5 5H21c-4 0-7-3-7-7z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path d="M8 28h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function WhyUs() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="why" ref={ref} aria-labelledby="why-title">
      <div className="why__bg" aria-hidden="true">
        <img src="/images/foto_6.jpg" alt="" />
        <div className="why__veil" />
      </div>

      <div className="container">
        <header className="why__header reveal">
          <h2 id="why-title" className="section-title section-title--light">
            ¿Por qué elegirnos?
          </h2>
          <div className="section-rule section-rule--light" aria-hidden="true">
            <span />
          </div>
        </header>

        <ul className="why__list">
          {pillars.map((item, i) => (
            <li
              key={item.title}
              className={`why__item reveal reveal-delay-${i + 1}`}
            >
              <div className="why__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
