import React, { useRef, useEffect } from 'react';
import { resumeData } from '../data/resumeData';
import Section from './Section';

const SkillCard: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div
      className="skill-card bg-light-bg-alt dark:bg-dark-bg-alt p-4 rounded-lg shadow-md flex items-center justify-center"
    >
      <p className="text-md font-medium text-center text-light-text dark:text-dark-text">{name}</p>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(resumeData.skills.map(skill => skill.category)));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    gsap.registerPlugin((window as any).ScrollTrigger);

    const container = containerRef.current;
    if (container) {
       // Target all skill cards and animate them with a stagger effect
       gsap.from(container.querySelectorAll('.skill-card'), {
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    // Note: The parent Section component handles the title animation.
    // We are adding more specific animations for the skill cards here.
    <Section id="skills" title="Technical Skills">
      <div ref={containerRef} className="space-y-10">
        {categories.map(category => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-center text-light-text-alt dark:text-dark-text-alt">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {resumeData.skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <SkillCard key={skill.name} name={skill.name} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;