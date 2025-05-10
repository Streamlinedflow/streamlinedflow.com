import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We review your current workflows and identify high growth oportunities.",
  },
  {
    step: "02",
    title: "Custom Strategy",
    description:
      "We create a tailored automation strategy for your business",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We set up the systems and train your team on the workflows.",
  },
];

const HowItWorks = () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <section id="how-it-works" className="container mx-auto py-16 px-4 bg-slate-100 dark:bg-transparent relative ">
        <div className="rounded-xl backdrop-blur-lg p-12 w-full">
          <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-start text-gray-900 dark:text-white leading-tight">
              How it Works 
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-slate-100 dark:bg-gray-900/50 bg-clip-padding p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 group"
                >
                  {/* Step number - BIG and gradient */}
                  <div className="text-2xl font-extrabold mb-3 bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text ">
                    {item.step}
                  </div>
                  {/* Title with gradient underline */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
                    {item.title}
                    <span className="block h-1 w-12 bg-gradient-to-r from-[#38b6ff] to-[#0066cc] mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default HowItWorks;
