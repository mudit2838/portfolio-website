
export interface Link {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  tagline: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Web Development' | 'Frameworks & Libraries' | 'Databases & Data' | 'Cloud & DevOps' | 'Tools';
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  certificate?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Project {
  name: string;
  techStack: string[];
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certifications: Experience[];
}
