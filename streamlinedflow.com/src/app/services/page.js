"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import AnimatedSection from "@/components/common/AnimatedSection";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CustomAgentService from "@/features/services/CustomAgent";
import NextStepsCTA from "@/components/common/NextStepsCTA";
import ChatbotDevelopmentService from "@/features/services/CustomChatbot";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-950 dark:bg-zinc-950 dark:text-gray-50">
      <Navbar />
      <main className="min-h-screen">
        <Container>

          <Section>
            <CustomAgentService />
          </Section>

          <Section>
            <ChatbotDevelopmentService />
          </Section>

          <Section>
            <NextStepsCTA />
          </Section>

          <Section>
            <Footer />
          </Section>

        </Container>
      </main>
    </div>
  );
}
