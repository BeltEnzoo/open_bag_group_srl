import { useState, type FormEvent } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contacto.css'

const WHATSAPP = '549232615401438'

export function Contacto() {
  const ref = useReveal<HTMLElement>()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const message = String(data.get('message') || '').trim()

    const text = [
      `Hola Open Bag, soy ${name}.`,
      email ? `Email: ${email}` : '',
      phone ? `Tel: ${phone}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <section id="contacto" className="contacto" ref={ref}>
      <div className="container">
        <header className="contacto__header reveal">
          <h2 className="section-title section-title--light">Contactanos</h2>
          <div className="section-rule section-rule--light" aria-hidden="true">
            <span />
          </div>
        </header>

        <div className="contacto__grid">
          <div className="contacto__info reveal reveal-delay-1">
            <a
              className="contacto__channel"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contacto__label">WhatsApp</span>
              <strong>02326-15401438</strong>
            </a>
            <a className="contacto__channel" href="tel:+542326455469">
              <span className="contacto__label">Teléfono planta</span>
              <strong>02326-455469</strong>
            </a>
            <div className="contacto__channel">
              <span className="contacto__label">Dirección</span>
              <strong>
                Hipólito Irigoyen 728 — San Antonio de Areco, Bs. As., Argentina
              </strong>
            </div>
            <a className="contacto__channel" href="mailto:info@openbag.com.ar">
              <span className="contacto__label">Mail</span>
              <strong>info@openbag.com.ar</strong>
              <span className="contacto__secondary">openbagtextil@gmail.com</span>
            </a>
          </div>

          <form className="contacto__form reveal reveal-delay-2" onSubmit={onSubmit}>
            <p className="contacto__form-lead">
              Contanos qué necesitás y te respondemos por WhatsApp.
            </p>
            <label>
              Nombre
              <input name="name" type="text" required placeholder="Tu nombre" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="tu@empresa.com" />
            </label>
            <label>
              Teléfono
              <input name="phone" type="tel" placeholder="Código de área + número" />
            </label>
            <label>
              Mensaje
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Modelo, cantidad, destino..."
              />
            </label>
            <button type="submit" className="btn">
              Enviar por WhatsApp
            </button>
            {sent && (
              <p className="contacto__ok" role="status">
                Se abrió WhatsApp con tu consulta.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
