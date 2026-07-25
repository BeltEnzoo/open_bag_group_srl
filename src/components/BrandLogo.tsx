type BrandLogoProps = {
  variant?: 'color' | 'light'
  className?: string
}

export function BrandLogo({ variant = 'color', className = '' }: BrandLogoProps) {
  const src = variant === 'light' ? '/logo/openbag-white.svg' : '/logo/openbag-web.svg'

  return (
    <img
      src={src}
      alt="Open Bag"
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
    />
  )
}
