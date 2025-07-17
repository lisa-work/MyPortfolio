import { ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  description: string | ReactNode;
  techStack: string[];
  liveDemo?: string;
  github: string;
  image: string;
  video?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string | ReactNode;
  logo?: string;
  link?: string;
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
  description: string | ReactNode;
  link?: string;
}

export interface Language {
  name: string;
  icon?: React.ElementType;
}

export interface FrontendFramework {
  name: string;
  icon?: React.ElementType;
}

export interface BackendFramework {
  name: string;
  icon?: React.ElementType;
}

export interface Database {
  name: string;
  icon?: React.ElementType;
}

export interface DevOps {
  name: string;
  icon?: React.ElementType;
}

export interface AuthSecurity {
  name: string;
  icon?: React.ElementType;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface About {
  name: string;
  description: string | ReactNode;
  icon?: React.ElementType;
}