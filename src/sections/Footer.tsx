import ParticleField from './ParticleField';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        backgroundColor: '#1a1a1a',
        borderColor: '#333333',
      }}
    >
      {/* Particle Field Background */}
      <ParticleField />

      {/* Content */}
      <div
        className="relative z-[1] mx-auto max-w-[1200px] px-6"
        style={{ paddingTop: '80px', paddingBottom: '40px' }}
      >
        <div className="mb-16 grid gap-10 sm:grid-cols-3">
          {/* Left - Brand */}
          <div>
            <h3
              className="mb-2 text-3xl font-bold uppercase tracking-[4px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}
            >
              IMANTEK
            </h3>
            <p
              className="text-sm"
              style={{ fontFamily: "'Inter', sans-serif", color: '#666666' }}
            >
              Ingeniería · Mantenimiento · Tecnología
            </p>
          </div>

          {/* Center - Social */}
          <div>
            <p
              className="mb-4 text-xs uppercase tracking-[2px]"
              style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#c4713b' }}
            >
              Síguenos
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/imanteksas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] transition-colors hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Imantek-SAS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] transition-colors hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Facebook
              </a>
              <a
                href="https://wa.me/573181419074"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] transition-colors hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Copyright */}
          <div className="sm:text-right">
            <p
              className="text-sm"
              style={{ fontFamily: "'Inter', sans-serif", color: '#666666' }}
            >
              © 2025 IMANTEK S.A.S.<br />
              Colombia · imantek.com.co
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: '#333333' }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'Inter', sans-serif", color: '#666666' }}
          >
            © 2025 IMANTEK S.A.S. · Colombia · imantek.com.co
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: '#555555' }}
          >
            Brochure Corporativo 2025–2027
          </p>
        </div>
      </div>
    </footer>
  );
}
