import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = parent.clientWidth + 'px';
      canvas.style.height = parent.clientHeight + 'px';
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    const colors = ['#ffffff', '#cccccc', '#aaaaaa', '#888888'];
    const particleCount = 2000;
    const G = 120.0;

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (canvas?.clientWidth || 0),
        y: Math.random() * (canvas?.clientHeight || 0),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 0.5 + Math.random() * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.2 + Math.random() * 0.5,
      });
    }

    let clickForceX = 0;
    let clickForceY = 0;
    let clickActive = false;

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      clickForceX = e.clientX - rect.left;
      clickForceY = e.clientY - rect.top;
      clickActive = true;
      setTimeout(() => {
        clickActive = false;
      }, 500);
    };
    canvas.addEventListener('click', handleClick);

    // Intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    function animate() {
      frameRef.current = requestAnimationFrame(animate);

      if (!isVisibleRef.current || !ctx || !canvas) return;

      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const cx = cw / 2;
      const cy = ch / 2;

      // Fade trails
      ctx.fillStyle = 'rgba(26, 26, 26, 0.15)';
      ctx.fillRect(0, 0, cw, ch);

      for (const p of particles) {
        // Gravity well at center
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 1;
        const force = G / (dist * dist);

        p.vx += (dx / dist) * force * 0.01;
        p.vy += (dy / dist) * force * 0.01;

        // Click force
        if (clickActive) {
          const cdx = clickForceX - p.x;
          const cdy = clickForceY - p.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy) + 1;
          const cforce = 200 / (cdist * cdist);
          p.vx -= (cdx / cdist) * cforce * 0.1;
          p.vy -= (cdy / cdist) * cforce * 0.1;
        }

        // Damping
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = cw;
        if (p.x > cw) p.x = 0;
        if (p.y < 0) p.y = ch;
        if (p.y > ch) p.y = 0;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }
    animate();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  );
}
