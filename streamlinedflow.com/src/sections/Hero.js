import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection delay={0.4} type="fadeUp">
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-left">
            {/* First heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight tracking-tight">
              <span className="block">
                Automate
              </span>
            </h1>

            {/* Second heading with Logo */}
            <div className="flex items-center mb-4 md:ml-38">
              <Image
                src="/logo.svg"
                alt="SL Flow Logo"
                width={24}
                height={24}
                className="w-32 h-32 mr-4"
              />
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight italic">
                <span className="block bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">
                  Streamline
                </span>
              </h1>
            </div>

            {/* Scale + description + button */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mt-4 ml-18">
              {/* Left: Scale */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-6 lg:mb-0">
                <span className="block">
                  Scale
                </span>
              </h1>

              {/* Right: Description + Button */}
              <div className="mt-6 lg:mt-0 max-w-xl lg:ml-40 text-left">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Unlock your business potential with custom AI solutions
                  designed to automate your workflows and drive efficiency.
                </p>
                <Link
                  href="/services"
                  className="inline-block rounded-lg bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 px-6 py-3 shadow transition-all hover:ring-2 hover:ring-blue-400/50 text-lg font-semibold"
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
