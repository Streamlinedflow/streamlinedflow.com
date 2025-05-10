"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using Lucide icons (shadcn-ready)

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
    <section className="container mx-auto py-16 px-4 bg-slate-100 dark:bg-transparent relative">
      <div className="rounded-xl backdrop-blur-lg p-12 w-full relative">
        <h2 className="text-xl md:text-3xl mb-6 text-center text-gray-900 dark:text-white leading-tight">
         Real Voices, Real Results 
        </h2>
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden relative pt-6 pb-10" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    className="min-w-0 flex-[0_0_100%] md:flex-[0_0_33.333%] pl-4 flex justify-center isolation-auto"
                  >
                    <div
                      className={`rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-6 flex flex-col h-full w-full max-w-sm transition-transform duration-500 ${
                        isActive
                          ? "scale-105 border-blue-400 shadow-lg shadow-blue-400/20 opacity-100 z-10"
                          : "scale-90 opacity-60 z-0"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
                        {review.name}
                        <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {review.review}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Left Button */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 left-0 bg-white/40 dark:bg-zinc-800/40 border border-gray-300 dark:border-gray-700 p-2 rounded-full shadow-sm hover:ring-2 hover:ring-blue-400/50 transition-all backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white/40 dark:bg-zinc-800/40 border border-gray-300 dark:border-gray-700 p-2 rounded-full shadow-sm hover:ring-2 hover:ring-blue-400/50 transition-all backdrop-blur-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
