import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const phases = [
  {
    year: '2025',
    title: 'Consolidación',
    items: [
      'Estructurar portafolio de servicios completo',
      'Captar primeros clientes ancla industriales y comerciales',
      'Establecer procesos operativos y de calidad',
      'Presencia digital sólida',
    ],
  },
  {
    year: '2026',
    title: 'Crecimiento',
    items: [
      'Ampliar cartera de clientes en 3+ sectores',
      'Lanzar servicio de contratos de mantenimiento recurrente',
      'Incorporar capacidades en automatización e IoT',
      'Crecer equipo técnico especializado',
    ],
  },
  {
    year: '2027',
    title: 'Expansión',
    items: [
      'Presencia en múltiples ciudades de Colombia',
      'Plataforma propia de monitoreo y gestión de activos',
      'Alianzas estratégicas con fabricantes y distribuidores',
      'Certificaciones industriales y de calidad',
    ],
  },
];

export default function RoadmapSection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    const line = lineRef.current;
    if (!el || !line) return;

    const badges = el.querySelectorAll('.year-badge');
    const lists = el.querySelectorAll('.phase-list');

    badges.forEach((badge) => {
      const htmlBadge = badge as HTMLElement;
      htmlBadge.style.opacity = '0';
      htmlBadge.style.transform = 'scale(0.8)';
    });

    lists.forEach((list) => {
      const htmlList = list as HTMLElement;
      htmlList.style.opacity = '0';
      htmlList.style.transform = 'translateY(20px)';
    });

    line.style.transform = 'scaleX(0)';
    line.style.transformOrigin = 'left';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate line
            setTimeout(() => {
              line.style.transition = 'transform 1s ease-out';
              line.style.transform = 'scaleX(1)';
            }, 200);

            // Animate badges
            badges.forEach((badge, i) => {
              const htmlBadge = badge as HTMLElement;
              setTimeout(() => {
                htmlBadge.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                htmlBadge.style.opacity = '1';
                htmlBadge.style.transform = 'scale(1)';
              }, 400 + i * 200);
            });

            // Animate lists
            lists.forEach((list, i) => {
              const htmlList = list as HTMLElement;
              setTimeout(() => {
                htmlList.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                htmlList.style.opacity = '1';
                htmlList.style.transform = 'translateY(0)';
              }, 600 + i * 150);
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
      id="roadmap"
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
            Hoja de ruta
          </p>
          <h2
            className="text-3xl font-medium uppercase leading-[1.15] sm:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
          >
            Metas estratégicas 2025 – 2027
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Horizontal line */}
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-[22px] hidden h-[1px] md:block"
            style={{ backgroundColor: '#d4d0ca' }}
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {phases.map((phase) => (
              <div key={phase.year}>
                {/* Year badge */}
                <div
                  className="year-badge mb-6 inline-block border px-4 py-1.5 text-sm"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    color: '#009fe3',
                    borderColor: '#009fe3',
                  }}
                >
                  {phase.year}
                </div>

                {/* Phase title */}
                <h3
                  className="mb-4 text-lg font-medium uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
                >
                  {phase.title}
                </h3>

                {/* Bullet list */}
                <ul className="phase-list space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", color: '#8a8580', fontSize: '15px' }}
                    >
                      <span
                        className="mt-2 inline-block h-[2px] w-3 shrink-0"
                        style={{ backgroundColor: '#009fe3' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
