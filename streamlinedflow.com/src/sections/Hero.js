// components/HeroSection.tsx
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection"; // Assuming you've already created this

export default function Hero() {
  return (
    <AnimatedSection delay={0.4} type="fadeUp">
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">Streamline Your Business with </span>
            <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Custom AI solutions that automate your workflows and enhance productivity
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/services" className="btn-gradient">
              Explore Services
            </Link>
            <Link href="/#case-studies" className="btn-gradient">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
