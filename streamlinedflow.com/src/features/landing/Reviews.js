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
    name: "Vytas Mikulenas, Leansales.tech",
    review:
      '"Fast work, great communication, problem understood well and solved."',
    imgSrc: "/vytas_m.png",
  },
  {
    name: "coming soon...",
    review: "",
    imgSrc: "/logo.svg",
  },
  {
    name: "coming soon...",
    review: "",
    imgSrc: "/logo.svg",
  },
  {
    name: "coming soon...",
    review: "",
    imgSrc: "/logo.svg",
  },
  {
    name: "coming soon...",
    review: "",
    imgSrc: "/logo.svg",
  },
  {
    name: "coming soon...",
    review: "",
    imgSrc: "/logo.svg",
  },
  {
    name: "coming soon...",
    review: "",
    imgSrc: "/logo.svg",
  },
];

export default function ReviewCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [cardHeight, setCardHeight] = useState(250);
  const cardContentRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    handler(mq);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // measure only the inner card content on mobile
  useEffect(() => {
    if (!isMobile) return;

    const updateHeight = () => {
      const el = cardContentRef.current;
      if (el) {
        setCardHeight(el.offsetHeight + 20);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    const timer = setTimeout(updateHeight, 100);

    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timer);
    };
  }, [isMobile]);

  return (
    <div className="py-4 relative z-20">
      <h2 className="text-xl md:text-3xl text-center leading-tight text-gray-900 dark:text-white mb-4">
       What Our Clients Are Saying 
      </h2>

      <Carousel
        opts={{ loop: true, align: "start", axis: isMobile ? "y" : "x" }}
        plugins={[Autoplay({ delay: 8000 })]}
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        <CarouselContent
          className={isMobile ? "" : "h-full"}
          style={isMobile ? { height: `${cardHeight}px` } : {}}
        >
          {reviews.map((t, i) => (
            <CarouselItem
              key={i}
              className={`${
                isMobile ? "" : "basis-1/4 md:basis-1/2 lg:basis-1/3 px-4"
              }`}
            >
              {/* measure this exact div */}
              <div
                ref={i === 0 ? cardContentRef : null}
                className={`flex flex-col px-4 pt-4 pb-2 dark:bg-zinc-900 bg-white rounded-xl backdrop-blur-lg relative z-20 ${
                  isMobile ? "justify-start" : "h-full justify-between"
                }`}
              >
                <p className="text-black dark:text-white mb-3 md:flex-1">
                  {t.review}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.imgSrc || "/default-avatar.png"}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                    loading="lazy"
                  />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {t.name}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={isMobile ? "invisible" : ""} />
        <CarouselNext className={isMobile ? "invisible" : ""} />
      </Carousel>
    </div>
  );
}
