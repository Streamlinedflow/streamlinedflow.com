"use client"
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ServiceCardGrid } from '@/components/ServiceCard';

export default function ServicesPage() {
  const cards = [
    {
      title: "Custom Agent Development",
      description: "Transform your business processes with intelligent automations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: [
        "Intelligent Decision-Making Agents",
        "Task Automation",
        "Seamless Integration & Scalable Efficiency"
      ],
      benefits: [
        "Reduced manual intervention",
        "24/7 operational capability",
        "Continuous improvement"
      ]
    },
    {
      title: "Chatbot Development",
      description: "Custom chatbot solutions that enhance customer experience and streamline support operations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      features: [
        "Natural language processing",
        "Multi-channel integration",
        "Custom workflow automation"
      ],
      benefits: [
        "24/7 customer support",
        "Reduced support costs",
        "Improved response times"
      ]
    }
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <AnimatedBackground />
      {/* Navigation */}
      <div className="container mx-auto py-6">
        <nav className="section-container !p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="StreamlinedFlow Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div className="flex items-center logo-text">
                <span>SL</span>
                <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">Flow</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/#case-studies" className="nav-link">Case Studies</Link>
              <Link href="/#how-it-works" className="nav-link">How It Works</Link>
              <Link href="/#contact" className="nav-link">Contact Us</Link>
            </div>
            <Link href="/#contact" className="btn-gradient">
              get in touch
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto section-padding">
        <div className="section-container">
          <div className="accent-tag">
            <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>SERVICES</span>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text text-center hover-gradient-line mx-auto">
                Our Services
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-12 text-center">We&apos;ll help you transform your business with cutting-edge AI solutions.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
          <Suspense fallback={<div>Loading services...</div>}>
            <ServiceCardGrid cards={cards} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto section-padding">
        <div className="section-container">
          <div className="accent-tag">
            <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>NEXT STEPS</span>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center hover-gradient-line mx-auto">
                Ready to Transform Your Business?
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-8">
            Let&rsquo;s discuss how we can help streamline your operations with our custom solutions.
            </p>
            <Link href="/#contact" className="btn-gradient inline-block">
              get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTopColor: 'var(--color-border)' }} className="border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            {/* Logo Column */}
            <div className="md:col-span-4 space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/logo.svg"
                  alt="StreamlinedFlow Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
                <div className="flex items-center logo-text">
                  <span>SL</span>
                  <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">Flow</span>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <div className="space-y-3">
                <Link href="/services" className="footer-company-link">Services</Link>
                <Link href="/#case-studies" className="footer-company-link">Case Studies</Link>
                <Link href="/#how-it-works" className="footer-company-link">How It Works</Link>
                <Link href="/#contact" className="footer-company-link">Contact Us</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>liam@streamlinedflow.com</p>
              </div>
            </div>

            {/* CTA Column */}
            <div className="md:col-span-3 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Streamline your Business</h3>
              
            </div>
          </div>

          {/* Copyright */}
          <div style={{ borderTopColor: 'var(--color-border)' }} className="pt-8 border-t text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} StreamlinedFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 