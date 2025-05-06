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

const CaseStudies= () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <section id="case-studies" className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>
                  CLIENT WORK
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto py-2 px-1">
                Case Studies
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy, index) => (
                <Link
                  key={index}
                  href={caseStudy.isComingSoon ? "#" : caseStudy.href}
                  className={`block ${caseStudy.isComingSoon ? "opacity-40" : ""}`}
                >
                  <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)] flex flex-col h-full">
                    <div>
                      <div className="mb-4">
                        <span className={`text-[#38b6ff] font-semibold ${caseStudy.isComingSoon ? "opacity-50" : ""}`}>
                          {caseStudy.isComingSoon ? "COMING SOON" : "CASE STUDY"}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
                      <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                    </div>
                    {!caseStudy.isComingSoon && (
                      <div className="mt-auto">
                        <span className="text-[#38b6ff] hover:underline">Read more</span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default CaseStudies;
