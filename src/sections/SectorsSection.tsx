import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { imageFallback, imagePath } from '../lib/images';

const sectors = [
  {
    name: 'Industrial & Logístico',
    description: 'Soluciones de ingeniería y mantenimiento preventivo/correctivo diseñadas para garantizar la continuidad operativa.',
    items: ['Plantas de producción', 'Fábricas', 'Centros de distribución', 'Bodegas'],
    image: 'sector-industrial.jpg',
    layout: 'large', // 60% width
  },
  {
    name: 'Comercial & Retail',
    description: 'Instalaciones eléctricas, climatización y mantenimiento de infraestructura orientados a crear entornos confortables y seguros.',
    items: ['Centros comerciales', 'Hoteles', 'Restaurantes'],
    image: 'sector-commercial.jpg',
    layout: 'small', // 40% width
  },
  {
    name: 'Salud & Corporativo',
    description: 'Soporte técnico especializado para infraestructuras con exigencias normativas estrictas.',
    items: ['Clínicas', 'Laboratorios', 'Edificios corporativos'],
    image: 'sector-health.jpg',
    layout: 'small',
  },
  {
    name: 'Residencial & Copropiedades',
    description: 'Servicios preventivos programados y atención técnica oportuna para la conservación física.',
    items: ['Conjuntos residenciales', 'Condominios', 'Zonas comunes'],
    image: 'sector-residential.jpg',
    layout: 'large',
  },
];

export default function SectorsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.sector-card');
    cards.forEach((card, i) => {
      const htmlCard = card as HTMLElement;
      htmlCard.style.opacity = '0';
      htmlCard.style.transform = i % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetCards = entry.target.querySelectorAll('.sector-card');
            targetCards.forEach((card, i) => {
              const htmlCard = card as HTMLElement;
              setTimeout(() => {
                htmlCard.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
                htmlCard.style.opacity = '1';
                htmlCard.style.transform = 'translateX(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sectores"
      className="border-t"
      style={{ backgroundColor: '#f5f3ef', borderColor: '#d4d0ca', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <p
            className="mb-4 text-xs uppercase tracking-[2px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#c4713b' }}
          >
            Mercado
          </p>
          <h2
            className="mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
          >
            Sectores que atendemos
          </h2>
          <p
            className="max-w-[700px] leading-[1.7]"
            style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a', fontSize: '17px' }}
          >
            Adaptamos nuestras soluciones técnicas a las exigencias operativas, de seguridad y normativas de cada sector económico.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div ref={gridRef} className="flex flex-col gap-6">
          {/* Top Row: 60/40 */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="sector-card md:w-[60%]">
              <SectorCard sector={sectors[0]} />
            </div>
            <div className="sector-card md:w-[40%]">
              <SectorCard sector={sectors[1]} />
            </div>
          </div>

          {/* Bottom Row: 40/60 */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="sector-card md:w-[40%]">
              <SectorCard sector={sectors[2]} />
            </div>
            <div className="sector-card md:w-[60%]">
              <SectorCard sector={sectors[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectorCard({ sector }: { sector: typeof sectors[0] }) {
  const [src, setSrc] = useState(imagePath(sector.image));

  return (
    <div className="group h-full">
      <div className="min-h-[210px] overflow-hidden sm:min-h-0" style={{ aspectRatio: '16/10' }}>
        <img
          src={src}
          alt={sector.name}
          loading="lazy"
          decoding="async"
          onError={() => setSrc(imageFallback(sector.name))}
          className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="border border-t-0 p-6" style={{ borderColor: '#d4d0ca' }}>
        <h3
          className="mb-2 text-lg font-medium uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
        >
          {sector.name}
        </h3>
        <p
          className="mb-4 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", color: '#8a8580', fontSize: '15px' }}
        >
          {sector.description}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {sector.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#8a8580' }}
            >
              <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#c4713b' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
