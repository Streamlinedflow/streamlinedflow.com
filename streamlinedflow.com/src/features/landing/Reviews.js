"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      "A sleek, modern solution that's elevated our client communications and reporting to the next level.",
  },
  {
    name: "Ethan Wilson",
    review:
      "A sleek, modern solution that's elevated our client communications and reporting to the next level.",
  },
];

export default function ReviewCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [cardHeight, setCardHeight] = useState(250);
  const cardRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    handler(mq);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Dynamic height calculation for mobile
  useEffect(() => {
    if (isMobile && cardRef.current) {
      const updateHeight = () => {
        const cardElement = cardRef.current;
        if (cardElement) {
          // Get the actual height of the card content
          const rect = cardElement.getBoundingClientRect();
          setCardHeight(rect.height + 20); // Add some padding
        }
      };

      // Update height on mount and resize
      updateHeight();
      window.addEventListener('resize', updateHeight);
      
      // Use setTimeout to ensure content is fully rendered
      const timer = setTimeout(updateHeight, 100);

      return () => {
        window.removeEventListener('resize', updateHeight);
        clearTimeout(timer);
      };
    }
  }, [isMobile]);

  return (
    <div className="py-4 relative z-20">
      <h2 className="text-xl md:text-3xl text-center leading-tight text-gray-900 dark:text-white mb-4">
        Real Voices, Real Results
      </h2>

      <Carousel
        opts={{
          loop: true,
          align: "start",
          axis: isMobile ? "y" : "x",
        }}
        plugins={[Autoplay({ delay: 8000 })]}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        <CarouselContent 
          className={` ${
            isMobile 
              ? `` 
              : "h-full"
          }`}
          style={isMobile ? { height: `${cardHeight}px` } : {}}
        >
          {reviews.map((t, i) => (
            <CarouselItem
              key={i}
              className={`${
                isMobile
                  ? "basis-full" // Changed from basis-1/4 to basis-full for mobile
                  : "basis-1/4 md:basis-1/2 lg:basis-1/3 px-4"
              }`}
              ref={i === 0 ? cardRef : null} // Reference first card for height calculation
            >
              <div className="flex flex-col pt-6 sm:p-6 h-full justify-between dark:bg-zinc-900 bg-gray-50 rounded-xl px-4 backdrop-blur-lg relative z-20">
                <q className="text-gray-600 dark:text-gray-300 flex-1">
                  {t.review}
                </q>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.imgSrc || "/default-avatar.png"}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                    loading="lazy"
                  />
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible sm:visible" />
        <CarouselNext className="invisible sm:visible" />
      </Carousel>
    </div>
  );
}