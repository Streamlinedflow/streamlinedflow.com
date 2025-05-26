"use client";

// Core/UI
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Layout wrappers
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

// Background canvas
import WaveCanvas from "@/components/common/WaveCanvas";

// Hero & feature sections
import Hero from "@/features/landing/Hero";
import ReviewCarousel from "@/features/landing/Reviews";
import Services from "@/features/landing/Services";
import CaseStudies from "@/features/landing/CaseStudies";
import HowItWorks from "@/features/landing/HowItWorks";
import BookCall from "@/features/landing/BookCall";
import ContactForm from "@/features/landing/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-950 dark:bg-zinc-950 dark:text-gray-50" id="home">
      <Navbar />
      <main>
        <WaveCanvas />
        <Container>
          <div className="flex flex-col min-h-screen pb-32 py-12"> 
            <div className="flex flex-1 items-center justify-center px-6 sm:px-12">
              <Hero />
            </div>

            <div className="py-12 px-6 sm:px-12 mx-auto sm:max-w-screen justify-self-end">
              <ReviewCarousel />
            </div>
          </div>

          <Section>
            <Services />
          </Section>

          <Section id="case-studies">
            <CaseStudies />
          </Section>

          <Section id="how-it-works">
            <HowItWorks />
          </Section>

          <Section id="book-call">
            <BookCall />
          </Section>

          <Section id="contact">
            <ContactForm />
          </Section>

          <Section className="pb-32">
            <Footer />
          </Section>
        </Container>
      </main>
    </div>
  );
}
