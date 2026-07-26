import React from 'react';
import { ArrowUp, Instagram, Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-white/10 relative">
      <div className="flex flex-col items-center gap-8 px-6 sm:px-10 md:px-16 lg:px-24 py-16 max-w-7xl mx-auto text-center">
        {/* Brand Name */}
        <span className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight hover:text-[#FF6600] transition-colors cursor-pointer" onClick={scrollToTop}>
          AKREM MAARFI
        </span>

        {/* Social Links with Lucide Icons */}
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://instagram.com/akrem.maarfi"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-[#E1306C] transition-colors font-inter text-xs font-bold uppercase tracking-widest flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 stroke-[2.25]" />
            <span>INSTAGRAM</span>
          </a>
          <a
            href="mailto:akrem.maarfi@gmail.com"
            className="text-white/60 hover:text-[#FF6600] transition-colors font-inter text-xs font-bold uppercase tracking-widest flex items-center gap-2"
          >
            <Mail className="w-4 h-4 stroke-[2.25]" />
            <span>EMAIL</span>
          </a>
          <a
            href="https://wa.me/#"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-[#25D366] transition-colors font-inter text-xs font-bold uppercase tracking-widest flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 stroke-[2.25]" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="font-inter text-white/40 text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} AKREM MAARFI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
