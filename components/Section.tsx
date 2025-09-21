import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    gsap.registerPlugin((window as any).ScrollTrigger);

    const sectionElement = sectionRef.current;
    const contentElement = contentRef.current;

    if (sectionElement && contentElement) {
       gsap.from(contentElement.children, {
        scrollTrigger: {
          trigger: sectionElement,
          start: 'top 80%', // Animation starts when the top of the section is 80% down the viewport
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text">
          {title}
        </h2>
        <div ref={contentRef}>{children}</div>
      </div>
    </section>
  );
};

export default Section;