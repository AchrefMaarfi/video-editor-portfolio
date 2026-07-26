import React from 'react';
import { TestimonialItem } from '../types';
import { Star, Quote, TrendingUp, Sparkles } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="reviews" className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-black via-[#0d0d0d] to-black border-t border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6600]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6600]/15 border border-[#FF6600]/40 text-[#FF6600] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Impact</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-white">
            Real Creators. <span className="text-[#FF6600] italic">Real Results.</span>
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 md:snap-none">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center bg-[#141416] p-8 rounded-2xl border-t-4 border-t-[#FF6600] border-x border-b border-white/15 flex flex-col justify-between shadow-2xl shadow-black hover:border-white/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF6600] text-[#FF6600] drop-shadow-[0_0_6px_rgba(255,102,0,0.7)]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold font-mono text-white bg-[#FF6600] px-3 py-1 rounded-full shadow-md shadow-[#FF6600]/30 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-white" />
                    {item.metric}
                  </span>
                </div>

                <Quote className="w-9 h-9 text-[#FF6600] opacity-40 mb-3" />

                <p className="italic text-white font-medium text-base sm:text-lg mb-8 leading-relaxed font-inter">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-white/15">
                <div className="w-11 h-11 rounded-full bg-[#FF6600] text-white border border-white/20 flex items-center justify-center font-black font-playfair text-lg shrink-0 shadow-md shadow-[#FF6600]/40">
                  {item.clientName.charAt(0)}
                </div>
                <div>
                  <p className="font-extrabold text-base text-white font-inter tracking-wide">{item.clientName}</p>
                  <p className="text-xs text-white/70 font-inter font-medium">{item.clientRole}, <span className="text-[#FF6600]">{item.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

