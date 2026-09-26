import { useReveal } from '../hooks/useReveal'
import './Capacidad.css'

const stats = [
  { value: '20', label: 'años fabricando' },
  { value: '1500', label: 'm² de planta' },
  { value: '100', label: 'km sin costo de envío' },
  { value: '15', label: 'provincias con presencia' },
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
              Fabricamos envases de todos los modelos y especificaciones para
              cada sector: big bag válvula-válvula, pollera y válvula de
              descarga, pollera y fondo ciego, válvula de carga y fondo de
              descarga total, big bag con mamparos, big bag ventilados, sling
              bag para exportación, maxi bag y bulk bag.
            </p>
            <p>
              Contamos con líneas para el sector de los áridos: bolsones para
              corralones de 1 metro y de medio metro, con impresión en las 4
              caras en alta definición.
            </p>
            <p>
              Tenemos departamento propio de diseño y corte de clisé de logos.
              La entrega es rápida y el abastecimiento a nuestros clientes es
              casi inmediato.
            </p>
          </div>

          <div className="cap__shot reveal d2">
            <img
              src="/images/new/img14.jpeg"
              alt="Bolsones de áridos impresos para corralón"
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
              Válvula-válvula, pollera, fondo ciego, mamparos, ventilados, sling
              bag, maxi bag y bulk bag. Cada modelo se ajusta a la carga y al
              sector.
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
