import React from "react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-raised border-t border-border">
      <div className="flex flex-col items-center gap-4 px-6 sm:px-10 md:px-16 lg:px-24 py-10 max-w-7xl mx-auto text-center">
        <button
          onClick={scrollToTop}
          className="font-outfit text-2xl sm:text-3xl font-extrabold text-text tracking-tight hover:text-accent-strong transition-colors"
        >
          AKREM MAARFI
        </button>

        <p className="font-inter text-text-faint text-[10px] tracking-widest uppercase">
          © {new Date().getFullYear()} Akrem Maarfi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
