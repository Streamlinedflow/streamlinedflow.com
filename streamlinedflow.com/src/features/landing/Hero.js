import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection delay={0.4} type="fadeUp">
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* === Mobile Layout === */}
          <div className="flex flex-col items-center text-center md:hidden">
            <h1 className="text-5xl mb-4 leading-tight tracking-tight">
              Automate
            </h1>
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-5xl leading-tight tracking-tight italic bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">
                Streamline
              </h1>
            </div>
            <h1 className="text-5xl mb-6 leading-tight tracking-tight">
              Scale
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Unlock your business potential with custom AI solutions
              designed to automate your workflows and drive efficiency.
            </p>
            <Link
              href="/services"
              className="inline-block rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 px-6 py-3 shadow transition-all duration-300 ease-in-out text-lg font-semibold hover:shadow-[0_0_25px_rgba(56,182,255,0.6)]"
            >
              Start Today
            </Link>
          </div>

          {/* === Desktop Layout === */}
          <div className="hidden md:block text-left">
            {/* First heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight tracking-tight">
              <span className="block">Automate</span>
            </h1>

            {/* Second heading with Logo */}
            <div className="flex items-center mb-4 md:ml-38">
              <Image
                src="/logo.svg"
                alt="SL Flow Logo"
                width={24}
                height={24}
                className="w-12 h-12 md:w-32 md:h-32 mr-4"
              />
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight italic">
                <span className="block bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">
                  Streamline
                </span>
              </h1>
            </div>

            {/* Scale + description + button */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mt-4 ml-18">
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-6 lg:mb-0">
                <span className="block">Scale</span>
              </h1>

              <div className="mt-6 lg:mt-0 max-w-xl lg:ml-40 text-left">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Unlock your business potential with custom AI solutions
                  designed to automate your workflows and drive efficiency.
                </p>
                <Link
                  href="/services"
                  className="inline-block rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 px-6 py-3 shadow transition-all duration-300 ease-in-out text-lg font-semibold hover:shadow-[0_0_25px_rgba(56,182,255,0.6)]"
                >
                  Start Today
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}
