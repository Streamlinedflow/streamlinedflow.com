import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  BarChart2,
  Database,
  ArrowDownWideNarrow,
  Crosshair,
  Cog,
  Clock,
} from "lucide-react";

export default function AutomatedReportingChallengeSolution() {
  const challengeItems = [
    {
      title: "Manual Data Gathering",
      text: "Pulling data from disparate systems by hand introduced delays and inconsistencies in every report.",
      Icon: Database,
    },
    {
      title: "Inconsistent Formatting",
      text: "Each report followed slightly different layouts and styles, making it hard to maintain brand consistency.",
      Icon: ArrowDownWideNarrow,
    },
  ];

  const solutionItems = [
    {
      title: "1. Target",
      text: "Identified essential data points and the ideal layout for client reports.",
      Icon: Crosshair,
    },
    {
      title: "2. Customize",
      text: "Built reusable templates and robust extraction scripts to format data automatically.",
      Icon: Cog,
    },
    {
      title: "3. Automate",
      text: "Scheduled hands-free generation and distribution via email and secure portals.",
      Icon: Clock,
    },
  ];

  const iconWrapper = (Icon) => (
    <div className="p-3 rounded-full bg-sky-50 dark:bg-sky-900 text-sky-600 dark:text-sky-400 mr-4">
      <Icon className="w-6 h-6" />
    </div>
  );

  const cardClasses =
    "rounded-2xl bg-white dark:bg-zinc-900 p-12 shadow-lg hover:shadow-xl transition-shadow";

  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        The Challenge &amp; Our Solution
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Challenge */}
        <div className={cardClasses}>
          <h3 className="text-3xl font-semibold mb-6">The Challenge</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            When we began, the agency’s team was manually collecting data from
            multiple sources—spreadsheets, databases, and APIs—then formatting
            each client report by hand. This process was error-prone,
            inconsistent, and consumed over 10 hours of staff time every week.
          </p>
          <ul className="space-y-8">
            {challengeItems.map(({ title, text, Icon }) => (
              <li key={title} className="flex items-start">
                {iconWrapper(Icon)}
                <div>
                  <h4 className="text-xl font-bold mb-1">{title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className={cardClasses}>
          <h3 className="text-3xl font-semibold mb-6">Our Solution</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            We designed and built an end-to-end automated pipeline that extracts
            data, applies consistent formatting, and delivers client-ready PDFs
            on a scheduled basis—eliminating manual work entirely.
          </p>
          <ul className="space-y-8">
            {solutionItems.map(({ title, text, Icon }) => (
              <li key={title} className="flex items-start">
                {iconWrapper(Icon)}
                <div>
                  <h4 className="text-xl font-bold mb-1">{title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}
