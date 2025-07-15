import { Briefcase, Heart, Award, AlignCenterVertical as Certificate } from 'lucide-react';
import { workExperience, volunteering, awards, certifications } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Achievements</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Briefcase className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Work Experience</h3>
              </div>
            
              <div className="space-y-6">
                {workExperience.map((exp, index) => (
                  <ScrollReveal key={exp.id} delay={0.3 + index * 0.1}>
                    <div className="relative">
                      {index !== workExperience.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
                      )}
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-cyan-400/50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">{exp.role}</h4>
                            <p className="text-md lg:text-lg text-cyan-400 font-medium">{exp.company}</p>
                            <p className="text-md text-slate-400 mb-3">{exp.period}</p>
                            <p className="text-md md:text-lg text-slate-300">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Volunteering */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Heart className="text-pink-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Volunteering</h3>
              </div>
            
              <div className="space-y-6">
                {volunteering.map((vol, index) => (
                  <ScrollReveal key={vol.id} delay={0.5 + index * 0.1}>
                    <div className="relative">
                      {index !== volunteering.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-pink-400 to-transparent" />
                      )}
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-pink-400/50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">{vol.role}</h4>
                            <p className="text-md lg:text-lg text-pink-400 font-medium">{vol.company}</p>
                            <p className="text-md text-slate-400 mb-3">{vol.period}</p>
                            <p className="text-md md:text-lg text-slate-300">{vol.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Certifications & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Certifications */}
          <ScrollReveal delay={0.6}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Certificate className="text-green-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Certifications</h3>
              </div>
            
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={cert.id} delay={0.7 + index * 0.1}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-4 hover:border-green-400/50 transition-all duration-300">
                      <h4 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">{cert.title}</h4>
                      <p className="text-lg text-green-400">{cert.issuer}</p>
                      <p className="text-md text-slate-400">{cert.date}</p>
                      {cert.link && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-md hover:underline">
                          View Credential
                        </a>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Awards */}
          <ScrollReveal delay={0.8}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Awards</h3>
              </div>
            
              <div className="grid gap-4">
                {awards.map((award, index) => (
                  <ScrollReveal key={award.id} delay={0.9 + index * 0.1}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-4 hover:border-yellow-400/50 transition-all duration-300">
                      <h4 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">{award.title}</h4>
                      <p className="text-lg text-yellow-400 text-md lg:text-lg">{award.issuer}</p>
                      <p className="text-md text-slate-400 mb-2">{award.date}</p>
                      <p className="text-slate-300 text-md lg:text-lg">{award.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}