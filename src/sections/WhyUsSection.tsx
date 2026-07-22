import { useEffect, useRef } from 'react';
import { Puzzle, HardHat, Shield, Compass } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const differentiators = [
  {
    icon: Puzzle,
    title: 'Solución 360°',
    description: 'Un solo proveedor para múltiples disciplinas técnicas: eléctrica, mecánica, TI e instrumentación.',
  },
  {
    icon: HardHat,
    title: 'Ejecución en campo',
    description: 'Presencia directa en el lugar de trabajo con técnicos calificados y equipamiento adecuado.',
  },
  {
    icon: Shield,
    title: 'Seguridad primero',
    description: 'Protocolos de seguridad industrial en cada intervención. Cumplimiento normativo garantizado.',
  },
  {
    icon: Compass,
    title: 'Criterio técnico',
    description: 'Diagnóstico preciso antes de actuar. Soluciones sostenibles, no parches temporales.',
  },
];

const opportunities = [
  {
    title: 'Creciente demanda',
    text: 'La industria y el comercio en Colombia incrementan su inversión en mantenimiento preventivo y automatización para reducir costos operativos y tiempos de parada.',
  },
  {
    title: 'Transformación digital',
    text: 'Las empresas buscan integrar IoT, SCADA y automatización para mejorar su competitividad, creando oportunidad para proveedores con capacidad multidisciplinaria.',
  },
  {
    title: 'Déficit de proveedores integrales',
    text: 'La mayoría de los proveedores son especialistas en una sola disciplina. IMANTEK cubre múltiples frentes, reduciendo la complejidad logística del cliente.',
  },
  {
    title: 'Eficiencia energética',
    text: 'La transición hacia energías más eficientes abre nuevas verticales de negocio donde IMANTEK puede ofrecer soluciones de alto valor.',
  },
];

export default function WhyUsSection() {
  const headingRef = useScrollReveal<HTMLDivElement>({ translateY: 30 });
  const cardsRef = useRef<HTMLDivElement>(null);
  const oppRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.diff-card');
    cards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      htmlCard.style.opacity = '0';
      htmlCard.style.transform = 'translateY(30px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetCards = entry.target.querySelectorAll('.diff-card');
            targetCards.forEach((card, i) => {
              const htmlCard = card as HTMLElement;
              setTimeout(() => {
                htmlCard.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
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

  useEffect(() => {
    const el = oppRef.current;
    if (!el) return;

    const blocks = el.querySelectorAll('.opp-block');
    blocks.forEach((block) => {
      const htmlBlock = block as HTMLElement;
      htmlBlock.style.opacity = '0';
      htmlBlock.style.transform = 'translateY(30px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetBlocks = entry.target.querySelectorAll('.opp-block');
            targetBlocks.forEach((block, i) => {
              const htmlBlock = block as HTMLElement;
              setTimeout(() => {
                htmlBlock.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                htmlBlock.style.opacity = '1';
                htmlBlock.style.transform = 'translateY(0)';
              }, i * 80);
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
      id="porque"
      style={{ backgroundColor: '#1a1a1a', paddingTop: '100px', paddingBottom: '100px' }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Diferenciadores */}
        <div ref={headingRef} className="mb-12">
          <h2
            className="text-3xl font-medium uppercase leading-[1.15] sm:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
          >
            ¿Por qué elegir IMANTEK?
          </h2>
        </div>

        <div ref={cardsRef} className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="diff-card border p-8 transition-all duration-300 hover:border-[#009fe3]"
                style={{ borderColor: '#333333' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 159, 227, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Icon size={40} style={{ color: '#009fe3' }} strokeWidth={1.2} />
                <h3
                  className="mb-3 mt-5 text-lg font-medium uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
                >
                  {diff.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#aaaaaa', fontSize: '15px' }}
                >
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Oportunidad de mercado */}
        <div
          className="border-t pt-16"
          style={{ borderColor: '#333333' }}
        >
          <p
            className="mb-4 text-xs uppercase tracking-[2px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
          >
            Contexto estratégico
          </p>
          <h3
            className="mb-8 text-2xl font-medium uppercase sm:text-3xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
          >
            Oportunidad de mercado
          </h3>

          <div ref={oppRef} className="grid gap-8 sm:grid-cols-2">
            {opportunities.map((opp) => (
              <div key={opp.title} className="opp-block">
                <h4
                  className="mb-2 text-base font-medium uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
                >
                  {opp.title}
                </h4>
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#aaaaaa', fontSize: '15px' }}
                >
                  {opp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
