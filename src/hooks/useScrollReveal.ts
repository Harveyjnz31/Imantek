import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  translateY?: number;
  translateX?: number;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      threshold = 0.15,
      delay = 0,
      duration = 0.6,
      translateY = 40,
      translateX = 0,
      scale = 1,
    } = options;

    el.style.opacity = '0';
    el.style.transform = `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`;
    el.style.transition = `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`;
    el.style.willChange = 'transform, opacity';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) translateX(0) scale(1)';
            el.addEventListener(
              'transitionend',
              () => {
                el.style.willChange = 'auto';
              },
              { once: true }
            );
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
