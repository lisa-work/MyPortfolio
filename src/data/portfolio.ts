import { Project, Experience, Certification, Award, Language, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    liveDemo: 'https://demo.example.com',
    github: 'https://github.com/username/ecommerce',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'AI Task Manager',
    description: 'An intelligent task management application that uses machine learning to prioritize tasks and predict completion times.',
    techStack: ['React', 'Python', 'TensorFlow', 'FastAPI', 'MongoDB'],
    liveDemo: 'https://ai-tasks.example.com',
    github: 'https://github.com/username/ai-taskmanager',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Real-time Chat App',
    description: 'A modern chat application with end-to-end encryption, file sharing, and real-time collaboration features.',
    techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    github: 'https://github.com/username/chat-app',
    image: 'https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=800'
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
  { platform: 'GitHub', url: 'https://github.com/username', icon: '🐙' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: '💼' },
  { platform: 'Facebook', url: 'https://facebook.com/username', icon: '📘' },
  { platform: 'Instagram', url: 'https://instagram.com/username', icon: '📷' }
];