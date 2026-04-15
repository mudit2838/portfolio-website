'use client';
import { useEffect, useRef } from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { resumeData } from '@/data/resumeData';

function TimelineItem({
  item,
  index,
}: {
  item: (typeof resumeData.experience)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current;
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 0,
        x: isLeft ? -50 : 50,
        duration: 0.8,
        ease: 'power3.out',
      });
    };
    initGsap();
  }, [isLeft]);

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-6 mb-10 ${isLeft ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'}`}
    >
      {/* Spacer */}
      <div className="hidden md:block w-5/12 flex-shrink-0" />

      {/* Dot */}
      <div className="flex-shrink-0 z-10">
        <div className="timeline-dot">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
          </svg>
        </div>
      </div>

      {/* Card */}
      <div className="w-full md:w-5/12 card glow-border group">
        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
          <div>
            <h3 className="font-syne font-bold text-lg text-text-primary group-hover:text-violet-glow transition-colors">
              {item.role}
            </h3>
            <p className="text-sm font-dm text-text-secondary">{item.company}</p>
          </div>
          <div className="text-right">
            <span className="tag text-xs">{item.duration}</span>
            <div className="text-xs font-dm text-text-muted mt-1">{item.type}</div>
          </div>
        </div>
        <ul className="space-y-2 mb-3">
          {item.description.map((d, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-dm text-text-secondary">
              <span className="text-violet-glow mt-1 flex-shrink-0">▸</span>
              {d}
            </li>
          ))}
        </ul>
        {item.certificate && (
          <p className="text-xs font-dm text-text-muted border-t border-border pt-2 mt-2">
            Certificate: <span className="text-violet-glow/70">{item.certificate}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        label="My Journey"
        title="Work"
        highlight="Experience"
        description="Hands-on training and internships that shaped my engineering mindset."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Centre line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-light to-transparent hidden md:block" />

        {resumeData.experience.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
