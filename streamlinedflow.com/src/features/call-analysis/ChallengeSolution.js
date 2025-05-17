// features/case-studies/CallAnalysisChallengeSolution.jsx
import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

/**
 * Challenge & Solution section for Call Analysis Case Study
 */
export function CallAnalysisChallengeSolution() {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered>
      <>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          The Challenge & Our Solution
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Challenge */}
          <div className="rounded-2xl bg-white dark:bg-zinc-900 p-12 shadow-md">
            <h3 className="text-3xl font-semibold mb-6">The Challenge</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Management lacked the ability to comprehensively review daily customer
              calls—manual sampling covered only a fraction, missing critical insights.
            </p>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Limited Coverage</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Only a small sample of calls were manually reviewed, missing critical insights.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Inconsistent Feedback</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lack of structured insights hindered staff development and service improvements.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-2xl bg-white dark:bg-zinc-900 p-12 shadow-lg border-l-4 border-blue-300 dark:border-blue-600">
            <h3 className="text-3xl font-semibold mb-6">Our Solution</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We built a fully automated AI pipeline: capturing, transcribing, and analyzing every call, then delivering comprehensive reports—eliminating manual work.
            </p>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">1. Capture</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Seamlessly integrate with call systems to record and store every interaction.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">2. Analyze</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Leverage OpenAI models to extract key metrics, sentiment, and action items.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">3. Report</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Generate and distribute detailed insights to management on schedule.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    </AnimatedSection>
  );
}