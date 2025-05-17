import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function AutomatedReportingHero() {
  return (
    <AnimatedSection delay={0.3} type="fadeUp">
      {/* Banner */}
      <div className="relative bg-gradient-to-r from-[#38b6ff] to-[#0080ff] py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-center text-white">
          Automated Reporting System
        </h1>
        <p className="mt-6 text-lg md:text-xl opacity-90 text-center text-white">
          We partnered with a growing analytics agency to streamline their entire 
          reporting pipeline—from data extraction to delivery—saving over 10 hours 
          of manual work each week.
        </p>

        {/* Testimonial */}
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
          <blockquote className="mx-auto max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl shadow-lg py-8 px-12 italic text-gray-700 dark:text-gray-300">
            “Fast work, great communication, problem understood well and solved.”
            <cite className="block mt-4 text-right font-medium text-gray-800 dark:text-gray-200">
              — Vytas Mikulenas, Leansales.tech
            </cite>
          </blockquote>
        </div>
      </div>
    </AnimatedSection>
  );
}
