import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    title: 'Servicios de Ingeniería',
    description:
      'Soluciones integrales de ingeniería para proyectos industriales de cualquier escala.',
    items: [
      'Ingeniería eléctrica',
      'Ingeniería electrónica',
      'Ingeniería mecánica',
      'Ingeniería industrial',
      'Consultoría en ingeniería',
      'Diseño y planeación de proyectos industriales',
      'Supervisión e interventoría técnica',
    ],
  },
  {
    title: 'Automatización Industrial',
    description:
      'Diseño e implementación de sistemas automatizados para optimizar procesos productivos.',
    items: [
      'Automatización de procesos industriales',
      'Programación de PLC',
      'Desarrollo de interfaces HMI',
      'Implementación de sistemas SCADA',
      'Integración de sistemas industriales',
      'Control e instrumentación industrial',
    ],
  },
  {
    title: 'Instalaciones Eléctricas',
    description:
      'Diseño, montaje y construcción de sistemas eléctricos para todos los sectores.',
    items: [
      'Instalaciones eléctricas industriales',
      'Instalaciones eléctricas comerciales',
      'Instalaciones eléctricas residenciales',
      'Montajes eléctricos',
      'Redes eléctricas industriales',
      'Diseño y construcción de sistemas eléctricos',
    ],
  },
  {
    title: 'Tableros Eléctricos',
    description:
      'Diseño, fabricación e instalación de tableros eléctricos a medida.',
    items: [
      'Diseño de tableros eléctricos',
      'Fabricación de tableros eléctricos',
      'Armado de tableros eléctricos',
      'Instalación de tableros eléctricos',
      'Adecuación y modernización de tableros eléctricos',
    ],
  },
  {
    title: 'Mantenimiento Industrial',
    description:
      'Programas de mantenimiento especializados para garantizar continuidad operativa.',
    items: [
      'Mantenimiento preventivo',
      'Mantenimiento correctivo',
      'Mantenimiento predictivo',
      'Diagnóstico de fallas',
      'Reparación de maquinaria industrial',
      'Soporte técnico especializado',
    ],
  },
  {
    title: 'Instrumentación y Control',
    description:
      'Calibración, puesta en marcha y optimización de instrumentos y sistemas de control.',
    items: [
      'Calibración de instrumentos',
      'Puesta en marcha de sistemas',
      'Optimización de procesos',
      'Configuración de equipos de control',
      'Instrumentación industrial',
    ],
  },
  {
    title: 'Metalmecánica',
    description:
      'Fabricación, montaje y mantenimiento de estructuras metálicas con soldadura especializada.',
    items: [
      'Fabricación de estructuras metálicas',
      'Montaje de estructuras metálicas',
      'Mantenimiento de estructuras metálicas',
      'Trabajos de soldadura especializada',
    ],
  },
  {
    title: 'Obras Industriales',
    description:
      'Montajes y adecuaciones técnicas para plantas e infraestructura industrial.',
    items: [
      'Montajes industriales',
      'Obras civiles relacionadas con proyectos industriales',
      'Adecuaciones técnicas para plantas industriales',
    ],
  },
  {
    title: 'Tecnología Industrial',
    description:
      'Integración de soluciones tecnológicas inteligentes para procesos productivos.',
    items: [
      'Integración tecnológica',
      'Desarrollo de soluciones industriales',
      'Implementación de sistemas inteligentes para procesos productivos',
    ],
  },
];

export default function ServicesSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30 });
  const cardsRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

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
              htmlCard.style.transition = `opacity 0.6s ease-out ${i * 0.08}s, transform 0.6s ease-out ${i * 0.08}s`;
              htmlCard.style.opacity = '1';
              htmlCard.style.transform = 'translateY(0)';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      className="border-t"
      style={{
        backgroundColor: '#f5f3ef',
        borderColor: '#d4d0ca',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div ref={headerRef}>
          <p
            className="mb-4 text-xs uppercase tracking-[2px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
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
            Soluciones técnicas integrales respaldadas por nuestra cámara de
            comercio: desde ingeniería y automatización hasta metalmecánica y
            tecnología industrial, bajo un mismo equipo de confianza.
          </p>
        </div>

        {/* Service Grid */}
        <div ref={cardsRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.title}
                className="service-card group cursor-pointer border transition-all duration-300"
                style={{
                  borderColor: isExpanded ? '#009fe3' : '#d4d0ca',
                  borderLeftWidth: '3px',
                  borderLeftColor: '#009fe3',
                  backgroundColor: isExpanded
                    ? 'rgba(0, 159, 227, 0.08)'
                    : 'transparent',
                }}
                onClick={() => toggleCard(index)}
                onMouseEnter={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.borderColor = '#009fe3';
                    e.currentTarget.style.backgroundColor =
                      'rgba(0, 159, 227, 0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) {
                    e.currentTarget.style.borderColor = '#d4d0ca';
                    e.currentTarget.style.borderLeftColor = '#009fe3';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between p-6 pb-4">
                  <div className="flex items-center gap-4">
                    <h3
                      className="text-base font-medium uppercase leading-tight"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: '#1a1a1a',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <ChevronDown
                    size={18}
                    className="mt-1 shrink-0 transition-transform duration-300"
                    style={{
                      color: '#009fe3',
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </div>

                {/* Description */}
                <p
                  className="px-6 pb-4 leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: '#8a8580',
                    fontSize: '14px',
                  }}
                >
                  {service.description}
                </p>

                {/* Expandable Sub-services */}
                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? '420px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <ul className="border-t px-6 py-4" style={{ borderColor: '#e8e4de' }}>
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 py-1.5"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: '#555555',
                          fontSize: '14px',
                        }}
                      >
                        <span
                          className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: '#009fe3' }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
