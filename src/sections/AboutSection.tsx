import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutSection() {
  const leftRef = useScrollReveal<HTMLDivElement>({
    translateX: -30,
    duration: 0.7,
  });
  const rightRef = useScrollReveal<HTMLDivElement>({
    translateX: 30,
    duration: 0.7,
    delay: 0.15,
  });

  return (
    <section
      id="about"
      className="relative"
      style={{
        backgroundColor: '#f5f3ef',
        marginTop: '-80px',
        paddingTop: '160px',
        paddingBottom: '100px',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-16 md:grid-cols-[55%_45%]">
          {/* Left Column */}
          <div ref={leftRef}>
            <p
              className="mb-4 text-xs uppercase tracking-[2px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
            >
              Sobre nosotros
            </p>

            <h2
              className="mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1a1a1a' }}
            >
              Impulsando operaciones con criterio t&eacute;cnico
            </h2>

            <p
              className="mb-8 text-base leading-[1.7]"
              style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a', fontSize: '17px' }}
            >
              IMANTEK es una empresa colombiana especializada en ingenier&iacute;a, mantenimiento y tecnolog&iacute;a industrial. Acompa&ntilde;amos a empresas, comercios y clientes residenciales con soluciones t&eacute;cnicas de alto impacto. Respondemos ante cada desaf&iacute;o con criterio, seguridad y ejecuci&oacute;n en campo. Nuestro equipo combina experiencia pr&aacute;ctica y conocimiento t&eacute;cnico para garantizar operaciones continuas y confiables.
            </p>

            {/* Mission / Vision Cards */}
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex-1 border p-6" style={{ borderColor: '#d4d0ca' }}>
                <h3
                  className="mb-3 text-base font-medium uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#009fe3' }}
                >
                  Misi&oacute;n
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#8a8580', fontSize: '15px' }}
                >
                  Brindar servicios t&eacute;cnicos integrales con criterio, seguridad y ejecuci&oacute;n eficaz, siendo el aliado estrat&eacute;gico de nuestros clientes en el mantenimiento y la operaci&oacute;n de sus activos cr&iacute;ticos.
                </p>
              </div>

              <div className="flex-1 border p-6" style={{ borderColor: '#d4d0ca' }}>
                <h3
                  className="mb-3 text-base font-medium uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#009fe3' }}
                >
                  Visi&oacute;n
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#8a8580', fontSize: '15px' }}
                >
                  Ser reconocidos como la empresa de servicios t&eacute;cnicos de mayor confiabilidad y alcance en Colombia, l&iacute;deres en la integraci&oacute;n de mantenimiento, automatizaci&oacute;n y tecnolog&iacute;a.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={rightRef}>
            <img
              src="/images/about-image.png"
              alt="Ingeniero industrial IMANTEK en instalación"
              className="h-auto w-full object-cover"
              style={{ border: '2px solid #d4d0ca', aspectRatio: '3/4' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
