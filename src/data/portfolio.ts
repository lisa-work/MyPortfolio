import { Project, Experience, Certification, Award, Language, SocialLink, FrontendFramework, BackendFramework, Database, DevOps, AuthSecurity, About } from '../types';
import SecondMat from '../assets/SecondMat.jpg';
import Productivity from '../assets/Productivity.jpg';
import ArcadeGame from '../assets/ArcadeGame.jpg';

import { TbBrandTypescript } from "react-icons/tb";
import { SiJavascript, SiPython, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaRegLightbulb, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiVite 
} from "react-icons/si";

import { 
  SiNodedotjs, 
  SiExpress 
} from "react-icons/si";
import { TbServer } from "react-icons/tb";

import { 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase 
} from "react-icons/si";

import { 
  SiGithub, 
  SiVercel, 
  SiRender
} from "react-icons/si";

import { 
  SiJsonwebtokens, 
  SiAuth0 
} from "react-icons/si";
import { TbLock } from "react-icons/tb";

export const projects: Project[] = [
  {
    id: '1',
    title: 'Productivity Manager & Time Tracker Web App',
    description: 'A full-stack platform for managing tasks, tracking time, and boosting productivity. Users can create and assign tasks, log time with integrated timers, generate interactive reports, and visualize schedules on a calendar. Built with React, Vite, Tailwind CSS, Node.js, and MongoDB, featuring secure JWT authentication and a responsive, user-friendly design.',
    techStack: ['JavaScript', 'React.js', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Axios', 'React Router', 'Recharts', 'react-date-range', 'react-big-calendar', 'JWT Authentication', 'Multer (file uploads)', 'Moment.js', 'Render', 'GitHub'],
    liveDemo: 'https://productivity-management-frontend.onrender.com/login',
    github: 'https://github.com/lisa-work/Productivity-Web',
    image: Productivity,
    featured: true
  },
  {
    id: '2',
    title: 'SecondMat – Secondhand Marketplace Web App',
    description: 'A full-stack web app enabling secure buying and selling of secondhand items within a community. Built with React, Tailwind CSS, Firebase, Drizzle ORM, and Clerk authentication. Features include image uploads, rich item details, soft-delete functionality, dynamic search and filters, and a fully responsive UI for seamless browsing across devices.',
    techStack: ['JavaScript', 'React.js', 'Tailwind CSS', 'Firebase', 'Drizzle ORM', 'Clerk Authentication', 'Vercel', 'GitHub'],
    liveDemo: 'https://secondhand-marketplace-web-app-8pnt.vercel.app/home',
    github: 'https://github.com/lisa-work/Secondhand-Marketplace-Web',
    image: SecondMat,
  },
  {
    id: '3',
    title: "2D Arcade Game – Python & Pygame",
    description: 'A fast-paced 2D arcade game where players dodge enemies and collect points to reach high scores. Built from scratch using Python and Pygame, featuring custom game loops, modular OOP design, smooth animations, and optimized performance.',
    techStack: ['Python', 'Pygame', 'OOP'],
    liveDemo: 'https://www.youtube.com/watch?v=ubD66YDgBOI',
    github: 'https://github.com/lisa-work/PygameFirstProject',
    image: ArcadeGame,
  },
];

export const workExperience: Experience[] = [
  {
    id: '2',
    company: 'York University',
    role: 'Research and Data Entry Assistant',
    period: '2025 - Present',
    description: 'Supported research initiatives by accurately collecting, organizing, and analyzing data to maintain high standards of reliability. Performed meticulous data entry and consistently update databases to ensure information remains precise.'
  },
  {
    id: '1',
    company: 'Outlier',
    role: 'AI Trainer',
    period: '2024 - Present',
    description: 'Contributed to improving AI models by providing high-quality data annotation, evaluating model outputs, and giving detailed feedback to enhance accuracy and performance, ensuring models meet high standards of performance.'
  },
];

export const volunteering: Experience[] = [
  {
    id: '1',
    company: 'iFixit',
    role: 'Technical Writer',
    period: 'Jan 2025 - May 2025',
    description: 'Created clear, step-by-step repair guides for common device issues, combining technical expertise with accessible language to support users of all skill levels.',
    link: 'https://drive.google.com/file/d/1Ih4E3TkVBac2hU6trFzuKVnsxPPfnEMe/view',
  },
  {
    id: '2',
    company: 'York University' ,
    role: 'College Crew Volunteer',
    period: '2024 - 2025',
    description: 'Created a welcoming and inclusive environment at the Community Hub and supported the execution of events such as orientations and co-curricular activities.',
    link: 'https://drive.google.com/file/d/1jqSojx9_NwD_1HOydtedkuaZ6tt4u1zI/view'
  },
  {
    id: '3',
    company: 'York University' ,
    role: 'Tutor Volunteer',
    period: '2024 - 2025',
    description: 'Provided personalized academic support to undergraduate students in Natural Science courses, helping them master complex concepts and strengthen their problem-solving skills.'
  },
  {
    id: '4',
    company: 'Give Love Non-Profit Project',
    role: 'Fundraiser',
    period: '2021 - 2022',
    description: "Developed fundraising initiatives, secured sponsorships, and organized charitable events — raising a total of CAD 4,600 across four events."
  },
  {
    id: '5',
    company: 'YBOX',
    role: 'Translator',
    period: '2021 - 2022',
    description: "Translated and published 24 high-quality articles on topics including self-improvement, science, and education, ensuring technical accuracy and cultural clarity."
  },
  {
    id: '6',
    company: 'AIESEC in Vietnam',
    role: 'Ambassador',
    period: '2021',
    description: "Supported event organization and delivered personalized guidance to over 200 participants, helping them engage with the program's leadership activities."
  },

];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'CompTIA Security+ ce Certification',
    issuer: 'CompTIA',
    date: '2024',
    link: 'https://www.credly.com/badges/bfdde584-b998-4f5d-b7f9-9ddedbcb0fa5/linked_in_profile'
  },
];

