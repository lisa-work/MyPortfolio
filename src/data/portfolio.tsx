import {
  Project,
  Experience,
  Certification,
  Award,
  Language,
  SocialLink,
  FrontendFramework,
  BackendFramework,
  Database,
  DevOps,
  AuthSecurity,
  About
} from '../types';

import { TbBrandTypescript } from "react-icons/tb";
import { SiJavascript, SiPython, SiMysql, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiGithub, SiVercel, SiRender, SiJsonwebtokens, SiAuth0 } from "react-icons/si";
import { FaJava, FaRegLightbulb, FaGraduationCap, FaLaptopCode } from "react-icons/fa6";
import { TbServer, TbLock } from "react-icons/tb";

// ✅ Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Productivity Manager & Time Tracker Web App',
    description: 
    <>A full-stack platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">managing tasks, tracking time, and boosting productivity.</span> Users can create and assign tasks, log time with integrated timers, generate interactive reports, and visualize schedules on a calendar. Built with React, Vite, Tailwind CSS, Node.js, and MongoDB, featuring secure JWT authentication and a responsive, user-friendly design.</>,
    techStack: ['JavaScript', 'React.js', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Axios', 'React Router', 'Recharts', 'react-date-range', 'react-big-calendar', 'JWT Authentication', 'Multer (file uploads)', 'Moment.js', 'Render', 'GitHub'],
    liveDemo: 'https://productivity-management-frontend.onrender.com/login',
    github: 'https://github.com/lisa-work/Productivity-Web',
    image: '/Productivity.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'SecondMat – Secondhand Marketplace Web App',
    description: 
    <>A full-stack web app enabling <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">secure buying and selling of secondhand items</span> within a community. Built with React, Tailwind CSS, Firebase, Drizzle ORM, and Clerk authentication. Features include image uploads, rich item details, soft-delete functionality, dynamic search and filters, and a fully responsive UI for seamless browsing across devices.</>,
    techStack: ['JavaScript', 'React.js', 'Tailwind CSS', 'Firebase', 'Drizzle ORM', 'Clerk Authentication', 'Vercel', 'GitHub'],
    liveDemo: 'https://secondhand-marketplace-web-app-8pnt.vercel.app/home',
    github: 'https://github.com/lisa-work/Secondhand-Marketplace-Web',
    image: '/SecondMat.jpg',
  },
  {
    id: '3',
    title: "2D Arcade Game – Python & Pygame",
    description: 
    <>A fast-paced 2D arcade game where players <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">dodge enemies and collect points</span> to reach high scores. Built from scratch using Python and Pygame, featuring custom game loops, modular OOP design, smooth animations, and optimized performance.</>,
    techStack: ['Python', 'Pygame', 'OOP'],
    liveDemo: 'https://www.youtube.com/watch?v=ubD66YDgBOI',
    github: 'https://github.com/lisa-work/PygameFirstProject',
    image: '/ArcadeGame.jpg',
  },
];

// ✅ Work Experience
export const workExperience: Experience[] = [
  {
    id: '2',
    company: 'York University',
    role: 'Research and Data Entry Assistant',
    period: '2025 - Present',
    description: 
    <>Supported research initiatives by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">accurately collecting, organizing, and analyzing data</span> to maintain high standards of reliability. Performed meticulous data entry and consistently update databases to ensure information remains precise.</>
  },
  {
    id: '1',
    company: 'Outlier',
    role: 'AI Trainer',
    period: '2024 - Present',
    description: 
    <>Contributed to improving AI models by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">providing high-quality data annotation, evaluating model outputs, and giving detailed feedback</span> to enhance accuracy and performance, ensuring models meet high standards of performance.</>
  },
];

// ✅ Volunteering
export const volunteering: Experience[] = [
  {
    id: '1',
    company: 'iFixit',
    role: 'Technical Writer',
    period: 'Jan 2025 - May 2025',
    description: 
    <><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Created clear, step-by-step repair guides</span> for common device issues, combining technical expertise with accessible language to support users of all skill levels.</>,
    link: 'https://drive.google.com/file/d/1Ih4E3TkVBac2hU6trFzuKVnsxPPfnEMe/view',
  },
  {
    id: '2',
    company: 'York University',
    role: 'College Crew Volunteer',
    period: '2024 - 2025',
    description: 
    <><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Created a welcoming and inclusive environment</span> at the Community Hub and supported the execution of events such as orientations and co-curricular activities.</>,
    link: 'https://drive.google.com/file/d/1jqSojx9_NwD_1HOydtedkuaZ6tt4u1zI/view'
  },
{
  id: '3',
  company: 'York University',
  role: 'Tutor Volunteer',
  period: '2024 - 2025',
  description: 
  <>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Provided personalized academic support</span> to undergraduate students in Natural Science courses, helping them master complex concepts, improve critical thinking, and strengthen problem-solving skills.
  </>,
},
{
  id: '4',
  company: 'Give Love Non-Profit Project',
  role: 'Fundraiser',
  period: '2021 - 2022',
  description: 
  <>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Developed fundraising initiatives, secured sponsorships, and organized charitable events</span> — raising a total of CAD 4,600 across four events to advocate for underprivileged and marginalized communities.
  </>
},
{
  id: '5',
  company: 'YBOX',
  role: 'Translator',
  period: '2021 - 2022',
  description: 
  <>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Translated and published 24 high-quality articles</span> on topics including self-improvement, science, and education, ensuring technical accuracy and cultural clarity. Adapted complex ideas into accessible language for a young Vietnamese audience.
  </>
},
{
  id: '6',
  company: 'AIESEC in Vietnam',
  role: 'Ambassador',
  period: '2021',
  description: 
  <>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Supported event organization and delivered personalized guidance</span> to over 200 participants. Collaborated with a team to foster an inclusive and inspiring atmosphere that encouraged youth leadership and global citizenship.
  </>
},

];

