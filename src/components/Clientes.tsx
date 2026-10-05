import { useReveal } from '../hooks/useReveal'
import './Clientes.css'

const logoModules = import.meta.glob('../assets/clientes/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const names: Record<string, string> = {
  nestle: 'Nestlé',
  atanor: 'Atanor',
  toyota: 'Toyota',
  holcim: 'Holcim',
  gdm: 'GDM',
  donmario: 'DonMario Semillas',
  'illinois-semillas': 'Illinois Semillas',
  neogen: 'Neogen',
  stine: 'STINE',
  molinos: 'Molinos Río de la Plata',
  bunge: 'Bunge',
  'alimentos-sagemuller': 'Alimentos Sagemüller',
  'rgs-refineria-sudamericana': 'RGS Refinería Sudamericana',
  klein: 'Klein',
  deltamix: 'Deltamix',
  amauta: 'Amauta',
  'usina-eco': 'Usina Eco',
  'mercado-de-obra': 'Mercado de Obra',
  pura: 'Pura',
  obertura: 'Obertura',
  'reciclando-conciencia': 'Reciclando Conciencia',
  'hermanos-materiales-z4': 'Hermanos Materiales Z4',
}

const order = Object.keys(names)

const logos = Object.entries(logoModules)
  .map(([path, src]) => {
    const id = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? 'cliente'
    return { src, id, name: names[id] ?? id }
  })
  .filter((logo) => !logo.id.startsWith('_'))
  .sort((a, b) => {
    const ai = order.indexOf(a.id)
    const bi = order.indexOf(b.id)
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi)
  })

export function Clientes() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="clientes" className="clientes" ref={ref} aria-labelledby="clientes-title">
      <div className="shell">
        <p className="clientes__kicker reveal">Nuestros clientes</p>
        <h2 id="clientes-title" className="display clientes__title reveal d1">
          Empresas que
          <br />
          eligen nuestros envases
        </h2>
        <p className="clientes__lead reveal d2">
          Trabajamos con industrias de alimentos, química, automotriz y
          semillas. Somos distribuidores para Semillas STINE y proveedores de
          Molinos Río de la Plata y Bunge.
        </p>
      </div>

      {logos.length > 0 ? (
        <div className="clientes__logos" aria-label="Logos de clientes">
          <div className="clientes__logos-track">
            {[...logos, ...logos].map((logo, i) => (
              <img key={`${logo.name}-${i}`} src={logo.src} alt={logo.name} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
