import React, { useEffect, useRef, useState } from "react";
import type { VideoEntry } from "../data/videos";
import { ShowreelPlayer } from "./ShowreelPlayer";

interface VideoCarouselProps {
  videos: VideoEntry[];
  priorityFirst?: boolean;
}

export const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  priorityFirst = false,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track which card is nearest the scroller's left edge once scrolling
  // settles. Recomputing on every scroll tick (e.g. via IntersectionObserver
  // ratios) flickers between adjacent cards while the peeking next card is
  // partially visible — debouncing until motion stops picks one clean index.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let debounceId: ReturnType<typeof setTimeout>;
    const updateActiveIndex = () => {
      const scrollerLeft = scroller.getBoundingClientRect().left;
      let closestIndex = 0;
      let closestDistance = Infinity;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const distance = Math.abs(
          card.getBoundingClientRect().left - scrollerLeft,
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };

    const onScroll = () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(updateActiveIndex, 100);
    };

    updateActiveIndex();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(debounceId);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [videos.length]);

  const scrollToIndex = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const goToPrev = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const goToNext = () =>
    scrollToIndex(Math.min(activeIndex + 1, videos.length - 1));

  const showArrows = videos.length > 2;

  return (
    <div className="relative">
      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            disabled={activeIndex === 0}
            aria-label="Previous video"
            className="hidden md:flex absolute md:-left-10 lg:-left-20 top-[46%] -translate-y-1/2 z-10 items-center justify-center h-9 w-9 rounded-full bg-[#e8a878] text-[#3d2210] disabled:opacity-0 disabled:pointer-events-none hover:bg-[#e0965e] active:scale-95 transition-all"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              className="h-5 w-5"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={activeIndex === videos.length - 1}
            aria-label="Next video"
            className="hidden md:flex absolute md:-right-10 lg:-right-20 top-[46%] -translate-y-1/2 z-10 items-center justify-center h-9 w-9 rounded-full bg-[#e8a878] text-[#3d2210] disabled:opacity-0 disabled:pointer-events-none hover:bg-[#e0965e] active:scale-95 transition-all"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              className="h-5 w-5"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
      <div
        ref={scrollerRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 -mx-6 md:px-16 md:-mx-16 lg:px-24 lg:-mx-24 pb-2 no-scrollbar"
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={
              video.orientation === "landscape"
                ? "shrink-0 w-[85vw] sm:w-[60vw] md:w-[42vw] lg:w-[32vw] max-w-lg snap-start"
                : "shrink-0 w-[68vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] max-w-xs snap-start"
            }
          >
            <ShowreelPlayer
              url={video.url}
              title={video.title}
              views={video.views}
              client={video.client}
              priority={priorityFirst && index === 0}
              orientation={video.orientation}
            />
          </div>
        ))}
      </div>

      {videos.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to video ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-accent"
                  : "w-2.5 bg-border-strong hover:bg-text-faint"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
