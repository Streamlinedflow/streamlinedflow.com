import React from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';

const caseStudies = [
  {
    href: '/case-studies/automated-reporting',
    title: 'Automated Reporting System',
    description:
      'See how we helped a business automate their client reporting, saving an estimate of 10+ hours per week and improving client satisfaction.',
  },
  {
    href: '/case-studies/call-analysis',
    title: 'Call Analysis System',
    description:
      'Learn how we built an AI automation system that transcribes call recordings, analyzes conversations, and delivers management reports with actionable feedback.',
  },
  {
    href: '#',
    title: 'Case Study',
    description: 'New case study coming soon...',
    isComingSoon: true,
  },
];

/**
 * CaseStudies component: content-only; outer Container/Section handle layout and spacing.
 */
export default function CaseStudies() {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered>
      <>
        <div className="rounded-xl">
          <h2 className="text-4xl md:text-5xl mb-16 text-center text-gray-900 dark:text-white leading-tight">
            Case Studies
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="relative z-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <Link
              key={index}
              href={caseStudy.isComingSoon ? '#' : caseStudy.href}
              className={`block ${caseStudy.isComingSoon ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 p-6 flex flex-col h-full cursor-pointer transition-transform duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white inline-block">
                  {caseStudy.title}
                  <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full" />
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                  {caseStudy.description}
                </p>
                {!caseStudy.isComingSoon && (
                  <span className="text-blue-500 hover:underline mt-auto">Read more</span>
                )}
                {caseStudy.isComingSoon && (
                  <span className="text-blue-500 mt-auto opacity-70">COMING SOON</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </>
    </AnimatedSection>
  );
}
