import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We analyze your current systems and identify growth opportunities.'
  },
  {
    step: '02',
    title: 'Custom Strategy',
    description: 'We create a tailored automation strategy for your business.'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We implement the systems and train your team on the new workflows.'
  }
];

const HowItWorks = () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <section id="how-it-works" className="container mx-auto py-16 px-4">
        <div className="rounded-xl backdrop-blur-lg border bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-12 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="absolute left-0 top-0 inline-block px-4 py-2 rounded-full mb-2 bg-blue-100 dark:bg-blue-900 text-blue-500 font-semibold">
                PROCESS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text hover:underline underline-offset-8">
                How It Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl backdrop-blur-lg border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-blue-400/50"
                >
                  <div className="text-blue-500 font-bold text-xl mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
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
