import { Code, Lightbulb } from 'lucide-react';
import { languages } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';

const levelColors = {
  learning: 'bg-yellow-500',
  intermediate: 'bg-blue-500',
  advanced: 'bg-green-500',
  expert: 'bg-purple-500'
};

const levelPercentages = {
  learning: 25,
  intermediate: 50,
  advanced: 75,
  expert: 90
};

export function Skills() {
  const knownLanguages = languages.filter(lang => lang.level !== 'learning');
  const learningLanguages = languages.filter(lang => lang.level === 'learning');

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Programming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Languages</span>
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              Technologies and languages I work with to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages I Know */}
          <ScrollReveal delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Languages I Know</h3>
              </div>
            
              <div className="space-y-6">
                {knownLanguages.map((lang, index) => (
                  <ScrollReveal key={lang.name} delay={0.3 + index * 0.1}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.icon}</span>
                          <span className="text-white font-semibold">{lang.name}</span>
                        </div>
                        <span className="text-sm text-slate-400 capitalize">{lang.level}</span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${levelColors[lang.level]} transition-all duration-1000 ease-out`}
                          style={{ width: `${levelPercentages[lang.level]}%` }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Languages I'm Learning */}
          <ScrollReveal delay={0.4}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <Lightbulb className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Currently Learning</h3>
              </div>
            
              <div className="space-y-6">
                {learningLanguages.map((lang, index) => (
                  <ScrollReveal key={lang.name} delay={0.5 + index * 0.1}>
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-yellow-400/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.icon}</span>
                          <span className="text-white font-semibold">{lang.name}</span>
                        </div>
                        <span className="text-sm text-yellow-400 capitalize">{lang.level}</span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${levelColors[lang.level]} transition-all duration-1000 ease-out animate-pulse`}
                          style={{ width: `${levelPercentages[lang.level]}%` }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay={0.7}>
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20">
                  <p className="text-slate-300 text-sm italic">
                    "The beautiful thing about learning is that no one can take it away from you." - B.B. King
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}