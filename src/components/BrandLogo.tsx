import './BrandLogo.css'

type BrandLogoProps = {
  className?: string
}

/** Lockup: isotipo + tipografía (S.R.L. siempre legible) */
export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span className={`brand-logo ${className}`.trim()} role="img" aria-label="Open Bag Group S.R.L.">
      <img
        src="/logo/openbag-mark-red.png"
        alt=""
        className="brand-logo__mark"
        aria-hidden="true"
      />
      <span className="brand-logo__rule" aria-hidden="true" />
      <span className="brand-logo__word">
        <span className="brand-logo__open">Open Bag</span>
        <span className="brand-logo__group">
          Group
          <span className="brand-logo__srl">S.R.L.</span>
        </span>
      </span>
    </span>
  )
}
