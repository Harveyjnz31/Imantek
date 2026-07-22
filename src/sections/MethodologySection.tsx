import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Análisis exhaustivo del sistema o activo. Identificamos el problema con precisión antes de proponer cualquier intervención.',
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Presentamos un plan de acción claro con alcance, recursos, tiempo y costo definidos para la aprobación del cliente.',
  },
  {
    number: '03',
    title: 'Ejecución',
    description: 'Intervención en campo con personal calificado, equipos adecuados y protocolos de seguridad industrial vigentes.',
  },
  {
    number: '04',
    title: 'Entrega y Seguimiento',
    description: 'Informe técnico detallado, garantía sobre el trabajo realizado y acompañamiento post-servicio.',
  },
];

export default function MethodologySection() {
  const headerRef = useScrollReveal<HTMLDivElement>({ translateY: 30 });
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stepsRef.current;
    const line = lineRef.current;
    if (!el || !line) return;

    const stepEls = el.querySelectorAll('.method-step');
    stepEls.forEach((step) => {
      const htmlStep = step as HTMLElement;
      htmlStep.style.opacity = '0';
      htmlStep.style.transform = 'translateY(30px)';
    });

    line.style.transform = 'scaleX(0)';
    line.style.transformOrigin = 'left';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate line
            setTimeout(() => {
              line.style.transition = 'transform 0.8s ease-out';
              line.style.transform = 'scaleX(1)';
            }, 300);

            // Animate steps
            stepEls.forEach((step, i) => {
              const htmlStep = step as HTMLElement;
              setTimeout(() => {
                htmlStep.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                htmlStep.style.opacity = '1';
                htmlStep.style.transform = 'translateY(0)';
              }, i * 150);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="metodologia"
      className="border-t"
      style={{ backgroundColor: '#f5f3ef', borderColor: '#d4d0ca', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <p
            className="mb-4 text-xs uppercase tracking-[2px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
          >
            Cómo trabajamos
          </p>
          <h2
            className="text-3xl font-medium uppercase leading-[1.15] sm:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
          >
            Nuestra metodología
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connecting line - desktop only */}
          <div
            ref={lineRef}
            className="absolute left-0 right-0 top-[30px] hidden h-[1px] md:block"
            style={{ backgroundColor: '#d4d0ca' }}
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="method-step">
                {/* Number */}
                <div
                  className="mb-4 text-5xl"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-lg font-medium uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#8a8580', fontSize: '15px' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