// ✅ Certifications
export const certifications: Certification[] = [
  {
    id: '1',
    title: 'CompTIA Security+ ce Certification',
    issuer: 'CompTIA',
    date: '2024',
    link: 'https://www.credly.com/badges/bfdde584-b998-4f5d-b7f9-9ddedbcb0fa5/linked_in_profile'
  },
];

// ✅ Awards
export const awards: Award[] = [
  {
    id: '6',
    title: 'Honours. Sessional Academic Achievement List',
    issuer: 'York University',
    date: 'From 2024 to Present',
    description: 
    <>Being recognized on the Faculty of Arts Sessional Academic Achievement List for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">outstanding academic excellence.</span></>,
  },
  {
    id: '5',
    title: "President's International Scholarship of Excellence (PISE) Award",
    issuer: 'York University',
    date: '2023',
    description: 
    <>Awarded CAD $45,000 annually, renewable for up to three additional years, totaling <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CAD $180,000</span> over four years.</>,
    link: 'https://drive.google.com/file/d/1OfnqmIpHMe2DHRUJ-HGN9_7TTbQkgZzU/view'
  },
  {
    id: '4',
    title: 'Lester B. Pearson International Scholarship Nomination',
    issuer: 'Willowdale Secondary School',
    date: '2022',
    description: 
    <>Nominated for the Lester B. Pearson International Scholarship at the University of Toronto, which <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">accepts only one student nomination per high school each year.</span></>,
    link: 'https://drive.google.com/file/d/11EgsogDKgYg8gRCG4AcghIIC4RUAykIu/view'
  },
  {
    id: '3',
    title: 'Top 15 Projects in Headway Awards 2021',
    issuer: 'Headway',
    date: '2021',
    description: 
    <>Tech Innovators is an educational initiative that empowers Vietnamese high school students (ages 15–18) to explore careers in IT through workshops, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">bridging classroom learning with real-world skills and hands-on experiences</span>.</>,
    link: 'https://drive.google.com/file/d/1godHj1nrcT4MUF4fNH15GP-y8VNKT7Hs/view'
  },
  {
    id: '2',
    title: 'Highest Merit-based Academic Scholarship',
    issuer: 'Willowdale Secondary School',
    date: '2021',
    description: 
    <>Merit-based scholarship awarded annually to one student for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">outstanding academic performance.</span></>,
  },
  {
    id: '1',
    title: 'Full-Ride Academic Scholarship',
    issuer: 'Northland Scholars Academy',
    date: '2019',
    description: 
    <>Merit-based scholarship awarded annually to one student, valued at $25,000/year, totaling <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">$100,000</span> over four years.</>
  },
];

// ✅ Languages
export const languages: Language[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: FaJava },
  { name: "SQL", icon: SiMysql },
];

// ✅ Frontend Frameworks
export const frontendFrameworks: FrontendFramework[] = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Vite", icon: SiVite },
];

// ✅ Backend Frameworks
export const backendFrameworks: BackendFramework[] = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Drizzle", icon: TbServer },
];

// ✅ Databases
export const databases: Database[] = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
];

// ✅ DevOps Tools
export const devOpsTools: DevOps[] = [
  { name: "GitHub", icon: SiGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
];

// ✅ Auth & Security
export const AuthAndSecurity: AuthSecurity[] = [
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "bcrypt.js", icon: TbLock },
  { name: "OAuth2", icon: SiAuth0 },
];

// ✅ Social Links
export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/lisa-work', icon: '🐙' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ngoc-anh-thu-nguyen-yorku/', icon: '💼' },
  { platform: 'Facebook', url: 'https://www.facebook.com/ngocanhthu.1175/', icon: '📘' },
  { platform: 'Instagram', url: 'https://www.instagram.com/mei_nho/', icon: '📷' }
];

// ✅ About Me (with TSX support)
export const aboutme: About[] = [
  {
    name: 'Dreamer',
    description: (
      <>
        I believe in transforming bold, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">unconventional</span> ideas into meaningful digital experiences. Rather than waiting for opportunities, I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">proactively</span> turn my visions into reality. My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">curiosity and passion</span> for innovation drive me to explore how technology can positively impact lives and foster authentic connections.
      </>
    ),
    icon: FaRegLightbulb,
  },
  {
    name: 'Learner',
    description: (
      <>
        To bring these dreams to life, I focus on building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">strong foundations</span> in knowledge and skills. After <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">transitioning</span> from Business to Information Technology at York University in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">September 2024</span> and diving into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">web technologies</span> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">May 2025</span>, I’ve dedicated myself to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">continuous learning</span>. Despite challenges, I stay driven by my passion for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Web Development</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cybersecurity</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI</span>.
      </>
    ),
    icon: FaGraduationCap,
  },
  {
    name: 'Do-er',
    description: (
      <>
        From hackathons to independent projects, I thrive on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">bringing ideas to life</span> through hands-on creation. I love crafting solutions that blend <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">functionality</span> with thoughtful design and strong security, always aiming to deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">impactful, user-centered experiences</span> that make a difference.
      </>
    ),
    icon: FaLaptopCode,
  },
];
