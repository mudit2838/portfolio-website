
import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Mudit Kumar",
    title: "Full Stack Developer",
    email: "Muditchauhan28@gmail.com",
    phone: "(+91) 9458073803",
    tagline: "Aspiring software engineer with a passion for building scalable web applications and solving complex problems.",
    socials: {
      github: "https://github.com/muditkumar",
      linkedin: "https://linkedin.com/in/muditkumar",
    },
  },
  skills: [
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C/C++", category: "Languages" },
    { name: "Rust", category: "Languages" },
    { name: "JavaScript (ES6+)", category: "Web Development" },
    { name: "HTML5", category: "Web Development" },
    { name: "CSS3", category: "Web Development" },
    { name: "React.js", category: "Frameworks & Libraries" },
    { name: "Node.js", category: "Frameworks & Libraries" },
    { name: "Express.js", category: "Frameworks & Libraries" },
    { name: "MERN Stack", category: "Frameworks & Libraries" },
    { name: "TailwindCSS", category: "Frameworks & Libraries" },
    { name: "MongoDB", category: "Databases & Data" },
    { name: "MySQL", category: "Databases & Data" },
    { name: "Pandas/NumPy", category: "Databases & Data" },
    { name: "Oracle Cloud (OCI)", category: "Cloud & DevOps" },
    { name: "Git & GitHub", category: "Cloud & DevOps" },
    { name: "RESTful APIs", category: "Web Development" },
    { name: "Visual Studio Code", category: "Tools" },
    { name: "Microsoft Office", category: "Tools" },
  ],
  experience: [
    {
      role: "Java-Core Trainee",
      company: "XTRUDE Engineers Pvt. Ltd.",
      duration: "Sep 2023",
      description: [
        "Completed hands-on training in Java.",
        "Built a Scientific Calculator application.",
        "Learned Object-Oriented Programming, JDBC, and File handling.",
      ],
      certificate: "XEN0923RV111",
    },
    {
      role: "Web Designing Trainee",
      company: "XTRUDE Engineers Pvt. Ltd.",
      duration: "Oct 2023",
      description: [
        "Designed and developed responsive web pages using HTML, CSS, and JavaScript.",
        "Implemented clean UI layouts and cross-device compatibility for improved accessibility.",
      ],
      certificate: "XEN1024RV316",
    },
    {
      role: "React.js Trainee",
      company: "XTRUDE Engineers Pvt. Ltd.",
      duration: "Aug 2025 - Sep 2025",
      description: [
        "Completed a 3-week industrial training on React.js.",
        "Learned about declarative, component-based library features.",
        "Focused on UI development and component management.",
      ],
      certificate: "XEN0925RV126",
    },
  ],
  education: [
    {
      degree: "B. Tech in Computer Science & Engineering",
      institution: "RV institute of Technology, Bijnor",
      period: "2022 - 2026",
      details: "CGPA: 8.0",
    },
    {
      degree: "XII (CBSE)",
      institution: "Parker Public Senior Secondary School, Budhanpur",
      period: "2022",
      details: "Percentage: 75.2%",
    },
    {
      degree: "X (CBSE)",
      institution: "Parker Public Senior Secondary School, Budhanpur",
      period: "2020",
      details: "Percentage: 79.4%",
    },
  ],
  certifications: [
    {
      role: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      company: "Oracle University",
      duration: "Valid: Sep 2025 - Sep 2027",
      description: [
        "Gained foundational knowledge of Oracle Cloud Infrastructure (OCI) services, core cloud concepts, and essential cloud architecture principles.",
      ],
      certificate: "102505064OCI25FNDCFA",
    },
    {
      role: "Data Science & Analytics",
      company: "HP LIFE (HP Foundation)",
      duration: "Completed: Aug 2025",
      description: [
        "Learned leading data science and analytics practices, methodologies, and tools.",
        "Acquired essential skills for a career in data science.",
      ],
      certificate: "dfeb6aff-41a0-4242-aef6-ca318de08b83",
    },
    {
      role: "Web Development Course",
      company: "STP Computer Education",
      duration: "Jun 2024 - May 2025",
      description: [
        "Completed a comprehensive 12-month course covering front-end and back-end development.",
      ],
      certificate: "397898",
    },
  ],
  projects: [
    {
      name: "Personal Portfolio Website",
      techStack: ["HTML", "CSS", "JavaScript"],
      description: "A responsive portfolio with a theme toggle, skill section, project showcase, and contact form.",
    },
    {
      name: "To-Do List Application",
      techStack: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
      description: "A full-stack To-Do List app with task CRUD operations and data persistence in MongoDB.",
    },
    {
      name: "Workout Buddy Application",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      description: "A full-stack fitness app to track workouts, set goals, and manage exercise logs, focusing on responsive UI and RESTful API.",
    },
    {
      name: "Weather App",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      description: "Fetches and displays real-time weather data from a public API with a clean and smooth user interface.",
    },
    {
      name: "Password Generator App",
      techStack: ["React.js", "TailwindCSS"],
      description: "A responsive app to generate strong, random passwords with customizable options.",
    },
    {
      name: "Game App",
      techStack: ["React.js", "TailwindCSS"],
      description: "An interactive game with dynamic components, state management, and engaging gameplay logic.",
    },
  ],
};
