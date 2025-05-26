"use client";

// Core/Layout
import Navbar      from "@/components/layout/Navbar";
import Footer      from "@/components/layout/Footer";
import Container   from "@/components/layout/Container";
import Section     from "@/components/layout/Section";

// Service feature sections
import CustomAgentService          from "@/features/services/CustomAgent";
import ChatbotDevelopmentService   from "@/features/services/CustomChatbot";

// Call-to-Action
import NextStepsCTA                from "@/components/common/NextStepsCTA";


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-950 dark:bg-zinc-950 dark:text-gray-50">
      <Navbar />
      <main className="min-h-screen">
        <Container>

          <Section className="w-full max-w-6xl mx-auto">
            <CustomAgentService />
          </Section>

          <Section className="w-full max-w-6xl mx-auto">
            <ChatbotDevelopmentService />
          </Section>

          <div className="mt-32">
            <NextStepsCTA />
          </div>

          <Section>
            <Footer />
          </Section>

        </Container>
      </main>
    </div>
  );
}
