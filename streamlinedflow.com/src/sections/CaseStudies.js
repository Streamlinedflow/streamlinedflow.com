import Link from 'next/link';
import AnimatedSection from "@/components/AnimatedSection";

const caseStudies = [
  {
    href: "/case-studies/automated-reporting",
    title: "Automated Reporting System",
    description:
      "See how we helped a business automate their client reporting, saving an estimate of 10+ hours per week and improving client satisfaction.",
  },
  {
    href: "/case-studies/call-analysis",
    title: "Call Analysis System",
    description:
      "Learn how we built an AI automation system that transcribes call recordings, analyzes conversations, and delivers management reports with actionable feedback.",
  },
  {
    href: "#",
    title: "Case Study",
    description: "New case study coming soon...",
    isComingSoon: true,
  },
];

const CaseStudies = () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <>
        {/* 1️⃣ Heading + blur-container (behind the wave) */}
        <section
          id="case-studies"
          className="container mx-auto pt-36 px-4 bg-slate-100 dark:bg-transparent relative z-0"
        >
          <div className="rounded-xl backdrop-blur-lg p-12 w-full">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white leading-tight">
                Case Studies
              </h2>
            </div>
          </div>
        </section>

        {/* 2️⃣ Cards Grid (above the wave) */}
        <section className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy, index) => (
                <Link
                  key={index}
                  href={caseStudy.isComingSoon ? "#" : caseStudy.href}
                  className={`block ${caseStudy.isComingSoon ? "opacity-50 pointer-events-none" : ""}`}
                >
                  <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-6 flex flex-col h-full cursor-pointer transition delay-150 duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 group">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
                      {caseStudy.title}
                      <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
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
          </div>
        </section>
      </>
    </AnimatedSection>
  );
};

export default CaseStudies;
