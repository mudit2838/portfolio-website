'use client';
import { useState } from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { resumeData } from '@/data/resumeData';

const CATEGORIES = ['All', 'Languages', 'Web Development', 'Frameworks & Libraries', 'Databases & Data', 'Cloud & DevOps', 'Tools'];

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? resumeData.skills
    : resumeData.skills.filter((s) => s.category === active);

  return (
    <Section id="skills" className="bg-bg-alt/30">
      <SectionHeader
        label="What I Know"
        title="Technical"
        highlight="Skills"
        description="A curated toolkit of technologies I use to craft modern, scalable applications."
      />

      {/* Category filter tabs */}
      <div className="gsap-reveal flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs font-dm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
              active === cat
                ? 'bg-violet-primary border-violet-primary text-white shadow-violet-md'
                : 'border-border text-text-muted hover:border-violet-primary/50 hover:text-violet-glow'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="gsap-reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filtered.map((skill) => (
          <div
            key={skill.name}
            className="group glow-border bg-bg-card border border-border rounded-2xl p-4 flex flex-col items-center gap-2 text-center cursor-default transition-all duration-300 hover:border-border-light hover:shadow-card-hover hover:-translate-y-1"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
              {skill.icon}
            </span>
            <span className="text-xs font-dm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200 leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="gsap-reveal mt-12 flex flex-wrap justify-center gap-4">
        {CATEGORIES.slice(1).map((cat) => (
          <div key={cat} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-violet-primary/60" />
            <span className="text-xs font-dm text-text-muted">{cat}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
