import { useReveal } from '../hooks/useReveal'
import './Nosotros.css'

const collage = [
  { src: '/images/foto_1.jpg', alt: 'Operario confeccionando big bags' },
  { src: '/images/foto_nosotros.jpg', alt: 'Depósito con stock de envases' },
  { src: '/images/foto_3.jpg', alt: 'Big bags apilados listos para entrega' },
  { src: '/images/foto_5.jpg', alt: 'Línea productiva de Open Bag' },
]

export function Nosotros() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="nosotros" className="nosotros" ref={ref}>
      <div className="container">
        <header className="nosotros__header reveal">
          <h2 className="section-title">Nosotros</h2>
          <div className="section-rule" aria-hidden="true">
            <span />
          </div>
        </header>

        <div className="nosotros__grid">
          <div className="nosotros__collage reveal reveal-delay-1" aria-hidden="false">
            {collage.map((item) => (
              <figure key={item.src} className="nosotros__shot">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>

          <div className="nosotros__copy reveal reveal-delay-2">
            <p>
              Somos una empresa joven con amplia experiencia en la{' '}
              <strong>fabricación de envases flexibles (BIG BAGS)</strong> desde
              nuestra planta de fabricación en San Antonio de Areco, Bs. As.
            </p>
            <p>
              Abastecemos de envases a gran parte de nuestro país con productos de
              alta calidad para los diversos sectores industriales.
            </p>
            <p>
              Nuestra planta fabril se encuentra ubicada en San Antonio de Areco a
              solo 113 km de Capital Federal, en un punto estratégico sobre Ruta
              Nacional 8 y Ruta Provincial 41, con conectividad cercana a Rutas
              Nacionales 7 y 9.
            </p>
            <p className="nosotros__highlight">
              Nos especializamos en big bag complejos para la industria
              alimenticia, química, agro, petrolera, ganadera y pesquera.
            </p>
            <p>
              Recientemente realizamos una inversión de crecimiento en el parque
              industrial{' '}
              <strong>Juan Hipólito Vieytes de San Antonio de Areco</strong>,
              apuntando al crecimiento de nuestra capacidad productiva y al mejor
              desarrollo de servicios, con una planta modelo de{' '}
              <strong>1500 m²</strong>, tecnificando, agilizando y focalizando en
              la máxima calidad de nuestros envases.
            </p>

            <img
              src="/images/logo_parque.png"
              alt="Juan Hipólito Vieytes Parque Agroindustrial"
              className="nosotros__parque"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
