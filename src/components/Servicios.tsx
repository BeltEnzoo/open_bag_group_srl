import { useReveal } from '../hooks/useReveal'
import './Servicios.css'

const regions = [
  'Buenos Aires',
  'Neuquén',
  'Formosa',
  'Santa Fe',
  'Entre Ríos',
  'Corrientes',
  'Río Negro',
]

export function Servicios() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="servicios" className="servicios" ref={ref}>
      <div className="container">
        <header className="servicios__header reveal">
          <h2 className="section-title">Servicios</h2>
          <div className="section-rule" aria-hidden="true">
            <span />
          </div>
        </header>

        <div className="servicios__intro reveal reveal-delay-1">
          <div className="servicios__visual">
            <img
              src="/images/img_serv_1.png"
              alt="Big bag Open Bag"
              loading="lazy"
            />
          </div>
          <div className="servicios__text">
            <p>
              Fabricamos envases de todos los modelos y especificaciones puntuales
              para los diversos sectores de la industria. Contamos con una alianza
              estratégica con una empresa fabricante importante de liners del país,
              por lo cual trabajamos para importantes empresas de alimentos,
              química y automotriz como <strong>Nestlé</strong>,{' '}
              <strong>Atanor</strong> y <strong>Toyota</strong>.
            </p>
            <p>
              Actualmente cubrimos gran parte de nuestro país, con importante
              presencia de nuestros envases en:
            </p>
            <ul className="servicios__regions">
              {regions.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="servicios__note">
              Abastecemos a diferentes empresas de exportación chinas. Entregamos
              envases en su empresa, en un radio promedio de{' '}
              <strong>100 km</strong> de nuestra planta sin costo, y acordamos
              entregas programadas para cargas específicas.
            </p>
          </div>
        </div>

        <div className="servicios__split reveal reveal-delay-2">
          <div className="servicios__split-copy">
            <h3>Áridos y corralones</h3>
            <p>
              Contamos con líneas productivas destinadas al creciente sector de
              los áridos, brindando excelentes bolsones para corralones de 1 m y
              medio metro, con impresiones en las 4 caras de alta definición y
              nuestro propio departamento gráfico.
            </p>
            <p>
              Garantizamos una entrega de productos rápida y efectiva, con un
              abastecimiento a nuestros clientes casi inmediato.
            </p>
          </div>
          <div className="servicios__split-media">
            <img
              src="/images/serv_2.jpg"
              alt="Bolsones para el sector de áridos"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
