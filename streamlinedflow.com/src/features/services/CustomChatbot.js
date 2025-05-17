import React from "react";
import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";

const features = [
  "Natural language processing",
  "Multi-channel integration",
  "Custom workflow automation",
];
const benefits = [
  "24/7 customer support",
  "Reduced support costs",
  "Improved response times",
];

export default function ChatbotDevelopmentService() {
  return (
    <AnimatedSection delay={0.2} type="fadeUp">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Chatbot Development
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Custom chatbot solutions that enhance customer experience and streamline support operations.
        </p>
      </div>

      {/* Grid: Features, Benefits, CTA, Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_1fr_auto] gap-16">
        {/* Features */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15.999a1 1 0 01-1.414 0L3.293 12.293a1 1 0 011.414-1.414L7 13.172l8.293-8.293a1 1 0 011.414 0z" />
                </svg>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
          <ul className="space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15.999a1 1 0 01-1.414 0L3.293 12.293a1 1 0 011.414-1.414L7 13.172l8.293-8.293a1 1 0 011.414 0z" />
                </svg>
                <span className="ml-3">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <Link
            href="/services?service=chatbot-development"
            className="mt-auto px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#38b6ff] to-[#0080ff] shadow hover:from-[#0080ff] hover:to-[#38b6ff] transition-all"
          >
            Learn More →
          </Link>
        </div>

        {/* Image Placeholder */}
        <div className="md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 flex items-center justify-center">
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-300">Image Placeholder</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
