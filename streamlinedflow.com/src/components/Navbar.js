import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import AnimatedSection from './AnimatedSection'; // Assuming this is your animation component
import ThemeToggle from './ThemeToggle'; // Assuming ThemeToggle is another component in your project

const Navbar = () => {
  return (
    <AnimatedSection delay={0} type="fadeIn">
      <div className="container mx-auto py-6">
        <nav className="section-container !p-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* Navigation Links for larger screens */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/#case-studies" className="nav-link">Case Studies</Link>
              <Link href="/#how-it-works" className="nav-link">How It Works</Link>
              <Link href="/#contact" className="nav-link">Contact Us</Link>
            </div>

            {/* Call to Action and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <Link href="/#book-call" className="btn-gradient">
                book a call
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </AnimatedSection>
  );
};

export default Navbar;