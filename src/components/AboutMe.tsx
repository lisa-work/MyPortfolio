import { ScrollReveal } from './ScrollReveal';
import { AboutMeCard } from './AboutMeCard';
import { aboutme } from '../data/portfolio';

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              About Me
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              Get to know me better, my background, and what drives my passion for technology and development.
            </p>
          </div>

          <div className="text-left mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">I Am A...</h2>
          </div>

          <div className="space-y-8">
            {aboutme.map((item, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                <AboutMeCard 
                  icon={<item.icon />} 
                  name={item.name} 
                  description={item.description} 
                />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
