import React from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';

export default function CustomAgentService() {
  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Custom AI Agents
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Transform your business processes with intelligent automations.
        </p>
      </div>

      {/* 3×3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_1fr_auto] gap-16">
        {/* Features */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="space-y-3">
            {[
              'Intelligent Decision-Making Agents',
              'Task Automation',
              'Seamless Integration & Scalable Efficiency',
            ].map((text) => (
              <li key={text} className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15.999a1 1 0 01-1.414 0L3.293 12.293a1 1 0 011.414-1.414L7 13.172l8.293-8.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
          <ul className="space-y-3">
            {[
              'Reduced manual intervention',
              '24/7 operational capability',
              'Continuous improvement',
            ].map((text) => (
              <li key={text} className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15.999a1 1 0 01-1.414 0L3.293 12.293a1 1 0 011.414-1.414L7 13.172l8.293-8.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <Link
            href="/services?service=custom-agent-development"
            className="mt-auto px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#38b6ff] to-[#0080ff] shadow hover:from-[#0080ff] hover:to-[#38b6ff] transition-all"
          >
            Learn More →
          </Link>
        </div>

        {/* Image Placeholder */}
        <div className="md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 flex items-center justify-center">
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-300">
              Image Placeholder
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}