import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "../common/AnimatedSection";

const Footer = () => {
  return (
    <AnimatedSection delay={0.2} type="fadeIn" scrollTriggered={true}>
      <footer className="border-t border-gray-200 dark:border-zinc-300/15">
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
                <div className="flex items-center text-2xl tracking-tight font-medium">
                  <span className="text-[#38b6ff]">SL</span>
                  <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">
                    Flow
                  </span>
                </div>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                Empowering businesses with intelligent automation solutions.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2 md:ml-4">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white border-b-1 inline-block pb-1">
                Company
              </h3>
              <div className="space-y-2">
                <Link
                  href="/services"
                  className="block text-sm text-gray-700 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/#case-studies"
                  className="block text-sm text-gray-700 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Case Studies
                </Link>
                <Link
                  href="/#how-it-works"
                  className="block text-sm text-gray-700 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/#contact"
                  className="block text-sm text-gray-700 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 md:ml-4">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white border-b-1 inline-block pb-1">
                Contact
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <a href="mailto:liam@streamlinedflow.com">
                  liam@streamlinedflow.com
                </a>
              </div>
            </div>

            {/* CTA Column */}
            <div className="md:col-span-3 md:ml-4">
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white border-b-1 inline-block pb-1">
                Streamline Your Business
              </h3>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 dark:border-zinc-300/15 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} StreamlinedFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};

export default Footer;
