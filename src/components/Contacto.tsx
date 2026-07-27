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
    <section id="contacto" className="contact" ref={ref}>
      <div className="shell contact__grid">
        <div className="contact__left reveal">
          <p className="contact__kicker">Contacto</p>
          <h2 className="display contact__title">
            Contanos
            <br />
            qué necesitás
          </h2>
          <p className="contact__lead">
            Respondemos por WhatsApp con tiempos reales de planta.
          </p>

          <ul className="contact__channels">
            <li>
              <span>WhatsApp</span>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                02326-15401438
              </a>
            </li>
            <li>
              <span>Planta</span>
              <a href="tel:+542326455469">02326-455469</a>
            </li>
            <li>
              <span>Mail</span>
              <a href="mailto:info@openbag.com.ar">info@openbag.com.ar</a>
            </li>
            <li>
              <span>Dirección</span>
              <strong>Hipólito Irigoyen 728 · San Antonio de Areco</strong>
            </li>
          </ul>
        </div>

        <form className="contact__form reveal d2" onSubmit={onSubmit}>
          <label>
            Nombre
            <input name="name" required placeholder="Tu nombre o empresa" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="tu@empresa.com" />
          </label>
          <label>
            Teléfono
            <input name="phone" type="tel" placeholder="Código + número" />
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
          <button type="submit" className="btn-red">
            Enviar por WhatsApp
          </button>
          {sent && (
            <p className="contact__ok" role="status">
              Se abrió WhatsApp con tu consulta.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
