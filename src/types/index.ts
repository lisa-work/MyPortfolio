export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github: string;
  image: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Language {
  name: string;
  level: 'learning' | 'intermediate' | 'advanced' | 'expert';
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}