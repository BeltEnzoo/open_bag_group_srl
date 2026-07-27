import { useEffect, useState } from 'react'
import './WhatsApp.css'

const WHATSAPP = '549232615401438'

export function WhatsApp() {
  const [showTip, setShowTip] = useState(false)

  useEffect(() => {
    const show = window.setTimeout(() => setShowTip(true), 2200)
    const hide = window.setTimeout(() => setShowTip(false), 7500)
    return () => {
      window.clearTimeout(show)
      window.clearTimeout(hide)
    }
  }, [])

  return (
    <div className="wa">
      {showTip && <div className="wa__tip">¿Cotizamos tu pedido?</div>}
      <a
        className="wa__btn"
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Open Bag"
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.01 3C9.4 3 4.02 8.36 4.02 14.95c0 2.1.55 4.14 1.6 5.95L4 29l8.3-1.58a12.02 12.02 0 0 0 3.7.58h.01c6.61 0 11.98-5.37 11.98-11.97C27.99 8.36 22.62 3 16.01 3zm6.97 16.92c-.3.84-1.74 1.55-2.42 1.65-.62.09-1.4.13-2.26-.14-.52-.16-1.19-.39-2.05-.76-3.61-1.56-5.96-5.18-6.14-5.42-.18-.24-1.46-1.94-1.46-3.7s.92-2.62 1.25-2.98c.33-.35.72-.44.96-.44h.7c.22 0 .52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.36.37-.15.72.2.35.9 1.48 1.93 2.4 1.33 1.18 2.45 1.55 2.8 1.73.35.18.55.15.75-.09.2-.24.86-.99 1.09-1.33.23-.35.46-.29.77-.17.31.12 1.98.93 2.32 1.1.34.17.57.26.65.4.08.15.08.86-.22 1.7z"
          />
        </svg>
      </a>
    </div>
  )
}
