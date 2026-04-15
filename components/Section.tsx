'use client';
import { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const el = ref.current;
      if (!el) return;

      const children = el.querySelectorAll('.gsap-reveal');
      gsap.from(children, {
        scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0,
        y: 40,
        duration: 0.75,
        stagger: 0.15,
        ease: 'power3.out',
      });
    };
    initGsap();
  }, []);

  return (
    <section id={id} ref={ref} className={`relative py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
