import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { AiOutlineYoutube } from "react-icons/ai";
import { Project } from '../types';
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-md md:text-lg mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 text-xs md:text-md lg:text-md size-fit bg-slate-700/50 text-cyan-400 rounded-md border border-slate-600"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 items-center justify-center text-sm text-slate-400">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-md text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FaGithub size={25} />
              Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-md text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink size={25} />
                Demo
              </a>
              
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 text-md text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <AiOutlineYoutube size={25} />
                Video
              </a>
              
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-xl border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-900/75 backdrop-blur-sm rounded-full text-white hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-slate-300 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-cyan-400 rounded-md border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}