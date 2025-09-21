import React from 'react';
import { resumeData } from '../data/resumeData';
import Section from './Section';

const ProjectCard: React.FC<{ project: typeof resumeData.projects[0] }> = ({ project }) => {
  return (
    <div
      className="bg-light-bg-alt dark:bg-dark-bg-alt p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl"
    >
      <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text">{project.name}</h3>
      <p className="text-light-text-alt dark:text-dark-text-alt flex-grow mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map(tech => (
          <span key={tech} className="bg-light-primary/10 text-light-primary dark:bg-dark-primary/20 dark:text-dark-primary text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;