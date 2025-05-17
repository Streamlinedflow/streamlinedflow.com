import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import CalendlyEmbed from "@/components/common/CalendlyEmbed";

export default function BookCall() {
  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered>
      {/* Heading */}
      <div className="rounded-xl backdrop-blur-lg py-12 bg-slate-100 dark:bg-transparent">
        <h2 className="text-4xl md:text-5xl mb-6 text-center text-gray-900 dark:text-white leading-tight">
          Book a Discovery Call
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base text-center">
          Schedule a free 30-minute call to discuss your business needs and
          explore how we can help automate your workflows.
        </p>
      </div>

      <div>
        <CalendlyEmbed />
      </div>
    </AnimatedSection>
  );
}
