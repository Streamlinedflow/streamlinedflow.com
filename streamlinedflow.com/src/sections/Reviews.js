"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Alice Johnson",
    review:
      "This AI system has completely transformed the way we work. Highly recommend to anyone looking to streamline their business processes.",
  },
  {
    name: "Bob Smith",
    review:
      "Fantastic experience! The chatbot we integrated has boosted customer engagement and saved us hours of manual work.",
  },
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
];

const ReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setActiveIndex(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

 return (
    <>
      {/* ─── 1️⃣ HEADING + BLUR ─────────────────────────────── */}
      <section className="container mx-auto pt-16 pb-12 px-4 relative z-0">
        <div className="rounded-xl backdrop-blur-lg p-6 md:p-12 w-full">
          <h2 className="text-xl md:text-3xl text-center text-gray-900 dark:text-white leading-tight">
            Real Voices, Real Results
          </h2>
        </div>
      </section>

      {/* ─── 2️⃣ CAROUSEL OUTSIDE BLUR, FLOATING ABOVE WAVE ──── */}
      <section
        className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-20"
      >
        <div className="overflow-hidden relative pt-3 pb-10" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className="min-w-full md:min-w-[33.3333%] px-4 flex justify-center"
                >
                  <div
                    className={`rounded-xl backdrop-blur-lg border-2 border-transparent
                      bg-white dark:bg-zinc-900 p-6 flex flex-col w-full max-w-sm
                      transition-transform duration-500 ${
                        isActive
                          ? "scale-100 md:scale-105 border-blue-400 shadow-lg opacity-100"
                          : "scale-100 md:scale-90 opacity-60"
                      }`}
                  >
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {review.name}
                      <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
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

        {/* Arrows (desktop) */}
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0
                     bg-white/40 dark:bg-zinc-800/40 border p-2 rounded-full z-20"
          aria-label="Prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0
                     bg-white/40 dark:bg-zinc-800/40 border p-2 rounded-full z-20"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Arrows (mobile) */}
        <div className="flex md:hidden justify-center gap-4 z-20">
          <button onClick={scrollPrev} className="p-2 rounded-full bg-white/40 dark:bg-zinc-800/40">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} className="p-2 rounded-full bg-white/40 dark:bg-zinc-800/40">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
} 

export default ReviewsCarousel;
