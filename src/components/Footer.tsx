import React from "react";
import { Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-raised border-t border-border">
      <div className="flex flex-col items-center gap-8 px-6 sm:px-10 md:px-16 lg:px-24 py-14 max-w-7xl mx-auto text-center">
        <button
          onClick={scrollToTop}
          className="font-outfit text-2xl sm:text-3xl font-extrabold text-text tracking-tight hover:text-accent-strong transition-colors"
        >
          AKREM MAARFI
        </button>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://instagram.com/akrem.maarfi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-strong transition-colors font-inter text-xs font-bold uppercase tracking-widest flex items-center gap-2 min-h-11 px-2"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:akrem.maarfi@gmail.com"
            className="text-text-muted hover:text-accent-strong transition-colors font-inter text-xs font-bold uppercase tracking-widest flex items-center gap-2 min-h-11 px-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-strong transition-colors font-inter text-xs font-bold uppercase tracking-widest flex items-center gap-2 min-h-11 px-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        <p className="font-inter text-text-faint text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} Akrem Maarfi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
