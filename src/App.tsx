import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { BookingModal } from './components/BookingModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

import {
  INITIAL_PROJECTS,
  INITIAL_SERVICES,
  INITIAL_TESTIMONIALS
} from './data/portfolioData';
import { ProjectItem } from './types';

export default function App() {
  const [projects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Short-Form Editing');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Section observer for header link highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'services', 'reviews', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    handleContact();
  };

  const handleViewProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-[#e2e2e2] font-inter selection:bg-[#FF6600] selection:text-white">
        {/* Top Fixed Navigation */}
        <Navbar
          onContact={handleContact}
          activeSection={activeSection}
        />

        {/* Hero Header Section */}
        <main>
          <Hero
            onViewProjects={handleViewProjects}
            onContact={handleContact}
          />

          {/* Selected Works Vertical Portfolio (9:16) */}
          <PortfolioSection
            projects={projects}
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* Services Showcase */}
          <ServicesSection
            services={INITIAL_SERVICES}
            onSelectService={handleSelectService}
          />

          {/* Client Reviews / Testimonials */}
          <TestimonialsSection testimonials={INITIAL_TESTIMONIALS} />

          {/* Direct Connect Section (Instagram, Email, WhatsApp) */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Video Player Modal */}
        {selectedProject && (
          <VideoPlayerModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Strategy Call Booking Modal */}
        {isBookingModalOpen && (
          <BookingModal onClose={() => setIsBookingModalOpen(false)} />
        )}

        {/* Floating Scroll To Top Button */}
        <ScrollToTopButton />
      </div>
    </ErrorBoundary>
  );
}

