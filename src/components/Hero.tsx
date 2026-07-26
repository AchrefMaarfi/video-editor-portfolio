import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onContact }) => {
  return (
    <section
      id="hero"
      className="relative px-6 sm:px-10 md:px-16 lg:px-24 pt-32 pb-16 md:pt-40 md:pb-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] sm:w-[120%] h-125 cinematic-glow -z-10 pointer-events-none rounded-full blur-3xl opacity-80" />

      <h1 className="font-outfit text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-text tracking-tight mb-4 max-w-2xl">
        Short-form edits that convert
      </h1>

      <p className="text-text-muted font-inter text-base sm:text-lg mb-10 max-w-md leading-relaxed">
        Built for retention and ROAS.
      </p>

      <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3.5 max-w-md mx-auto">
        <button
          onClick={onContact}
          className="bg-accent hover:bg-accent-hover text-white font-inter text-sm uppercase tracking-widest font-bold py-4 px-8 rounded-xl btn-primary-glow flex items-center justify-center gap-2 active:scale-95 transition-all min-h-11"
        >
          <span>Contact</span>
        </button>

        <button
          onClick={onViewProjects}
          className="text-text hover:text-accent-strong font-inter text-sm uppercase tracking-widest font-bold py-4 px-8 flex items-center justify-center gap-2 active:scale-95 transition-all min-h-11"
        >
          <span>See Work</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
