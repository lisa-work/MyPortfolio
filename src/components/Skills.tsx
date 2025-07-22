import { Code, Lightbulb } from 'lucide-react';
import { languages, frontendFrameworks, backendFrameworks, databases, devOpsTools, AuthAndSecurity } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';

export function Skills() {

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Tools and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Languages</span>
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              Technologies tools and languages I worked with in my projects and studies.
            </p>
          </div>
        </ScrollReveal>

        {/* Programming Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Programming Languages</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {languages.map((lang, index) => {
                  const Icon = lang.icon;
                  return (
                    <ScrollReveal key={lang.name} delay={0.3 + index * 0.1}>
                      <div
                        className="flex flex-col items-center justify-center w-24 h-24 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {Icon ? <Icon size={20}/> : null}
                        <span className="text-white text-sm mt-2 font-semibold text-center">{lang.name}</span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Frontend Frameworks */}
              <div className="flex items-center gap-3 my-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Frontend Frameworks</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {frontendFrameworks.map((framework, index) => {
                  const Icon = framework.icon;
                  return (
                    <ScrollReveal key={framework.name} delay={0.3 + index * 0.1}>
                      <div
                        className="flex flex-col items-center justify-center w-24 h-24 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {Icon ? <Icon size={20}/> : null}
                        <span className="text-white text-sm mt-2 font-semibold text-center">{framework.name}</span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* DevOps */}
              <div className="flex items-center gap-3 my-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">DevOps</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {devOpsTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <ScrollReveal key={tool.name} delay={0.3 + index * 0.1}>
                      <div
                        className="flex flex-col items-center justify-center w-24 h-24 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {Icon ? <Icon size={20}/> : null}
                        <span className="text-white text-sm mt-2 font-semibold text-center">{tool.name}</span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Databases */}
          <ScrollReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Database</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {databases.map((db, index) => {
                  const Icon = db.icon;
                  return (
                    <ScrollReveal key={db.name} delay={0.3 + index * 0.1}>
                      <div
                        className="flex flex-col items-center justify-center w-24 h-24 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {Icon ? <Icon size={20}/> : null}
                        <span className="text-white text-sm mt-2 font-semibold text-center">{db.name}</span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              
              <div className="flex items-center gap-3 my-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Backend Frameworks</h3>
              </div>

              {/* Backend Frameworks */}
              <div className="flex flex-wrap gap-4">
                {backendFrameworks.map((backend, index) => {
                  const Icon = backend.icon;
                  return (
                    <ScrollReveal key={backend.name} delay={0.3 + index * 0.1}>
                      <div
                        className="flex flex-col items-center justify-center w-24 h-24 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {Icon ? <Icon size={20}/> : null}
                        <span className="text-white text-sm mt-2 font-semibold text-center">{backend.name}</span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Auth & Security */}
              <div className="flex items-center gap-3 my-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Auth & Security</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {AuthAndSecurity.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <ScrollReveal key={tool.name} delay={0.3 + index * 0.1}>
                      <div
                        className="flex flex-col items-center justify-center w-24 h-24 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {Icon ? <Icon size={20}/> : null}
                        <span className="text-white text-sm mt-2 font-semibold text-center">{tool.name}</span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}