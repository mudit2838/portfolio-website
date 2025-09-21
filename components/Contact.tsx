
import React from 'react';
import { resumeData } from '../data/resumeData';
import Section from './Section';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Contact: React.FC = () => {
  const { email, socials } = resumeData.personalInfo;
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-light-text-alt dark:text-dark-text-alt mb-8">
          I'm currently open to new opportunities. Feel free to reach out if you have a question or just want to say hi — my inbox is always open!
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block bg-light-primary hover:bg-light-primary-hover text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg text-lg"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
           <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-colors">
              <LinkedInIcon className="w-8 h-8"/>
           </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-light-text-alt dark:text-dark-text-alt hover:text-light-primary dark:hover:text-dark-primary transition-colors">
              <GitHubIcon className="w-8 h-8"/>
           </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
