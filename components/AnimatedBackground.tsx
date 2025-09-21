import React, { useEffect } from 'react';

const AnimatedBackground: React.FC = () => {
  useEffect(() => {
    const gsap = (window as any).gsap;
    if (typeof gsap === 'function') {
        document.querySelectorAll('.blob').forEach(blob => {
            gsap.to(blob, {
                x: () => `random(-50, 50)vw`,
                y: () => `random(-50, 50)vh`,
                scale: () => `random(0.5, 2)`,
                rotation: () => `random(0, 360)`,
                duration: () => `random(8, 16)`,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            });
        });
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-30 mix-blend-multiply filter blur-3xl blob"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-800 rounded-full opacity-30 mix-blend-multiply filter blur-3xl blob"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-800 rounded-full opacity-30 mix-blend-multiply filter blur-3xl blob"></div>
    </div>
  );
};

export default AnimatedBackground;