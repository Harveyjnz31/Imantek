import { useEffect, useRef } from 'react';
import IndustrialBackground from './IndustrialBackground';

const tags = ['Ingeniería', 'Automatización', 'Instalaciones Eléctricas', 'Tableros', 'Mantenimiento', 'Instrumentación', 'Metalmecánica', 'Obras Industriales', 'Tecnología Industrial'];

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const children = el.querySelectorAll('.hero-animate');
    children.forEach((child, i) => {
      const htmlChild = child as HTMLElement;
      htmlChild.style.opacity = '0';
      htmlChild.style.transform = 'translateY(20px)';
      htmlChild.style.transition = `opacity 0.6s ease-out ${i * 0.2}s, transform 0.6s ease-out ${i * 0.2}s`;

      setTimeout(() => {
        htmlChild.style.opacity = '1';
        htmlChild.style.transform = 'translateY(0)';
      }, 100);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#1a1a1a',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)',
      }}
    >
      {/* Technical industrial background */}
      <IndustrialBackground />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(7,16,25,0.74) 0%, rgba(7,16,25,0.44) 45%, rgba(7,16,25,0.82) 100%), linear-gradient(to bottom, rgba(7,16,25,0.12) 0%, rgba(7,16,25,0.84) 100%)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 pb-24 text-center"
      >
        <p
          className="hero-animate mb-6 text-xs uppercase tracking-[2px]"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
        >
          IMANTEK S.A.S. &middot; NIT: 902069790-1
        </p>

        <h1
          className="hero-animate mb-6 max-w-[800px] text-3xl font-bold uppercase leading-[1.1] sm:text-4xl md:text-[52px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
        >
          Ingenier&iacute;a y servicios t&eacute;cnicos integrales para operaciones seguras y confiables
        </h1>

        <p
          className="hero-animate mb-8 max-w-[600px] text-base leading-relaxed sm:text-lg"
          style={{ fontFamily: "'Inter', sans-serif", color: '#8a8580' }}
        >
          Servicios t&eacute;cnicos integrales para operaciones seguras y confiables
        </p>

        {/* Tags */}
        <div className="hero-animate mb-10 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border px-4 py-2 text-xs uppercase tracking-[1.5px]"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: '#cccccc',
                borderColor: '#555555',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa."
          target="_blank"
          rel="noopener noreferrer"
          className="hero-animate px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#007fb8]"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            backgroundColor: '#009fe3',
          }}
        >
          Solicitar cotizaci&oacute;n
        </a>

        {/* Scroll Indicator */}
        <div className="hero-animate absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <div className="relative h-10 w-[1px] overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
            <div
              className="absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full"
              style={{
                backgroundColor: 'rgba(255,255,255,0.6)',
                left: '50%',
                animation: 'scrollBounce 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { top: 0; opacity: 0.6; }
          50% { top: 24px; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
