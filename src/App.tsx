import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientStrip } from './components/ClientStrip';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

const SECTION_IDS = ['hero', 'projects', 'reviews', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-bg text-text font-inter">
        <Navbar onContact={() => scrollTo('contact')} activeSection={activeSection} />

        <main>
          <Hero
            onViewProjects={() => scrollTo('projects')}
            onContact={() => scrollTo('contact')}
          />
          <ClientStrip />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />

        {/* Sticky mobile CTA — keeps the primary action thumb-reachable */}
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-bg/90 backdrop-blur-md border-t border-border">
          <button
            onClick={() => scrollTo('contact')}
            className="w-full bg-accent hover:bg-accent-hover text-white font-inter text-sm uppercase tracking-widest font-bold min-h-11 rounded-xl btn-primary-glow active:scale-95 transition-all"
          >
            Contact
          </button>
        </div>

        <ScrollToTopButton />
      </div>
    </ErrorBoundary>
  );
}
