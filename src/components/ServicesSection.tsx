import React from 'react';
import { ServiceItem } from '../types';
import { Video, Target, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'movie_edit':
        return <Video className="w-6 h-6 text-[#FF6600]" />;
      case 'tactic':
        return <Target className="w-6 h-6 text-[#FF6600]" />;
      case 'animation':
        return <Sparkles className="w-6 h-6 text-[#FF6600]" />;
      default:
        return <Video className="w-6 h-6 text-[#FF6600]" />;
    }
  };

  return (
    <section id="services" className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#FF6600] font-inter text-xs uppercase tracking-widest font-bold block mb-1.5">
            What We Do
          </span>
          <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/[0.03] p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-white/10 hover:border-[#FF6600]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600]">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-jakarta tabular-nums text-white/50 uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {service.turnaroundTime}
                  </span>
                </div>

                <h3 className="font-outfit text-lg sm:text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-white/60 font-inter text-xs leading-relaxed mb-4">
                  {service.description.split('.')[0]}.
                </p>

                {/* Minimal Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 text-white/70 text-[10px] font-mono border border-white/5"
                    >
                      {feat.split(' ')[0]} {feat.split(' ')[1] || ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2 text-xs font-bold uppercase tracking-widest text-[#FF6600] hover:text-white flex items-center justify-between transition-colors group/btn"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

