type BrandLogoProps = {
  variant?: 'color' | 'light'
  className?: string
}

export function BrandLogo({ variant = 'color', className = '' }: BrandLogoProps) {
  return (
    <img
      src="/logo/openbag-bicro.svg"
      alt="Open Bag"
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
    />
  )
}
