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
            Somos una empresa con <strong>20 años de experiencia</strong> en la
            fabricación de envases flexibles (big bags) desde nuestra planta en
            San Antonio de Areco, Buenos Aires.
          </p>
          <p>
            Abastecemos de envases a gran parte del país, con productos de alta
            calidad para los distintos sectores industriales.
          </p>
          <p>
            La planta está a 113 km de Capital Federal, sobre Ruta Nacional 8 y
            Ruta Provincial 41, con conectividad cercana a las rutas nacionales
            7 y 9.
          </p>
          <p>
            Nos especializamos en big bag para la industria alimenticia, química,
            agro, petrolera, ganadera, pesquera y de los áridos.
          </p>
          <p>
            Actualmente estamos <strong>construyendo la nueva planta</strong> en
            el parque industrial Juan Hipólito Vieytes de San Antonio de Areco:
            1500 m² para crecer en capacidad, tecnificar, agilizar el servicio y
            sostener la máxima calidad de los envases.
          </p>
          <img
            src="/images/senasa.png"
            alt="Certificación SENASA N° E-2983"
            className="plant__senasa"
          />
          <a href="#capacidad" className="btn-line">
            Nuestra capacidad
          </a>
        </div>
      </div>
    </section>
  )
}
