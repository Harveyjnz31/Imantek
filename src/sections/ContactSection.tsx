import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactSection() {
  const leftRef = useScrollReveal<HTMLDivElement>({ translateX: -20, duration: 0.6 });
  const rightRef = useScrollReveal<HTMLDivElement>({ translateX: 20, duration: 0.6, delay: 0.15 });

  return (
    <section
      id="contacto"
      className="border-t"
      style={{
        backgroundColor: '#1a1a1a',
        borderColor: '#333333',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-2">
        {/* Left Column */}
        <div ref={leftRef}>
          <p
            className="mb-4 text-xs uppercase tracking-[2px]"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
          >
            Hablemos
          </p>
          <h2
            className="mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
          >
            ¿Listo para optimizar sus operaciones?
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: '#aaaaaa', fontSize: '17px' }}
          >
            Contacte a nuestro equipo de ingeniería y reciba una propuesta técnica personalizada sin costo.
          </p>
          <a
            href="https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#007fb8]"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              backgroundColor: '#009fe3',
            }}
          >
            Solicitar cotización
          </a>
        </div>

        {/* Right Column - Contact Details */}
        <div ref={rightRef} className="md:mt-0 mt-12">
          <div className="mb-7">
            <p
              className="mb-2 text-xs uppercase tracking-[2px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
            >
              Sitio web
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#cccccc', fontSize: '16px' }}>
              imantek.com.co
            </p>
          </div>

          <div className="mb-7">
            <p
              className="mb-2 text-xs uppercase tracking-[2px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
            >
              Correo electrónico
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#cccccc', fontSize: '16px' }}>
              Imanteksas@gmail.com
            </p>
          </div>

          <div className="mb-7">
            <p
              className="mb-2 text-xs uppercase tracking-[2px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
            >
              Teléfono / WhatsApp
            </p>
            <a
              href="https://wa.me/573181419074"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#009fe3]"
              style={{ fontFamily: "'Inter', sans-serif", color: '#cccccc', fontSize: '16px' }}
            >
              +57 318 141 9074
            </a>
          </div>

          <div>
            <p
              className="mb-2 text-xs uppercase tracking-[2px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#009fe3' }}
            >
              Ubicación
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#cccccc', fontSize: '16px' }}>
              Br. Villa Estrella Transv.54 #80-863,<br />
              Cartagena de Indias, Colombia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
