import { ReactElement, ReactNode } from "react";

interface AboutMeCardProps {
  icon: ReactElement | null;
  name: string;
  description: ReactNode | string;
}

export function AboutMeCard({ icon, name, description }: AboutMeCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-slate-800/30 backdrop-blur-md border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 shadow-lg w-full">
      <div className="flex-shrink-0 flex items-center justify-center text-cyan-400 text-5xl">
        {icon}
      </div>
      <div>
        <h3 className="md:text-xl lg:text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-slate-300 text-sm md:text-md lg:text-lg leading-6">{description}</p>
      </div>
    </div>
  );
}
