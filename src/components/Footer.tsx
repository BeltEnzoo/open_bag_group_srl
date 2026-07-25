import { BrandLogo } from './BrandLogo'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container-wide">
        <a href="#inicio" className="footer__brand" aria-label="Open Bag">
          <BrandLogo variant="light" className="brand-logo--footer" />
        </a>

        <div className="footer__meta">
          <p>© {year} Open Bag Group SRL</p>
          <p>Hipólito Irigoyen 728 — San Antonio de Areco, Bs. As.</p>
          <p>
            <a href="tel:+542326455469">02326-455469</a>
            {' · '}
            <a href="mailto:info@openbag.com.ar">info@openbag.com.ar</a>
          </p>
        </div>

        <div className="footer__social">
          <span>Seguinos</span>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
