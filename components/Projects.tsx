'use client';
import { useState } from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import { resumeData } from '@/data/resumeData';

function ProjectCard({ project, featured }: { project: (typeof resumeData.projects)[0]; featured?: boolean }) {
  return (
    <div
      className={`group glow-border card flex flex-col h-full transition-all duration-300 ${
        featured ? 'border-violet-primary/30' : ''
      }`}
    >
      {/* Top bar accent */}
      <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-violet-primary via-violet-glow to-transparent mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-violet-muted/50 border border-violet-primary/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-violet-glow" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>
        <div className="flex items-center gap-2">
          {featured && (
            <span className="text-xs font-dm font-semibold text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
              ⭐ Featured
            </span>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-bg-alt border border-border hover:border-violet-primary flex items-center justify-center text-text-muted hover:text-violet-glow transition-all duration-200"
              aria-label="Live Demo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-bg-alt border border-border hover:border-violet-primary flex items-center justify-center text-text-muted hover:text-violet-glow transition-all duration-200"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <h3 className="font-syne font-bold text-lg text-text-primary group-hover:text-violet-glow transition-colors duration-200 mb-2">
        {project.name}
      </h3>
      <p className="font-dm text-text-secondary text-sm leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = resumeData.projects.filter((p) => p.featured);
  const rest = resumeData.projects.filter((p) => !p.featured);
  const displayed = showAll ? resumeData.projects : featured;

  return (
    <Section id="projects" className="bg-bg-alt/30">
      <SectionHeader
        label="What I've Built"
        title="My"
        highlight="Projects"
        description="A collection of applications showcasing my full-stack skills and problem-solving approach."
      />

      <div className="gsap-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((project) => (
          <ProjectCard key={project.name} project={project} featured={project.featured} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="gsap-reveal text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-outline"
          >
            {showAll ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
                Show Less
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                Show All {resumeData.projects.length} Projects
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
}
