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
import AutomatedReportingHero from "@/features/automated-reporting/Hero";
import AutomatedReportingChallengeSolution from "@/features/automated-reporting/ChallengeSolution";

export default function CaseStudy() {
  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100`}
    >
      <Navbar />
      <AutomatedReportingHero />

      <Container>
        <Section className="mt-32">
          <AutomatedReportingChallengeSolution />
        </Section>

        <div className="mt-32">
          <NextStepsCTA />
        </div>

        <Section>
          <Footer />
        </Section>
      </Container>
    </div>
  );
}
