import { useReveal } from '../hooks/useReveal'
import './Pagos.css'

const methods = [
  'Transferencias',
  'Valores propios o de terceros',
  'iCheck',
  'Mercado Pago',
]

export function Pagos() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="pagos" className="pagos" ref={ref}>
      <div className="shell pagos__inner">
        <div className="pagos__copy reveal">
          <p className="pagos__kicker">Medios de pago</p>
          <h2 className="display pagos__title">
            Amplias formas
            <br />
            de cerrar el trato
          </h2>
          <p className="pagos__lead">
            Contamos con transferencias, valores propios o de terceros, iCheck y
            Mercado Pago.
          </p>
          <ul className="pagos__list">
            {methods.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div className="pagos__visual reveal d2">
          <img
            src="/images/medios_pago.jpg"
            alt="Transferencias, cheques, iCheck y Mercado Pago"
            loading="lazy"
          />
          <p className="pagos__trust">
            Cada compromiso que asumimos es un sello de confianza con usted.
          </p>
        </div>
      </div>
    </section>
  )
}
