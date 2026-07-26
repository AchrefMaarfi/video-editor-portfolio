import React, { useState } from 'react';
import { Menu, X, Film, MessageSquare, Sparkles } from 'lucide-react';

interface NavbarProps {
  onContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onContact,
  activeSection
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'REVIEWS', href: '#reviews', id: 'reviews' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-5xl z-50 transition-all duration-300">
      <div className="bg-[#141414]/90 backdrop-blur-xl border border-white/15 rounded-full px-5 sm:px-6 py-3 shadow-2xl shadow-black/80 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="p-2 rounded-full bg-gradient-to-tr from-[#FF6600] to-amber-500 text-white shadow-lg shadow-[#FF6600]/30 group-hover:scale-105 transition-transform">
            <Film className="w-4 h-4" />
          </div>
          <span className="font-playfair text-base sm:text-lg font-black text-white tracking-wider leading-none uppercase">
            AKREM<span className="text-[#FF6600]">MAARFI</span>
          </span>
        </a>

        {/* Center Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link-item font-inter text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onContact}
            className="bg-[#FF6600] hover:bg-[#e05500] text-white font-inter text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full btn-primary-glow transition-all active:scale-95 flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FF6600]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 p-5 rounded-3xl bg-[#141414]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-3 animate-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-inter text-xs uppercase tracking-widest font-bold py-3 px-4 rounded-xl flex items-center justify-between transition-all ${
                  isActive
                    ? 'bg-[#FF6600]/20 text-[#FF6600] border border-[#FF6600]/40'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FF6600]" />
              </a>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContact();
              }}
              className="w-full bg-[#FF6600] hover:bg-[#e05500] text-white font-inter text-xs uppercase tracking-widest font-bold py-3.5 rounded-xl btn-primary-glow flex justify-center items-center gap-2 shadow-lg shadow-[#FF6600]/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
