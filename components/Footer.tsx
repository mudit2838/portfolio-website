
import React from 'react';
import { resumeData } from '../data/resumeData';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
    const { name, socials } = resumeData.personalInfo;
    return (
        <footer className="bg-light-bg-alt dark:bg-dark-bg-alt border-t border-light-border dark:border-dark-border">
            <div className="container mx-auto px-4 py-6 text-center text-light-text-alt dark:text-dark-text-alt">
                <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                     <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                        <LinkedInIcon className="w-6 h-6"/>
                    </a>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                        <GitHubIcon className="w-6 h-6"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
