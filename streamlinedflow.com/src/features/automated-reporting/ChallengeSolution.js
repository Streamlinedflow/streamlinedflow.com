import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function AutomatedReportingChallengeSolution() {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered>
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        The Challenge &amp; Our Solution
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Challenge */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 p-12 shadow-md">
          <h3 className="text-3xl font-semibold mb-6">The Challenge</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            When we began, the agency’s team was manually collecting data from 
            multiple sources—spreadsheets, databases, and APIs—then formatting each 
            client report by hand. This process was error-prone, inconsistent, and 
            consumed over 10 hours of staff time every week.
          </p>
          <ul className="space-y-8">
            {[
              {
                title: "Manual Data Gathering",
                text: "Pulling data from disparate systems by hand introduced delays and inconsistencies in every report.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18" />
                    <rect x="6" y="12" width="3" height="6" />
                    <rect x="11" y="8" width="3" height="10" />
                    <rect x="16" y="4" width="3" height="14" />
                  </svg>
                ),
                bg: "blue",
              },
              {
                title: "Inconsistent Formatting",
                text: "Each report followed slightly different layouts and styles, making it hard to maintain brand consistency.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                bg: "purple",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start">
                <div className={`p-3 rounded-full bg-${item.bg}-100 dark:bg-${item.bg}-900 text-${item.bg}-600 mr-4`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 p-12 shadow-lg border-l-4 border-blue-300 dark:border-blue-500">
          <h3 className="text-3xl font-semibold mb-6">Our Solution</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            We designed and built an end-to-end automated pipeline that extracts data, 
            applies consistent formatting, and delivers client-ready PDFs on a 
            scheduled basis—eliminating manual work entirely.
          </p>
          <ul className="space-y-8">
            {[
              {
                title: "1. Target",
                text: "Identified essential data points and the ideal layout for client reports.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21h8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17v4" />
                  </svg>
                ),
              },
              {
                title: "2. Customize",
                text: "Built reusable templates and robust extraction scripts to format data automatically.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16v14H4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11h16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5v14" />
                  </svg>
                ),
              },
              {
                title: "3. Automate",
                text: "Scheduled hands-free generation and distribution via email and secure portals.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                  </svg>
                ),
              },
            ].map((step) => (
              <li key={step.title} className="flex items-start">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 mr-4">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{step.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
