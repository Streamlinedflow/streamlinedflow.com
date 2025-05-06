"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import CaseStudies from "@/sections/CaseStudies";
import HowItWorks from "@/sections/HowItWorks";
import BookCall from "@/sections/BookCall";
import ContactForm from "@/sections/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    company: "",
    budget: "",
    services: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.budget || !formData.services) {
      setSubmitStatus({
        success: false,
        message: "Please select a budget and service option.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      // Replace with your Make.com webhook URL
      const webhookUrl =
        "https://hook.us2.make.com/tlfdnyalk8nvsujlwvx4dot37o8r39v9";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thanks for your submission! We'll be in touch soon.",
        });
        // Reset form data
        setFormData({
          name: "",
          email: "",
          role: "",
          company: "",
          budget: "",
          services: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message:
            "Something went wrong. Please try again or contact us directly.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add wave animation
  useEffect(() => {
    const canvas = document.getElementById("waveCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let time = 0;
    let animationFrameId;
    let rect;

    const resize = () => {
      rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);
    };

    const drawWave = (baseY, amplitude, frequency, speed, opacity) => {
      ctx.beginPath();

      // Check if we're in light mode by looking at data-theme attribute
      const isLightMode =
        document.documentElement.getAttribute("data-theme") === "light";

      // Use different colors for dark and light modes
      ctx.strokeStyle = isLightMode
        ? `rgba(0, 102, 204, ${opacity})`
        : `rgba(56, 182, 255, ${opacity})`;

      ctx.lineWidth = 1;

      for (let x = 0; x < rect.width; x += 1) {
        const y =
          baseY +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 1.5) *
            (amplitude * 0.5);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const animate = () => {
      if (!rect) return;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Two intersecting waves in the middle
      drawWave(rect.height * 0.5, 40, 0.003, 0.7, 0.15); // First wave
      drawWave(rect.height * 0.5, 35, 0.004, -0.5, 0.15); // Second wave going the opposite direction

      time += 0.015;
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    // Add a theme change observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          // Force redraw when theme changes
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
          animate();
        }
      });
    });

    // Observe the html element for attribute changes
    observer.observe(document.documentElement, { attributes: true });

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <AnimatedBackground />
      {/* Background Canvas */}
      <canvas
        id="waveCanvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.9 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero/>
        <Services/>
        <CaseStudies/>
        <HowItWorks/>
        <BookCall/>
        <ContactForm/>
        <Footer/>
      </div>
    </main>
  );
}
