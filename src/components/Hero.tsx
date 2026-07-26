import React from 'react';
import { ArrowDown, Play, MessageSquare } from 'lucide-react';
import { ClientStrip } from './ClientStrip';

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onContact }) => {
  const stats = [
    { value: '10M+', label: 'Total Views' },
    { value: '24H', label: 'Turnaround' },
    { value: '4.2x', label: 'Avg ROAS' },
    { value: '500+', label: 'Delivered' }
  ];

  return (
    <section id="hero" className="relative px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-12 md:pt-36 md:pb-16 flex flex-col items-center justify-center text-center max-w-5xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] sm:w-[120%] h-[500px] cinematic-glow -z-10 pointer-events-none rounded-full blur-3xl opacity-80" />

      {/* Subtle Tagline Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 text-xs font-semibold tracking-wider uppercase text-[#ffb380]">
        <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-ping" />
        <span>Akrem Maarfi &bull; Short-Form & Ads Specialist</span>
      </div>

      {/* Ultra-Concise Hero Headline */}
      <h1 className="font-outfit text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white tracking-tight mb-3 max-w-2xl">
        High-Retention Video Edits for Top Brands
      </h1>

      {/* Ultra-Concise Subheadline */}
      <p className="text-white/70 font-inter text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
        TikToks, Reels, and Meta ads engineered for viral reach and ROAS.
      </p>

      {/* CTA Button Group */}
      <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3.5 mb-10 max-w-md mx-auto">
        <button
          onClick={onContact}
          className="bg-[#FF6600] hover:bg-[#e05500] text-white font-inter text-xs sm:text-sm uppercase tracking-widest font-bold py-4 px-8 rounded-xl btn-primary-glow flex items-center justify-center gap-2.5 active:scale-95 transition-all shadow-lg shadow-[#FF6600]/30"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Get in Touch</span>
        </button>

        <button
          onClick={onViewProjects}
          className="border border-white/20 text-white hover:border-[#FF6600] hover:text-[#FF6600] font-inter text-xs sm:text-sm uppercase tracking-widest font-bold py-4 px-8 rounded-xl hover:bg-white/5 flex items-center justify-center gap-2.5 active:scale-95 transition-all"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>View Works</span>
        </button>
      </div>

      {/* Scannable Stat Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/[0.03] border border-white/10 p-3.5 rounded-xl text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold font-syne tabular-nums text-[#FF6600]">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 font-semibold block mt-0.5">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Client Logos Strip */}
      <ClientStrip />

      {/* Anchor */}
      <button
        onClick={onViewProjects}
        className="mt-10 text-white/40 hover:text-[#FF6600] transition-colors flex flex-col items-center gap-1.5 text-xs tracking-widest uppercase animate-bounce"
      >
        <span className="text-[10px]">Explore Portfolio</span>
        <ArrowDown className="w-4 h-4" />
      </button>
    </section>
  );
};

