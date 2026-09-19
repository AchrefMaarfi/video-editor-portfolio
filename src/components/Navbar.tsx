import React from "react";
import { Briefcase, MessageSquareQuote, Sun, Moon } from "lucide-react";
import { useTheme } from "../theme";

interface NavbarProps {
  onContact: () => void;
  activeSection: string;
}

const NAV_LINKS = [
  { label: "Work", href: "#projects", id: "projects", icon: Briefcase },
  {
    label: "Reviews",
    href: "#reviews",
    id: "reviews",
    icon: MessageSquareQuote,
  },
];

export const Navbar: React.FC<NavbarProps> = ({ onContact, activeSection }) => {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-5xl z-50">
      <div className="glass-card rounded-full pl-3 pr-2 sm:px-6 py-3 shadow-2xl flex items-center justify-between gap-2 sm:gap-4">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 shrink-0"
        >
          <img
            src="/icon-website.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-outfit text-sm sm:text-lg font-black text-text tracking-wider leading-none uppercase whitespace-nowrap">
            AKREM<span className="text-accent-strong">.M</span>
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
                    activeSection === link.id ? "active" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-label={link.label}
              className={`w-11 h-11 flex items-center justify-center rounded-full transition-colors ${
                activeSection === link.id
                  ? "bg-accent-tint text-accent-strong"
                  : "text-text-muted hover:bg-accent-tint hover:text-text"
              }`}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            className="w-11 h-11 flex items-center justify-center rounded-full text-text-muted hover:text-text hover:bg-accent-tint transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={onContact}
            className="hidden md:flex bg-accent hover:bg-accent-hover text-white font-inter text-xs uppercase tracking-wider font-bold px-5 min-h-11 rounded-full btn-primary-glow transition-all active:scale-95 items-center"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
