import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [theme, toggleTheme] = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect for scrolling behavior (sticky header bg)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations and ScrollTrigger setup
  useEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    const ScrollToPlugin = (window as any).ScrollToPlugin;

    if (!gsap || !ScrollTrigger || !ScrollToPlugin) {
        console.error("GSAP plugins not loaded!");
        return;
    }

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Nav link entrance animation
    gsap.from('.nav-link-desktop', {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power3.out',
      duration: 0.8,
    });
    
    // Active link highlighting on scroll
    navLinks.forEach(link => {
        const target = document.querySelector(link.href);
        if (target) {
            ScrollTrigger.create({
                trigger: target,
                start: "top center",
                end: "bottom center",
                onToggle: self => {
                    if(self.isActive) {
                        setActiveLink(link.href);
                    }
                },
            });
        }
    });

  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const gsap = (window as any).gsap;

    // Immediately update active link for better UX
    setActiveLink(target);
    // Close mobile menu on click
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Animate scroll to section
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target,
        offsetY: 70 // Adjust this value to account for the sticky header height
      },
      ease: 'power2.inOut'
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-bold text-light-primary dark:text-dark-primary">
              MK
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link-desktop px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeLink === link.href 
                        ? 'text-light-primary dark:text-dark-primary' 
                        : 'text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
             <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-light-text-alt dark:text-dark-text-alt hover:bg-light-bg-alt dark:hover:bg-dark-bg-alt transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-light-text-alt dark:text-dark-text-alt hover:bg-light-bg-alt dark:hover:bg-dark-bg-alt"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Panel */}
        {isMenuOpen && (
            <div className="md:hidden py-4">
                <div className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors text-center ${
                                activeLink === link.href 
                                    ? 'bg-light-primary/10 text-light-primary dark:bg-dark-primary/20 dark:text-dark-primary' 
                                    : 'text-light-text dark:text-dark-text hover:bg-light-bg-alt dark:hover:bg-dark-bg-alt'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        )}
      </nav>
    </header>
  );
};

export default Header;