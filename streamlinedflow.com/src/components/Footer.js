import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import AnimatedSection from './AnimatedSection'; // Assuming this is your animation component

const Footer = () => {
  return (
    <AnimatedSection delay={0.2} type="fadeIn" scrollTriggered={true}>
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
              <p className="text-gray-400 text-sm mt-4">
                Empowering businesses with intelligent automation solutions.
              </p>
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
          <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} StreamlinedFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
