import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const sectors = [
  {
    name: 'Industrial & Logístico',
    description: 'Soluciones de ingeniería y mantenimiento preventivo/correctivo diseñadas para garantizar la continuidad operativa.',
    items: ['Plantas de producción', 'Fábricas', 'Centros de distribución', 'Bodegas'],
    image: '/images/sector-industrial.jpg',
  },
  {
    name: 'Comercial & Retail',
    description: 'Instalaciones eléctricas, climatización y mantenimiento de infraestructura orientados a crear entornos confortables y seguros.',
    items: ['Centros comerciales', 'Hoteles', 'Restaurantes'],
    image: '/images/sector-commercial-retail.jpg',
  },
  {
    name: 'Residencial & Copropiedades',
    description: 'Servicios preventivos programados y atención técnica oportuna para la conservación física.',
    items: ['Conjuntos residenciales', 'Condominios', 'Zonas comunes'],
    image: '/images/sector-residential.jpg',
  },
];

export default function SectorsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.sector-card');
    cards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      htmlCard.style.opacity = '0';
      htmlCard.style.transform = 'translateY(30px)';
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
                htmlCard.style.transform = 'translateY(0)';
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
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
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

        {/* 3-Column Grid */}
        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div key={sector.name} className="sector-card">
              <SectorCard sector={sector} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorCard({ sector }: { sector: typeof sectors[0] }) {
  return (
    <div className="group h-full flex flex-col">
      {/* Image */}
      <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img
          src={sector.image}
          alt={sector.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="border border-t-0 p-6 flex-1 flex flex-col justify-between" style={{ borderColor: '#d4d0ca' }}>
        <div>
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
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
          {sector.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#8a8580' }}
            >
              <span className="inline-block h-1 w-1 rounded-full" style={{ backgroundColor: '#009fe3' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
