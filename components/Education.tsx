
import React from 'react';
import { resumeData } from '../data/resumeData';
import Section from './Section';
import { GraduationCapIcon } from './Icons';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-light-text dark:text-dark-text">Education</h3>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="bg-light-bg-alt dark:bg-dark-bg-alt p-6 rounded-lg shadow-md">
                 <p className="text-sm text-light-text-alt dark:text-dark-text-alt">{edu.period}</p>
                <h4 className="font-bold text-lg text-light-text dark:text-dark-text">{edu.degree}</h4>
                <p className="text-md text-light-text-alt dark:text-dark-text-alt">{edu.institution}</p>
                <p className="text-sm font-semibold text-light-primary dark:text-dark-primary mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
           <h3 className="text-2xl font-semibold mb-6 text-center text-light-text dark:text-dark-text">Certifications</h3>
           <div className="space-y-6">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="bg-light-bg-alt dark:bg-dark-bg-alt p-6 rounded-lg shadow-md">
                 <p className="text-sm text-light-text-alt dark:text-dark-text-alt">{cert.duration}</p>
                <h4 className="font-bold text-lg text-light-text dark:text-dark-text">{cert.role}</h4>
                <p className="text-md text-light-text-alt dark:text-dark-text-alt">{cert.company}</p>
                 <p className="text-xs mt-2 text-light-text-alt/70 dark:text-dark-text-alt/70">Cert: {cert.certificate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
