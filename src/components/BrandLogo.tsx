import './BrandLogo.css'

type BrandLogoProps = {
  variant?: 'color' | 'light'
  className?: string
}

export function BrandLogo({ variant = 'color', className = '' }: BrandLogoProps) {
  const src =
    variant === 'light'
      ? '/logo/openbag-group-light.png'
      : '/logo/openbag-group-color.png'

  return (
    <img
      src={src}
      alt="Open Bag Group S.R.L."
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
    />
  )
}
