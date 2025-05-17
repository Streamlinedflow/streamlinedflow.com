"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

const reviews = [
  {
    name: "Charlie Davis",
    review:
      "Our automated reporting system now runs flawlessly, saving us time and improving accuracy across the board.",
  },
  {
    name: "Danielle Brown",
    review:
      "Superb team and great support. The AI automation was easy to implement and made a measurable impact within weeks.",
  },
  {
    name: "Ethan Wilson",
    review:
      "A sleek, modern solution that’s elevated our client communications and reporting to the next level.",
  },
  {
    name: "Ethan Wilson",
    review:
      "A sleek, modern solution that’s elevated our client communications and reporting to the next level.",
  },
];

/**
 * ReviewsCarousel component: content only; outer Container/Section handle layout and padding.
 */
export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered>
      <>
        {/* Heading */}
        <div className="rounded-xl backdrop-blur-lg mb-6 w-full relative z-0">
          <h2 className="text-xl md:text-3xl text-center text-gray-900 dark:text-white leading-tight">
            Real Voices, Real Results
          </h2>
        </div>

        {/* Carousel Slides */}
        <div className="-mx-8 overflow-hidden relative pt-4 pb-8" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className="min-w-full md:min-w-[33.3333%] px-4 flex justify-center"
                >
                  <div
                    className={`rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 p-6 flex flex-col w-full max-w-sm transition-transform duration-500 ${
                      isActive
                        ? "scale-100 md:scale-105 border-blue-400 shadow-lg opacity-100"
                        : "scale-100 md:scale-90 opacity-60"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {review.name}
                      <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full" />
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button onClick={scrollPrev} className="p-2 rounded-full bg-white/40 dark:bg-zinc-800/40">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} className="p-2 rounded-full bg-white/40 dark:bg-zinc-800/40">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </>
    </AnimatedSection>
  );
}