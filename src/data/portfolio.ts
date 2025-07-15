import { Project, Experience, Certification, Award, Language, SocialLink } from '../types';
import SecondMat from '../assets/SecondMat.jpg';
import Productivity from '../assets/Productivity.jpg';
import ArcadeGame from '../assets/ArcadeGame.jpg';

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
  }
];

export const workExperience: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    role: 'Senior Full Stack Developer',
    period: '2023 - Present',
    description: 'Lead development of scalable web applications, mentor junior developers, and architect cloud-native solutions serving 100k+ users.'
  },
  {
    id: '2',
    company: 'Digital Innovations Inc',
    role: 'Frontend Developer',
    period: '2021 - 2023',
    description: 'Developed responsive web applications using React and TypeScript, improved performance by 40%, and collaborated with UX teams.'
  },
  {
    id: '3',
    company: 'StartupLab',
    role: 'Junior Developer',
    period: '2020 - 2021',
    description: 'Built MVPs for startup clients, worked with modern JavaScript frameworks, and gained experience in agile development practices.'
  }
];

export const volunteering: Experience[] = [
  {
    id: '1',
    company: 'Code for Good',
    role: 'Technical Mentor',
    period: '2022 - Present',
    description: 'Mentor underrepresented students in programming, conduct workshops on web development, and contribute to open-source projects.'
  },
  {
    id: '2',
    company: 'Local Community Center',
    role: 'Web Developer',
    period: '2021 - 2022',
    description: 'Redesigned and maintained the community center website, improved accessibility, and trained staff on content management.'
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: 'https://aws.amazon.com/certification/'
  },
  {
    id: '2',
    title: 'React Professional Developer',
    issuer: 'Meta',
    date: '2022',
    link: 'https://developers.facebook.com/developercircles/'
  },
  {
    id: '3',
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: '2022'
  }
];

export const awards: Award[] = [
  {
    id: '1',
    title: 'Best Innovation Award',
    issuer: 'TechCorp Solutions',
    date: '2023',
    description: 'Recognized for developing an innovative solution that improved customer satisfaction by 35%.'
  },
  {
    id: '2',
    title: 'Hackathon Winner',
    issuer: 'City Tech Challenge',
    date: '2022',
    description: 'First place in 48-hour hackathon for creating a sustainable transportation app.'
  }
];

export const languages: Language[] = [
  { name: 'JavaScript', level: 'expert', icon: '🟨' },
  { name: 'TypeScript', level: 'advanced', icon: '🔷' },
  { name: 'Python', level: 'advanced', icon: '🐍' },
  { name: 'React', level: 'expert', icon: '⚛️' },
  { name: 'Node.js', level: 'advanced', icon: '🟢' },
  { name: 'Go', level: 'learning', icon: '🔵' },
  { name: 'Rust', level: 'learning', icon: '🦀' }
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/lisa-work', icon: '🐙' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ngoc-anh-thu-nguyen-yorku/', icon: '💼' },
  { platform: 'Facebook', url: 'https://www.facebook.com/ngocanhthu.1175/', icon: '📘' },
  { platform: 'Instagram', url: 'https://www.instagram.com/mei_nho/', icon: '📷' }
];