"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import AnimatedSection from "@/components/common/AnimatedSection";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function ServicesPage() {
  const cards = [
    {
      title: "Custom Agent Development",
      description:
        "Transform your business processes with intelligent automations.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      features: [
        "Intelligent Decision-Making Agents",
        "Task Automation",
        "Seamless Integration & Scalable Efficiency",
      ],
      benefits: [
        "Reduced manual intervention",
        "24/7 operational capability",
        "Continuous improvement",
      ],
    },
    {
      title: "Chatbot Development",
      description:
        "Custom chatbot solutions that enhance customer experience and streamline support operations.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
      features: [
        "Natural language processing",
        "Multi-channel integration",
        "Custom workflow automation",
      ],
      benefits: [
        "24/7 customer support",
        "Reduced support costs",
        "Improved response times",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-950 dark:bg-zinc-950 dark:text-gray-50">
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <AnimatedSection delay={0.3} type="fadeUp">
          <section
            id="hero"
            className="container mx-auto px-4 pt-26 relative z-20 pb-16"
          >
            <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-clip-padding p-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text drop-shadow-sm">
                  Our Services
                </h1>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  We&apos;ll help you transform your business with cutting-edge
                  AI solutions.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 2️⃣ Cards + grid (above the wave) */}
        <section className="container mx-auto px-4 mt-8 md:-mt-8 relative z-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Custom AI Automation Systems */}
              <Link href="/services?service=autonomous-agent" className="block">
                <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-6 cursor-pointer transition delay-150 duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 group h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
                    Custom AI Automation Systems
                    <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                    Scalable, affordable systems to grow your company on
                    autopilot.
                  </p>
                  <span className="text-blue-500 hover:underline mt-auto">
                    Read more
                  </span>
                </div>
              </Link>

              {/* Custom Chatbot Development */}
              <Link href="/services?service=chatbot" className="block">
                <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-6 cursor-pointer transition delay-150 duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 group h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
                    Custom Chatbot Development
                    <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                    Enhance user engagement and streamline interactions with our
                    custom chatbot development services.
                  </p>
                  <span className="text-blue-500 hover:underline mt-auto">
                    Read more
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered>
          <section
            id="cta"
            className="container mx-auto pt-36 px-4 bg-slate-100 dark:bg-transparent relative z-0"
          >
            <div className="rounded-xl backdrop-blur-lg py-12 w-full">
              <div className="max-w-4xl mx-auto text-center">
                <div className="accent-tag mb-4">
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-accent-2)" }}
                  >
                    NEXT STEPS
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text hover-gradient-line">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Let&rsquo;s discuss how we can help streamline your operations
                  with our custom solutions.
                </p>
                <Link
                  href="/#book-call"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-white uppercase text-sm font-semibold"
                >
                  book a call
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <Footer />
      </main>
    </div>
  );
}
