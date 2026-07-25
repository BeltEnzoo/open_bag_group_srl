import { useEffect, useId } from 'react'
import './Lightbox.css'

type LightboxProps = {
  images: { src: string; alt: string }[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const titleId = useId()
  const open = index !== null
  const current = open ? images[index] : null

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, onPrev, onNext])

  if (!open || !current) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <p id={titleId} className="visually-hidden">
        Vista ampliada: {current.alt}
      </p>

      <button
        type="button"
        className="lightbox__close"
        aria-label="Cerrar"
        onClick={onClose}
      >
        ×
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Imagen anterior"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Imagen siguiente"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
          >
            ›
          </button>
        </>
      )}

      <figure
        className="lightbox__figure"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={current.src} alt={current.alt} />
        <figcaption>
          {index! + 1} / {images.length}
        </figcaption>
      </figure>
    </div>
  )
}
