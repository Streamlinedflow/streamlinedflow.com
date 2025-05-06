// HowItWorksSection.tsx
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection"; // Ensure this is correctly imported

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

const HowItWorks= () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <section id="how-it-works" className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>PROCESS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                How It Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)]"
                >
                  <div className="text-[#38b6ff] font-bold text-xl mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p>{item.description}</p>
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
