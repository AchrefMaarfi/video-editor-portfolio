import React from 'react';
import { Sparkles, CheckCircle2, Award, Zap, ShieldCheck, Layers, Tv, Flame } from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  niche: string;
  stats: string;
  logoBg: string;
  symbol: string;
  icon: React.ReactNode;
}

const CLIENTS: ClientItem[] = [
  {
    id: 'c1',
    name: 'APEX DIGITAL',
    niche: 'Tech & SaaS',
    stats: '1.2M Subs',
    logoBg: 'from-orange-500/20 to-amber-500/20 text-[#FF6600] border-[#FF6600]/40',
    symbol: 'APX',
    icon: <Zap className="w-4 h-4 text-[#FF6600]" />
  },
  {
    id: 'c2',
    name: 'SYN/CT MEDIA',
    niche: 'Podcast Network',
    stats: '800K Followers',
    logoBg: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/40',
    symbol: 'SYN',
    icon: <Tv className="w-4 h-4 text-purple-400" />
  },
  {
    id: 'c3',
    name: 'SARAH HAYES',
    niche: 'Lifestyle & Growth',
    stats: '450K Subs',
    logoBg: 'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/40',
    symbol: 'SH',
    icon: <Sparkles className="w-4 h-4 text-rose-400" />
  },
  {
    id: 'c4',
    name: 'VANGUARD MEDIA',
    niche: 'Finance & Biz',
    stats: '2.1M Views/mo',
    logoBg: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/40',
    symbol: 'VGD',
    icon: <Award className="w-4 h-4 text-amber-400" />
  },
  {
    id: 'c5',
    name: 'AURA AI',
    niche: 'Future Tech',
    stats: '650K Followers',
    logoBg: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40',
    symbol: 'AURA',
    icon: <Layers className="w-4 h-4 text-cyan-400" />
  },
  {
    id: 'c6',
    name: 'HYPERION',
    niche: 'Gaming & Esports',
    stats: '3.4M Subs',
    logoBg: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40',
    symbol: 'HYP',
    icon: <Flame className="w-4 h-4 text-emerald-400" />
  },
  {
    id: 'c7',
    name: 'NOVA LABS',
    niche: 'Design & Arch',
    stats: '300K Followers',
    logoBg: 'from-fuchsia-500/20 to-pink-500/20 text-fuchsia-400 border-fuchsia-500/40',
    symbol: 'NOVA',
    icon: <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
  }
];

export const ClientStrip: React.FC = () => {
  const marqueeList = [...CLIENTS, ...CLIENTS];

  return (
    <div id="clients" className="w-full mt-12 pt-8 border-t border-white/10 relative pointer-events-none select-none scroll-mt-28">
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/50 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
          <span>CLIENTS & CREATORS I'VE WORKED WITH</span>
        </div>
      </div>

      <div className="relative overflow-hidden carousel-mask py-2">
        <div className="animate-marquee flex gap-4 sm:gap-6 items-center whitespace-nowrap">
          {marqueeList.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="bg-white/[0.03] backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3 shrink-0 shadow-lg"
            >
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${client.logoBg} border flex items-center justify-center font-playfair font-black text-[11px] tracking-wider shrink-0`}
              >
                {client.icon}
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-playfair text-xs sm:text-sm font-bold text-white tracking-wide">
                    {client.name}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 fill-[#FF6600] text-black" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/50 font-inter font-medium">
                  <span>{client.niche}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-[#FF6600] font-semibold">{client.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
