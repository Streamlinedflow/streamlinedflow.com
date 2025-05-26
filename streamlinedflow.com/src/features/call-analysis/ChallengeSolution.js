import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  PhoneMissed,
  Maximize,
  ChartBar,
  FileText,
  Shuffle,
} from "lucide-react";

export function CallAnalysisChallengeSolution() {
  const cardClasses =
    "rounded-2xl bg-white dark:bg-zinc-900 p-12 shadow-lg hover:shadow-xl transition-shadowt";
  const iconWrapper = (Icon) => (
    <div className="p-3 rounded-full bg-sky-50 dark:bg-sky-900 text-sky-600 dark:text-sky-400 mr-4">
      <Icon className="w-6 h-6" />
    </div>
  );

  const challengeItems = [
    {
      title: "Limited Coverage",
      text: "Only a small sample of calls were manually reviewed, missing critical insights.",
      Icon: PhoneMissed,
    },
    {
      title: "Inconsistent Feedback",
      text: "Lack of structured insights hindered staff development and service improvements.",
      Icon: Shuffle,
    },
  ];

  const solutionItems = [
    {
      title: "1. Capture",
      text: "Seamlessly integrate with call systems to record and store every interaction.",
      Icon: Maximize,
    },
    {
      title: "2. Analyze",
      text: "Leverage OpenAI models to extract key metrics, sentiment, and action items.",
      Icon: ChartBar,
    },
    {
      title: "3. Report",
      text: "Generate and distribute detailed insights to management on schedule.",
      Icon: FileText,
    },
  ];

  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        The Challenge &amp; Our Solution
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Challenge */}
        <div
          className={cardClasses}
          style={{
            borderImage: "linear-gradient(to bottom, #38b6ff, #0066cc) 1",
          }}
        >
          <h3 className="text-3xl font-semibold mb-6">The Challenge</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Management lacked the ability to comprehensively review daily customer
            calls—manual sampling covered only a fraction, missing critical insights.
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
        <div
          className={cardClasses}
          style={{
            borderImage: "linear-gradient(to bottom, #38b6ff, #0066cc) 1",
          }}
        >
          <h3 className="text-3xl font-semibold mb-6">Our Solution</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            We built a fully automated AI pipeline: capturing, transcribing, and
            analyzing every call, then delivering comprehensive reports—eliminating
            manual work.
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
