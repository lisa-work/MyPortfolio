import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingShape } from './FloatingShape';
import { ParticleBackground } from './ParticleBackground';

import { ChevronDown, Linkedin} from 'lucide-react';
import { FiFacebook } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { socialLinks } from '../data/portfolio';

const iconMap = {
  GitHub: TbBrandGithub,
  LinkedIn: Linkedin,
  Facebook: FiFacebook,
  Instagram: FaInstagram
};

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300); // fade out after slight scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ParticleBackground visible={!scrolled}/>
          <FloatingShape />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-letter">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Lisa Nguyen
            </span>
          </h1>

        <p className="text-md md:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed animate-fade-letter">
          A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> dedicated learner</span> and developer passionate about exploring <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Web Technologies</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI & Data</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cybersecurity</span> to create meaningful digital experiences.
        </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.platform as keyof typeof iconMap];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                >
                  <Icon size={24} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
                </a>
              );
            })}
          </div>
          
          <button
            onClick={scrollToProjects}
            className="cusrsor-pointer text-xl md:text-2xl inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            See My Work
            <ChevronDown size={20} className="ml-2 cursor-pointer" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-slate-400 cursor-pointer" onClick={scrollToProjects}/>
      </div>
    </section>
  );
}