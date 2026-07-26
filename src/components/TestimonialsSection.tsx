import React from "react";
import { Star, Quote, TrendingUp, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-bg border-t border-b border-border relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-text">
            Real Creators.{" "}
            <span className="text-accent-strong italic">Real Results.</span>
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 md:snap-none">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center bg-surface p-8 rounded-2xl border-t-4 border-t-accent border-x border-b border-border flex flex-col justify-between shadow-2xl hover:border-border-strong transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white bg-accent px-3 py-1 rounded-full flex items-center gap-1.5 tabular-nums">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.metric}
                  </span>
                </div>

                <Quote className="w-9 h-9 text-accent opacity-40 mb-3" />

                <p className="italic text-text font-medium text-base sm:text-lg mb-8 leading-relaxed font-inter">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-5 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-accent text-white flex items-center justify-center font-black font-outfit text-lg shrink-0">
                  {item.clientName.charAt(0)}
                </div>
                <div>
                  <p className="font-extrabold text-base text-text font-inter tracking-wide">
                    {item.clientName}
                  </p>
                  <p className="text-xs text-text-muted font-inter font-medium">
                    {item.clientRole},{" "}
                    <span className="text-accent-strong">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
