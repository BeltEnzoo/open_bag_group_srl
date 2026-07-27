import { useReveal } from '../hooks/useReveal'
import './Capacidad.css'

const stats = [
  { value: '10+', label: 'años fabricando' },
  { value: '1500', label: 'm² de planta' },
  { value: '100', label: 'km sin costo de envío' },
  { value: '7', label: 'provincias con presencia' },
]

const industries = [
  'Alimenticia',
  'Química',
  'Agro',
  'Petrolera',
  'Ganadera',
  'Pesquera',
  'Áridos',
  'Automotriz',
]

export function Capacidad() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="capacidad" className="cap" ref={ref}>
      <div className="shell">
        <div className="cap__head">
          <p className="cap__kicker reveal">Capacidad</p>
          <h2 className="display cap__title reveal d1">
            Números que
            <br />
            sostienen promesas
          </h2>
        </div>

        <ul className="cap__stats">
          {stats.map((s, i) => (
            <li key={s.label} className={`cap__stat reveal d${i + 1}`}>
              <span className="display cap__value">{s.value}</span>
              <span className="cap__label">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="cap__split">
          <div className="cap__text reveal">
            <h3 className="display">Lo que hacemos</h3>
            <p>
              Fabricamos envases a medida y trabajamos con liners de alta
              calidad. Abastecemos a Nestlé, Atanor, Toyota y a empresas de
              exportación.
            </p>
            <p>
              Líneas para áridos y corralones: bolsones de 1 m y ½ m, impresión
              en 4 caras en alta definición y departamento gráfico propio.
            </p>
          </div>

          <div className="cap__shot reveal d2">
            <img
              src="/images/new/img7.jpeg"
              alt="Big bag Open Bag en operación"
            />
            <div className="cap__industries">
              <p className="cap__industries-label">Sectores</p>
              <ul>
                {industries.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="cap__models reveal">
          <div className="cap__models-copy">
            <h3 className="display">Modelos de big bag</h3>
            <p>
              Boca abierta, pollera de carga, válvula de carga, fondo ciego o
              válvula de descarga. Configuramos según tu operación.
            </p>
          </div>
          <img
            src="/images/serv_2.jpg"
            alt="Modelos de big bag: carga y descarga"
            className="cap__models-img"
          />
        </div>
      </div>
    </section>
  )
}
