import React from "react";
import { Sparkles } from "lucide-react";
import { CLIENTS } from "../data/clients";

export const ClientStrip: React.FC = () => {
  const marqueeList = [...CLIENTS, ...CLIENTS];

  return (
    <section
      id="clients"
      className="w-full py-10 border-t border-border relative pointer-events-none select-none"
    >
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-text-faint font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span>Creators I've Worked With</span>
        </div>
      </div>

      <div className="relative overflow-hidden carousel-mask py-2 mx-6 sm:mx-12">
        <div className="animate-marquee flex gap-4 sm:gap-10 items-center whitespace-nowrap">
          {marqueeList.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="px-4 py-3 rounded-2xl flex items-center gap-3 shrink-0 relative"
            >
              <img
                src={client.img}
                alt=""
                loading="lazy"
                decoding="async"
                width={36}
                height={36}
                className="w-9 h-9 rounded-xl object-cover shrink-0 bg-surface-raised"
              />

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-outfit text-xs sm:text-sm font-bold text-text tracking-wide">
                    {client.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-text-muted font-inter font-medium">
                  <span className="font-semibold">{client.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
