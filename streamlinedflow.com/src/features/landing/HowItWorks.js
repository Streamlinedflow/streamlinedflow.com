import AnimatedSection from "@/components/common/AnimatedSection";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We review your current workflows and identify high growth opportunities.",
  },
  {
    step: "02",
    title: "Custom Strategy",
    description:
      "We create a tailored automation strategy for your business, optimized to your needs.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We set up the systems, provide documentation, and train your team on the workflows.",
  },
];

const HowItWorks = () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <>
        {/* 1️⃣ Heading + blur-container (behind the wave) */}
        <section
          id="how-it-works"
          className="container mx-auto pt-36 px-4 bg-slate-100 dark:bg-transparent relative z-0"
        >
          <div className="rounded-xl backdrop-blur-lg p-12 w-full">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl mb-16 text-center text-gray-900 dark:text-white leading-tight">
                How We Deliver
              </h2>
            </div>
          </div>
        </section>

        {/* 2️⃣ Steps Content (above the wave) */}
        <section className="container mx-auto px-4 -mt-16 relative z-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-12">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className={`flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } items-center gap-8`}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 text-center">
                    <div className="text-5xl md:text-7xl bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text drop-shadow-sm">
                      {item.step}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-8 shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.02]">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {item.title}
                      <span className="block h-1 w-16 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </AnimatedSection>
  );
};

export default HowItWorks;
