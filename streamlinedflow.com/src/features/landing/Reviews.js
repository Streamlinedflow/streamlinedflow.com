"use client";

import React, { useState, useEffect } from "react";
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
      "A sleek, modern solution that’s elevated our client communications and reporting to the next level.",
  },
  {
    name: "Ethan Wilson",
    review:
      "A sleek, modern solution that’s elevated our client communications and reporting to the next level.",
  },
];

export default function ReviewCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    handler(mq);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="py-4">
      <h2 className="text-xl md:text-3xl text-center leading-tight text-gray-900 dark:text-white">
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
        <CarouselContent className="h-[250px] md:h-full">
          {reviews.map((t, i) => (
            <CarouselItem
              key={i}
              className={`px-4 ${
                isMobile
                  ? "basis-1/4"
                  : "basis-1/4 md:basis-1/2 lg:basis-1/3"
              }`}
            >
              <div className="flex flex-col py-6 sm:p-6 h-full justify-between">
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
