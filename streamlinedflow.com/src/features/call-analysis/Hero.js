import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

export function CallAnalysisHero() {
  return (
    <AnimatedSection delay={0.3} type="fadeUp">
      <div className="relative bg-gradient-to-r from-[#38b6ff] to-[#0080ff] py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center text-white">
          Call Analysis System
        </h1>
        <p className="mt-6 px-2 text-lg md:text-xl opacity-90 text-center text-white">
          How we transformed a client’s call monitoring process with an AI-driven
          solution that transcribes conversations, analyzes insights, and drives
          actionable feedback.
        </p>
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
          <blockquote className="mx-auto max-w-3xl bg-white dark:bg-zinc-800 sm:rounded-3xl shadow-lg p-12 italic text-gray-700 dark:text-gray-300">
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