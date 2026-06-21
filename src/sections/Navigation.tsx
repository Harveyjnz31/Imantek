import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(245, 243, 239, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid #d4d0ca' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold uppercase tracking-[3px] transition-colors duration-300"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: scrolled ? '#1a1a1a' : '#ffffff',
            }}
          >
            IMANTEK
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-normal uppercase tracking-[1.5px] transition-colors duration-300 hover:opacity-70"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: scrolled ? '#1a1a1a' : '#ffffff',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-[5px] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-[2px] w-5 transition-all duration-300"
              style={{
                backgroundColor: scrolled ? '#1a1a1a' : '#ffffff',
                transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
              }}
            />
            <span
              className="block h-[2px] w-5 transition-all duration-300"
              style={{
                backgroundColor: scrolled ? '#1a1a1a' : '#ffffff',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[2px] w-5 transition-all duration-300"
              style={{
                backgroundColor: scrolled ? '#1a1a1a' : '#ffffff',
                transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl font-medium uppercase tracking-[2px] text-white hover:text-[#c4713b] transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
