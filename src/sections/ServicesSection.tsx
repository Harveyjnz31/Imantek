import { useEffect, useRef } from 'react';
import { Wrench, Settings, Cpu, Gauge, Thermometer, Paintbrush } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Preventivo y correctivo de equipos industriales, eléctricos y mecánicos. Garantizamos continuidad operativa y vida útil prolongada de sus activos.',
  },
  {
    icon: Settings,
    title: 'Montajes',
    description: 'Instalación y montaje de sistemas eléctricos, mecánicos y estructurales bajo normas de seguridad industrial.',
  },
  {
    icon: Cpu,
    title: 'Automatización',
    description: 'Diseño e implementación de sistemas automatizados para optimizar procesos y reducir costos operativos. PLCs, HMIs y sistemas SCADA.',
  },
  {
    icon: Gauge,
    title: 'Instrumentación',
    description: 'Instalación, calibración y gestión de instrumentos de medición y control para procesos industriales.',
  },
  {
    icon: Thermometer,
    title: 'Refrigeración',
    description: 'Instalación, mantenimiento y reparación de sistemas de aire acondicionado industrial, comercial y residencial.',
  },
  {
    icon: Paintbrush,
    title: 'Obras Civiles',
    description: 'Pinturas de fachadas, estructuras en drywall, remodelaciones industriales e impermeabilización.',
  },
];

export default function ServicesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.service-card');
    cards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      htmlCard.style.opacity = '0';
      htmlCard.style.transform = 'translateY(40px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetCards = entry.target.querySelectorAll('.service-card');
            targetCards.forEach((card, i) => {
              const htmlCard = card as HTMLElement;
              htmlCard.style.transition = `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s`;
              htmlCard.style.opacity = '1';
              htmlCard.style.transform = 'translateY(0)';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      className="border-t"
      style={{ backgroundColor: '#f5f3ef', borderColor: '#d4d0ca', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div ref={headerRef}>
          <p
            className="mb-4 text-xs uppercase tracking-[2px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#c4713b' }}
          >
            Lo que hacemos
          </p>
          <h2
            className="mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
          >
            Portafolio de servicios
          </h2>
          <p
            className="mb-12 max-w-[700px] leading-[1.7]"
            style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a', fontSize: '17px' }}
          >
            Ofrecemos una solución técnica completa: desde el diagnóstico hasta la ejecución y el mantenimiento continuo, bajo un mismo equipo de confianza.
          </p>
        </div>

        {/* Service Grid */}
        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group border p-8 transition-all duration-300"
                style={{
                  borderColor: '#d4d0ca',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#c4713b';
                  e.currentTarget.style.backgroundColor = 'rgba(196, 113, 59, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#d4d0ca';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center border transition-all duration-300 group-hover:bg-[rgba(196,113,59,0.1)]"
                  style={{ borderColor: '#c4713b' }}
                >
                  <Icon size={24} style={{ color: '#c4713b' }} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-lg font-medium uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#8a8580', fontSize: '15px' }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
