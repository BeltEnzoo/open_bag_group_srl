import './BrandLogo.css'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      src="/logo/openbag-logo-oficial.png"
      alt="Open Bag Group S.R.L."
      className={`brand-logo ${className}`.trim()}
    />
  )
}
