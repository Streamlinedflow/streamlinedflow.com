// components/ServicesSection.tsx
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection"; // Assuming you've already created this

const Services = () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <section id="services" className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>SERVICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto py-2 px-1">
                What our clients get
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Custom AI Agent Solutions */}
              <Link href="/services?service=autonomous-agent" className="block">
                <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)] h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-lg flex items-center justify-center">
                      <div style={{ color: 'var(--color-accent-2)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">Custom AI Automation systems</h3>
                  </div>
                  <p className="text-gray-300 mb-6">Scalable, affordable systems to grow your company on autopilot.</p>
                  <span className="text-[#38b6ff] hover:underline">Read more</span>
                </div>
              </Link>
              {/* Custom Chatbot Solutions */}
              <Link href="/services?service=chatbot" className="block">
                <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)] h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-lg flex items-center justify-center">
                      <div style={{ color: 'var(--color-accent-2)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">Custom Chatbot Development</h3>
                  </div>
                  <p className="text-gray-300 mb-6">Enhance user engagement and streamline interactions with our custom chatbot development services.</p>
                  <span className="text-[#38b6ff] hover:underline">Read more</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Services;
