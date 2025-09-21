import React, { useEffect, useRef } from 'react';
import { resumeData } from '../data/resumeData';
import Section from './Section';
import { BriefcaseIcon } from './Icons';

// A dedicated component for each timeline item to encapsulate its animation and layout logic.
const TimelineItem: React.FC<{ item: typeof resumeData.experience[0]; index: number }> = ({ item, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Determine if the item should be on the left or right side of the timeline.
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const gsap = (window as any).gsap;
    gsap.registerPlugin((window as any).ScrollTrigger);
    
    const element = itemRef.current;
    if (element) {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            x: isLeft ? -50 : 50,
            duration: 0.8,
            ease: 'power3.out',
        });
    }
  }, [isLeft]);


  return (
    <div
      ref={itemRef}
      // Apply flex-row-reverse for left-aligned items to alter the visual order.
      className={`mb-8 flex justify-between ${isLeft ? 'flex-row-reverse' : ''} items-center w-full`}
    >
      {/* This empty div acts as a spacer to push the content to one side. */}
      <div className="order-1 w-5/12"></div>
      
      {/* The circular icon in the center of the timeline. */}
      <div className="z-20 flex items-center order-1 bg-light-primary shadow-xl w-8 h-8 rounded-full">
        <BriefcaseIcon className="w-5 h-5 text-white mx-auto" />
      </div>

      {/* The main content card for the experience item. */}
      <div className="order-1 bg-light-bg-alt dark:bg-dark-bg-alt rounded-lg shadow-xl w-5/12 px-6 py-4">
        <p className="text-sm font-medium text-light-primary dark:text-dark-primary">{item.duration}</p>
        <h3 className="mb-2 font-bold text-light-text dark:text-dark-text text-lg">{item.role}</h3>
        <p className="text-sm font-semibold text-light-text-alt dark:text-dark-text-alt mb-3">{item.company}</p>
        <ul className="list-disc list-inside text-sm text-light-text-alt dark:text-dark-text-alt space-y-1">
          {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
        </ul>
        {item.certificate && <p className="text-xs mt-2 text-light-text-alt/70 dark:text-dark-text-alt/70">Cert: {item.certificate}</p>}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    // The Section component provides the overall container and title animation
    <Section id="experience" title="Experience">
       <div className="relative wrap overflow-hidden p-10 h-full">
        {/* The central vertical line of the timeline. */}
        <div className="absolute border-opacity-20 border-light-border dark:border-dark-border h-full border" style={{left: '50%'}}></div>
        
        {/* Map over the experience data and render a TimelineItem for each entry. */}
        {resumeData.experience.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;