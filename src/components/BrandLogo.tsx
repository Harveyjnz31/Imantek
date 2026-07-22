interface BrandLogoProps {
  className?: string;
  dark?: boolean;
}

export default function BrandLogo({ className = '', dark = false }: BrandLogoProps) {
  const primary = dark ? '#050b16' : '#ffffff';
  const accent = '#009fe3';

  return (
    <span
      className={`inline-flex items-baseline font-bold uppercase leading-none ${className}`}
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        letterSpacing: '0.08em',
      }}
    >
      <span style={{ color: primary }}>IMAN</span>
      <span style={{ color: accent }}>TEK</span>
    </span>
  );
}
