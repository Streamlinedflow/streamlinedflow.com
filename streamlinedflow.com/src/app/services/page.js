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
import ServicesCTA from "@/features/services/ServiceCTA";
import ChatbotDevelopmentService from "@/features/services/CustomChatbot";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-950 dark:bg-zinc-950 dark:text-gray-50">
      <Navbar />
      <main className="min-h-screen">
        <CustomAgentService />
        <ChatbotDevelopmentService />
        <ServicesCTA />
        <Footer />
      </main>
    </div>
  );
}
