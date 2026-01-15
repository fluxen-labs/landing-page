interface LogoProps {
  variant?: 'light' | 'dark'
  width?: number
  height?: number
  className?: string
}

export default function Logo({ variant = 'dark', width, height = 80, className = '' }: LogoProps) {
  const filterClass = variant === 'light' ? 'invert brightness-0' : ''

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {/* Logo SVG */}
      <img 
        src="/logo.svg" 
        alt="Fluxen Labs" 
        width={width}
        height={height}
        className={filterClass}
      />
    </div>
  )
}
