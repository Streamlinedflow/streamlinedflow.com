import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";

const Services = () => {
  return (
    <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
      <>
        {/* 1️⃣ Heading + blur-container (behind the wave) */}
        <section
          id="services"
          className="container mx-auto pt-36 px-4 bg-slate-100 dark:bg-transparent relative z-0"
        >
          <div className="rounded-xl backdrop-blur-lg p-12 w-full">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900 dark:text-white leading-tight">
                What Our Clients Get
              </h2>
            </div>
          </div>
        </section>

        {/* 2️⃣ Cards + grid (above the wave) */}
        <section className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Custom AI Automation Systems */}
              <Link href="/services?service=autonomous-agent" className="block">
                <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-6 cursor-pointer transition delay-150 duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 group h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
                    Custom AI Automation Systems
                    <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                    Scalable, affordable systems to grow your company on autopilot.
                  </p>
                  <span className="text-blue-500 hover:underline mt-auto">
                    Read more
                  </span>
                </div>
              </Link>

              {/* Custom Chatbot Development */}
              <Link href="/services?service=chatbot" className="block">
                <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-6 cursor-pointer transition delay-150 duration-400 transform hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 group h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white relative inline-block">
                    Custom Chatbot Development
                    <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-2 rounded-full"></span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-6">
                    Enhance user engagement and streamline interactions with our custom chatbot development services.
                  </p>
                  <span className="text-blue-500 hover:underline mt-auto">
                    Read more
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </>
    </AnimatedSection>
  );
};

export default Services;