export const awards: Award[] = [
  {
    id: '6',
    title: 'Honours. Sessional Academic Achievement List',
    issuer: 'York University',
    date: 'From 2024 to Present',
    description: 'Being recognized on the Faculty of Arts Sessional Academic Achievement List for outstanding academic excellence.',
  },
  {
    id: '5',
    title: 'President\'s International Scholarship of Excellence (PISE) Award',
    issuer: 'York University',
    date: '2023',
    description: 'Being awarded a scholarship worth CAD $45,000 annually, renewable for up to three additional years, totaling CAD $180,000 over four years.',
    link: 'https://drive.google.com/file/d/1OfnqmIpHMe2DHRUJ-HGN9_7TTbQkgZzU/view'
  },
  {
    id: '4',
    title: 'Lester B. Pearson International Scholarship Nomination',
    issuer: 'Willowdale Secondary School',
    date: '2022',
    description: 'Being nominated for the Lester B. Pearson International Scholarship at the University of Toronto, which only accepts 1 student from one high school can be nominated each year.',
    link: 'https://drive.google.com/file/d/11EgsogDKgYg8gRCG4AcghIIC4RUAykIu/view'
  },
  {
    id: '3',
    title: 'Top 15 Projects in Headway Awards 2021',
    issuer: 'Headway',
    date: '2021',
    description: 'Tech Innovators is an educational initiative that empowers Vietnamese high school students (ages 15–18) to explore careers in IT through a series of four interactive workshops. By partnering with top IT corporations, it bridges the gap between classroom learning and real-world skills, giving nearly 400 students per event hands-on experience in coding, networking, and cybersecurity.',
    link: 'https://drive.google.com/file/d/1godHj1nrcT4MUF4fNH15GP-y8VNKT7Hs/view'
  },
  {
    id: '2',
    title: 'Highest Merit-based Academic Scholarship',
    issuer: 'Willowdale Secondary School',
    date: '2021',
    description: 'Merit-based aid towards tuition which is determined by academic performance and achievement, awarded to 1 student each year.',
  },
  {
    id: '1',
    title: 'Full-Ride Academic Scholarship',
    issuer: 'Northland Scholars Academy',
    date: '2019',
    description: 'Merit-based aid towards tuition which is determined by academic performance and achievement, awarded to 1 student each year. Valued at $25,000/year, totaling $100,000 for 4 high-school academic years.',
  },
];

export const languages: Language[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "SQL", icon: SiMysql },
];

export const frontendFrameworks: FrontendFramework[] = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Vite", icon: SiVite },
];

export const backendFrameworks: BackendFramework[] = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Drizzle", icon: TbServer }, // Placeholder server icon
];

export const databases: Database[] = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
];

export const devOpsTools: DevOps[] = [
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
];

export const AuthAndSecurity: AuthSecurity[] = [
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "bcrypt.js", icon: TbLock }, // Generic lock icon
  { name: "OAuth2", icon: SiAuth0 },   // Auth0 as representative icon
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/lisa-work', icon: '🐙' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ngoc-anh-thu-nguyen-yorku/', icon: '💼' },
  { platform: 'Facebook', url: 'https://www.facebook.com/ngocanhthu.1175/', icon: '📘' },
  { platform: 'Instagram', url: 'https://www.instagram.com/mei_nho/', icon: '📷' }
];

export const aboutme: About[] = [ 
  {
    name: 'Dreamer',
    description: "I believe in transforming bold, unconventional ideas into meaningful digital experiences. Rather than waiting for opportunities, I proactively turn my visions into reality. My curiosity and passion for innovation drive me to explore how technology can positively impact lives and foster authentic connections.",
    icon: FaRegLightbulb,
  },
  {
    name: 'Learner',
    description: "To bring these dreams to life, I focus on building strong foundations in knowledge and skills. After transitioning from Business to Information Technology at York University in September 2024 and diving into web technologies in May 2025, I’ve dedicated myself to continuous learning. Despite the challenges, I stay driven by my passion for Web Development, Cybersecurity, and AI.",
    icon: FaGraduationCap,
  },
  {
    name: 'Do-er',
    description: "From hackathons to independent projects, I thrive on bringing ideas to life through hands-on creation. I love crafting solutions that blend functionality with thoughtful design and strong security, always aiming to deliver impactful, user-centered experiences that make a difference.",
    icon: FaLaptopCode,
  },
];
