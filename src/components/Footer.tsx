import { BrandLogo } from './BrandLogo'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="foot">
      <div className="shell foot__inner">
        <BrandLogo className="brand-logo--footer" />
        <div className="foot__meta">
          <p>© {year} Open Bag Group SRL</p>
          <p>Hipólito Irigoyen 728 — San Antonio de Areco, Bs. As.</p>
        </div>
        <div className="foot__links">
          <a href="mailto:info@openbag.com.ar">info@openbag.com.ar</a>
          <a href="tel:+542326455469">02326-455469</a>
        </div>
      </div>
    </footer>
  )
}
