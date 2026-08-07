import React, { useEffect } from "react";
import { VIDEO_CATEGORIES } from "../data/videos";
import { VideoCarousel } from "./VideoCarousel";

export const PortfolioSection: React.FC = () => {
  // Warm the player chunk once the browser is idle so the first click-to-play
  // (almost always the first video) starts instantly instead of waiting on
  // a fresh chunk download.
  useEffect(() => {
    if (typeof requestIdleCallback === "function") {
      const idleId = requestIdleCallback(() => import("../lib/player"));
      return () => cancelIdleCallback(idleId);
    }
    const timeoutId = setTimeout(() => import("../lib/player"), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="projects"
      className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 bg-surface-raised border-t border-border relative"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center">
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-text">
            Short-Form Edits
          </h2>
        </div>

        {VIDEO_CATEGORIES.map((category, categoryIndex) => (
          <div key={category.id}>
            <div className="mb-8 text-center">
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
                {category.title}
              </h2>
            </div>

            <VideoCarousel
              videos={category.videos}
              priorityFirst={categoryIndex === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
