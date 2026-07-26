import React, { useState, useRef } from 'react';
import { ProjectItem } from '../types';
import { Play, Eye, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Short-Form Social',
    'Performance Video Ads',
    'Creator Content'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 24 : 300;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveSlideIndex(Math.min(Math.max(0, newIndex), filteredProjects.length - 1));
    }
  };

  const scrollToSlide = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.clientWidth * 0.75;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToDot = (index: number) => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section id="projects" className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-[#0b0b0b] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Integrated Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6600]/10 border border-[#FF6600]/20 text-[#FF6600] text-[11px] font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Showcase</span>
            </div>
            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Selected Works
            </h2>
          </div>

          {/* Simple Slide Counter & Arrows */}
          <div className="flex items-center gap-3 self-start sm:self-end">
            <span className="text-white/60 text-xs font-jakarta tabular-nums font-semibold px-2.5 py-1 rounded-lg bg-white/5">
              {filteredProjects.length > 0 ? activeSlideIndex + 1 : 0} / {filteredProjects.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollToSlide('left')}
                className="p-2 rounded-lg bg-white/5 hover:bg-[#FF6600] text-white transition-all active:scale-95 border border-white/10"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSlide('right')}
                className="p-2 rounded-lg bg-white/5 hover:bg-[#FF6600] text-white transition-all active:scale-95 border border-white/10"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Category Pills (Clean & Spacious) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveSlideIndex(0);
                  if (carouselRef.current) carouselRef.current.scrollLeft = 0;
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/20'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Horizontal Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-none pt-2"
            style={{ scrollBehavior: 'smooth' }}
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="snap-center sm:snap-start shrink-0 w-[82vw] sm:w-[300px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden relative glass-card border border-white/10 hover:border-[#FF6600]/60 transition-all duration-300 cursor-pointer group shadow-2xl"
              >
                {/* Thumbnail Image */}
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105 brightness-90 md:group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="bg-black/70 backdrop-blur-md text-white/90 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-[#FF6600]" />
                    <span>{project.views}</span>
                  </span>

                  <span className="bg-[#FF6600]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {project.retentionRate} Retention
                  </span>
                </div>

                {/* Play Button Trigger */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-14 h-14 rounded-full bg-[#FF6600] text-white flex items-center justify-center shadow-xl shadow-[#FF6600]/50 transition-transform duration-300 active:scale-90">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Card Gradient & Text Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                <div className="absolute bottom-5 left-5 right-5 z-10 text-left">
                  <span className="text-[#FF6600] font-inter font-bold text-xs uppercase tracking-wider mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="font-outfit text-base sm:text-lg font-bold text-white mb-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-xs line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-[10px] text-white/50 border-t border-white/10 pt-2 font-jakarta tabular-nums">
                    <span>{project.clientName}</span>
                    <span className="text-[#FF6600] font-semibold">{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicator Dots (Mobile & Desktop) */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToDot(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeSlideIndex === idx
                    ? 'w-7 h-2 bg-[#FF6600]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
