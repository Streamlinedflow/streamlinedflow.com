import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <section id="services" className="container mx-auto py-16 px-4">
        <div className="rounded-xl backdrop-blur-lg border bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-12 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="absolute left-0 top-0 inline-block px-4 py-2 rounded-full mb-2 bg-blue-100 dark:bg-blue-900 text-blue-500 font-semibold">
                SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text hover:underline underline-offset-8">
                What our clients get
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Custom AI Agent Solutions */}
              <Link href="/services?service=autonomous-agent" className="block">
                <div className="rounded-xl backdrop-blur-lg border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-blue-400/50 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-lg flex items-center justify-center text-blue-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Custom AI Automation systems
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Scalable, affordable systems to grow your company on autopilot.
                  </p>
                  <span className="text-blue-500 hover:underline mt-auto">Read more</span>
                </div>
              </Link>

              {/* Custom Chatbot Solutions */}
              <Link href="/services?service=chatbot" className="block">
                <div className="rounded-xl backdrop-blur-lg border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-blue-400/50 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-lg flex items-center justify-center text-blue-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Custom Chatbot Development
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Enhance user engagement and streamline interactions with our custom chatbot development services.
                  </p>
                  <span className="text-blue-500 hover:underline mt-auto">Read more</span>
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
