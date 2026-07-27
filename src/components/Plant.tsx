import { useReveal } from '../hooks/useReveal'
import './Plant.css'

export function Plant() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="planta" className="plant" ref={ref}>
      <div className="plant__intro shell">
        <p className="plant__kicker reveal">La planta</p>
        <h2 className="display plant__headline reveal d1">
          Donde el tejido
          <br />
          se vuelve <em>industria</em>
        </h2>
      </div>

      <div className="plant__layout shell">
        <div className="plant__media reveal d2">
          <img
            src="/images/new/img10.jpeg"
            alt="Equipo de Open Bag confeccionando big bags"
          />
          <img
            src="/images/new/img4.jpeg"
            alt="Fachada Open Bag Group en San Antonio de Areco"
            className="plant__media-offset"
          />
        </div>

        <div className="plant__copy reveal d3">
          <p>
            Somos una empresa joven con amplia experiencia en la fabricación de
            envases flexibles — big bags — desde San Antonio de Areco.
          </p>
          <p>
            Estamos a 113 km de Capital Federal, sobre Ruta Nacional 8 y Ruta
            Provincial 41, con conectividad a Rutas 7 y 9.
          </p>
          <p>
            Invertimos en el parque industrial{' '}
            <strong>Juan Hipólito Vieytes</strong>: una planta modelo de 1500 m²
            para tecnificar, agilizar y llevar la calidad al máximo.
          </p>
          <a href="#capacidad" className="btn-line">
            Nuestra capacidad
          </a>
        </div>
      </div>
    </section>
  )
}
