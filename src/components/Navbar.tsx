import React, { useState } from 'react';
import { Menu, X, Film, Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme';

interface NavbarProps {
  onContact: () => void;
  activeSection: string;
}

const NAV_LINKS = [
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Reviews', href: '#reviews', id: 'reviews' },
];

export const Navbar: React.FC<NavbarProps> = ({ onContact, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-5xl z-50">
      <div className="glass-card rounded-full px-5 sm:px-6 py-3 shadow-2xl flex items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 shrink-0"
        >
          <div className="p-2 rounded-full bg-accent text-white">
            <Film className="w-4 h-4" />
          </div>
          <span className="font-outfit text-base sm:text-lg font-black text-text tracking-wider leading-none uppercase">
            AKREM<span className="text-accent-strong">MAARFI</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link-item font-inter text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text transition-colors cursor-pointer ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            className="w-11 h-11 flex items-center justify-center rounded-full text-text-muted hover:text-text hover:bg-accent-tint transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={onContact}
            className="hidden md:flex bg-accent hover:bg-accent-hover text-white font-inter text-xs uppercase tracking-wider font-bold px-5 min-h-11 rounded-full btn-primary-glow transition-all active:scale-95 items-center"
          >
            Contact
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-text rounded-full hover:bg-accent-tint transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 p-4 rounded-3xl glass-card shadow-2xl flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-inter text-xs uppercase tracking-widest font-bold min-h-11 px-4 rounded-xl flex items-center transition-all ${
                activeSection === link.id
                  ? 'bg-accent-tint text-accent-strong'
                  : 'text-text-muted hover:bg-accent-tint hover:text-text'
              }`}
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContact();
            }}
            className="w-full bg-accent hover:bg-accent-hover text-white font-inter text-xs uppercase tracking-widest font-bold min-h-11 rounded-xl btn-primary-glow mt-1"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};
