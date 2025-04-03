import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
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
                <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>CASE STUDY</span>
              </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text text-center hover-gradient-line mx-auto">
                Automated Reporting System
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 text-center">
              See how we helped a business automate their client reporting, saving 20+ hours per week and improving client satisfaction.
            </p>
            <div className="card p-6 mb-8 text-center">
              <p className="text-lg text-gray-300 italic">
                "Fast work, great communication, problem understood well and solved."
              </p>
              <p className="text-sm text-gray-400 mt-4">- Vytas Mikulenas, Leansales.tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge and Solution Section */}
      <section className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>OUR APPROACH</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                The Challenge & Solution
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Challenge */}
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  When we started working with this agency, they were spending countless hours manually compiling client reports. Their team needed a solution that would scale.
                </p>

                <div className="space-y-12">
                  <div className="flex items-start space-x-6 min-h-[200px]">
                    <div className="p-4 bg-[var(--color-background)] rounded-lg shrink-0 flex items-center justify-center">
                      <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                      <p className="text-gray-300">The agency was struggling with time-consuming manual processes, from gathering data across multiple sources to creating individual client reports. Their team was bogged down by repetitive tasks and faced constant challenges maintaining consistency across their reporting.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 min-h-[200px]">
                    <div className="p-4 bg-[var(--color-background)] rounded-lg shrink-0 flex items-center justify-center">
                      <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">The Impact</h3>
                      <p className="text-gray-300">Their team was spending over 20 hours per week on manual reporting tasks. This not only affected their operational efficiency but also delayed valuable insights for clients, impacting overall satisfaction and growth potential.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Solution Steps */}
              <div className="relative">
                <div style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }} className="rounded-xl p-8 border h-full hover:ring-2 hover:ring-[var(--color-accent-2)]">
                  <div className="space-y-12">
                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="p-4 bg-[var(--color-background)] rounded-lg shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">1. Target</h3>
                        <p className="text-gray-300">We identified key performance metrics and data sources across their tech stack, creating a comprehensive data collection strategy that would serve as the foundation for automated reporting.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="p-4 bg-[var(--color-background)] rounded-lg shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">2. Customize</h3>
                        <p className="text-gray-300">We developed an automated system that pulls data from their database, generates formatted reports, and organizes information in a way that's both comprehensive and easy to understand.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="p-4 bg-[var(--color-background)] rounded-lg shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">3. Automate</h3>
                        <p className="text-gray-300">We implemented scheduled reporting that automatically generates and sends detailed reports to their clients at specified intervals, completely eliminating the need for manual compilation and delivery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Ready to Automate Your Business?
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              
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
              <p className="text-gray-400 text-sm mt-4">
               
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
          <div style={{ borderTopColor: 'var(--color-border)' }} className="pt-8 border-t text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} StreamlinedFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 