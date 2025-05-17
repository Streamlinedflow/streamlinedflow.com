"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import ServicesCTA from "@/features/services/ServiceCTA";
import Footer from "@/components/layout/Footer";

export default function CaseStudy() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100`}
    >
      <Navbar />

      <main className="space-y-32">
        {/* Hero Banner */}
        <AnimatedSection delay={0.3} type="fadeUp">
          <section className="relative bg-gradient-to-r  from-[#38b6ff] to-[#0080ff] py-32">
            <div className="container mx-auto px-4 text-center text-white space-y-6 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Automated Reporting System
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                We partnered with a growing analytics agency to streamline their
                entire reporting pipeline—from data extraction to
                delivery—saving over 10 hours of manual work each week.
              </p>
            </div>
            {/* Testimonial overlay */}
            <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-lg py-8 px-12">
                  <blockquote className="border-l-4 border-blue-400 dark:border-blue-600 pl-8 italic text-gray-700 dark:text-gray-300 mb-4">
                    “Fast work, great communication, problem understood well and
                    solved.”
                  </blockquote>
                  <cite className="block text-sm font-medium text-gray-800 dark:text-gray-200 text-right">
                    — Vytas Mikulenas, Leansales.tech
                  </cite>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Challenge & Solution - Main Content */}
        {/* Challenge & Solution - Main Content */}
        <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered>
          <section className="container mx-auto px-4 pt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                The Challenge &amp; Our Solution
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Challenge Column with tinted background */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-12 shadow-md">
                <h3 className="text-3xl font-semibold mb-6">The Challenge</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  When we began, the agency’s team was manually collecting data
                  from multiple sources—spreadsheets, databases, and APIs—then
                  formatting each client report by hand. This manual process was
                  error-prone, inconsistent, and consumed over 10 hours of staff
                  time every week.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">
                        Manual Data Gathering
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Pulling data from disparate systems by hand introduced
                        delays and inconsistencies in every report.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">
                        Inconsistent Formatting
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Each report followed slightly different layouts and
                        styles, making it hard to maintain brand consistency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Column with accent border */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-12 shadow-lg border-l-4 border-blue-300 dark:border-blue-500">
                <h3 className="text-3xl font-semibold mb-6">Our Solution</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  We designed and built an end-to-end automated pipeline that
                  extracts data, applies consistent formatting, and delivers
                  client-ready PDFs on a scheduled basis—eliminating manual work
                  entirely.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">1. Target</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Identified essential data points and the ideal layout
                        for client reports.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">2. Customize</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Built reusable templates and robust extraction scripts
                        to format data automatically.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">3. Automate</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Scheduled hands-free generation and distribution via
                        email and secure portals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
        <ServicesCTA/>
        <Footer />
      </main>
    </div>
  );
}
