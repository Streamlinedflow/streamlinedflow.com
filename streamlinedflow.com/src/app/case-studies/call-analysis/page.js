"use client";

import React from "react";

// Layout
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Footer from "@/components/layout/Footer";

// Common
import NextStepsCTA from "@/components/common/NextStepsCTA";

// Feature sections
import { CallAnalysisHero } from "@/features/call-analysis/Hero";
import { CallAnalysisChallengeSolution } from "@/features/call-analysis/ChallengeSolution";

export default function CaseStudyCallAnalysis() {
  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100`}
    >
      <Navbar />

      <CallAnalysisHero />

      <Container>
        <Section className="mt-32">
          <CallAnalysisChallengeSolution />
        </Section>

        <div className="mt-32">
          <NextStepsCTA />
        </div>

        <Section className="mt-32 pb-32">
          <Footer />
        </Section>
      </Container>
    </div>
  );
}
