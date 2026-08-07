import React, { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export const TestimonialsSection: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track which card is nearest the scroller's left edge once scrolling
  // settles (mobile carousel only — md+ is a static grid). Debouncing until
  // motion stops avoids flickering between adjacent cards mid-scroll.
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
  }, []);

  const scrollToIndex = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <section
      id="reviews"
      className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-bg border-t border-b border-border relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-text">
            Real Creators.{" "}
            <span className="text-accent-strong italic">Real Results.</span>
          </h2>
        </div>

        <div
          ref={scrollerRef}
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 md:snap-none"
        >
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center bg-surface p-8 rounded-2xl border-t-4 border-t-accent border-x border-b border-border  hover:border-border-strong transition-all duration-300"
            >
              <Quote className="w-9 h-9 text-accent opacity-40 mb-3" />
              <p className="text-text font-medium text-base sm:text-lg leading-relaxed font-inter whitespace-pre-line">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

        {TESTIMONIALS.length > 1 && (
          <div className="flex justify-center gap-2 mt-2 md:hidden">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
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
    </section>
  );
};
