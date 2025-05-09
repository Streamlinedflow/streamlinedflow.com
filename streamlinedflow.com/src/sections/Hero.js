// components/HeroSection.tsx
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection delay={0.4} type="fadeUp">
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">
              Streamline Your Business with{" "}
            </span>
            <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">
              AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Custom AI solutions that automate your workflows and enhance productivity
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/services"
              className="px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#38b6ff] to-[#0080ff] shadow hover:from-[#0080ff] hover:to-[#38b6ff] transition-all"
            >
              Explore Services
            </Link>
            <Link
              href="/#case-studies"
              className="px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#38b6ff] to-[#0080ff] shadow hover:from-[#0080ff] hover:to-[#38b6ff] transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
