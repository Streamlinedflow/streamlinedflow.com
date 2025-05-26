import React from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';

export default function Services() {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered>
      <>
        {/* Heading */}
        <div className="rounded-xl w-full relative z-20">
          <h2 className="text-4xl md:text-5xl mb-16 text-center text-gray-900 dark:text-white leading-tight">
            What Our Clients Get
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative z-20">
          <Link href="/services?service=autonomous-agent" className="block">
            <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 p-6 flex flex-col h-full cursor-pointer transition-transform duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white inline-block">
                Custom AI Automation Systems
                <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" />
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                Scalable, affordable systems to grow your company on autopilot.
              </p>
              <span className="text-blue-500 hover:underline mt-auto">Read more</span>
            </div>
          </Link>

          <Link href="/services?service=chatbot" className="block">
            <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 p-6 flex flex-col h-full cursor-pointer transition-transform duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white inline-block">
                Custom Chatbot Development
                <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full" />
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                Enhance user engagement and streamline interactions with our custom chatbot development services.
              </p>
              <span className="text-blue-500 hover:underline mt-auto">Read more</span>
            </div>
          </Link>
        </div>
      </>
    </AnimatedSection>
  );
}