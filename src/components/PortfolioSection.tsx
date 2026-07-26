import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { VIDEOS } from "../data/videos";
import { ShowreelPlayer } from "./ShowreelPlayer";

const INITIAL_COUNT = 4;

export const PortfolioSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleVideos = showAll ? VIDEOS : VIDEOS.slice(0, INITIAL_COUNT);

  return (
    <section
      id="projects"
      className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-surface-raised border-t border-border relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
            Short-Form Edits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {visibleVideos.map((video) => (
            <ShowreelPlayer
              key={video.id}
              url={video.url}
              title={video.title}
              views={video.views}
              client={video.client}
            />
          ))}
        </div>

        {!showAll && VIDEOS.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="min-h-11 px-6 rounded-xl border border-border-strong text-text font-inter text-sm font-bold uppercase tracking-widest hover:border-accent hover:text-accent-strong transition-all active:scale-95"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
