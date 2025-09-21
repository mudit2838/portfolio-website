import React, { useEffect } from 'react';
import { resumeData } from '../data/resumeData';

const Hero: React.FC = () => {
  useEffect(() => {
    const gsap = (window as any).gsap;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-name', { y: '100%', opacity: 0, duration: 1 })
      .from('.hero-title', { y: '100%', opacity: 0, duration: 1 }, "-=0.8")
      .from('.hero-tagline', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from('.hero-buttons .btn', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.4");
      
  }, []);

  const { name, title, tagline } = resumeData.personalInfo;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-light-text dark:text-dark-text leading-tight mb-4 overflow-hidden">
            <span className="hero-name inline-block">{name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-light-primary dark:text-dark-primary mb-6 overflow-hidden">
            <span className="hero-title inline-block">{title}</span>
          </h2>
          <p className="hero-tagline text-lg md:text-xl text-light-text-alt dark:text-dark-text-alt max-w-2xl mx-auto mb-8">
            {tagline}
          </p>
          <div className="hero-buttons flex justify-center space-x-4">
            <a
              href="#contact"
              className="btn bg-light-primary hover:bg-light-primary-hover text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-light-bg-alt dark:bg-dark-bg-alt text-light-primary dark:text-dark-primary border border-light-primary dark:border-dark-primary font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;