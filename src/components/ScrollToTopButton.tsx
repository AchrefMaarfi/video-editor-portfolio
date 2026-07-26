import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#FF6600] text-white border border-white/20 shadow-2xl shadow-[#FF6600]/60 hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};
