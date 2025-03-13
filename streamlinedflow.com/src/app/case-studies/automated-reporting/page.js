import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudy() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <nav className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 px-6 py-4">
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
                <span>Streamlined</span>
                <span className="logo-text-highlight">Flow</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#case-studies" className="nav-link">Case Studies</Link>
              <Link href="/#how-it-works" className="nav-link">How It Works</Link>
              <Link href="/#contact" className="nav-link">Contact Us</Link>
            </div>
            <Link href="/#book-call" className="btn-primary">
              Book intro call →
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#38b6ff] uppercase tracking-wider mb-4">Case Study</div>
            <div className="text-[#38b6ff] uppercase tracking-wider mb-4">leansales.tech</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Automated Reporting System: 20+ Hours Saved Weekly
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              How we transformed a client acquisition agency's reporting process with AI automation, leading to significant time savings and improved client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge and Solution Section */}
      <section className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-[#38b6ff] uppercase tracking-wider mb-4">Our Approach</div>
            
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
                    <div className="bg-white/5 p-4 rounded-lg shrink-0">
                      <svg className="w-8 h-8 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                      <p className="text-gray-300">The agency was struggling with time-consuming manual processes, from gathering data across multiple sources to creating individual client reports. Their team was bogged down by repetitive tasks and faced constant challenges maintaining consistency across their reporting.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 min-h-[200px]">
                    <div className="bg-white/5 p-4 rounded-lg shrink-0">
                      <svg className="w-8 h-8 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="bg-[#001f3f]/60 rounded-xl p-8 border border-white/10 h-full">
                  <div className="space-y-12">
                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="bg-[#38b6ff]/10 p-4 rounded-full shrink-0">
                        <svg className="w-8 h-8 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">1. Target</h3>
                        <p className="text-gray-300">We identified key performance metrics and data sources across their tech stack, creating a comprehensive data collection strategy that would serve as the foundation for automated reporting.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="bg-[#38b6ff]/10 p-4 rounded-full shrink-0">
                        <svg className="w-8 h-8 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">2. Customize</h3>
                        <p className="text-gray-300">We developed an automated system that pulls data from their database, generates formatted reports, and organizes information in a way that's both comprehensive and easy to understand.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="bg-[#38b6ff]/10 p-4 rounded-full shrink-0">
                        <svg className="w-8 h-8 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Ready to Automate Your Reporting?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you save time and improve client satisfaction with automated reporting systems.
            </p>
            <Link href="/#book-call" className="btn-primary inline-block">
              Book Your Free Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
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
                  <span>Streamlined</span>
                  <span className="logo-text-highlight">Flow</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                Building intelligent AI systems that scale your business.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <div className="space-y-3">
                <Link href="/#case-studies" className="block text-gray-400 hover:text-white transition-colors">Case Studies</Link>
                <Link href="/#how-it-works" className="block text-gray-400 hover:text-white transition-colors">How It Works</Link>
                <Link href="/#contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Contact</h3>
              <div className="space-y-3 text-gray-400">
                <p>Email: liam@streamlinedflow.com</p>
                <p>Schedule: Book a call</p>
              </div>
            </div>

            {/* CTA Column */}
            <div className="md:col-span-3 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Ready to Scale?</h3>
              <Link href="/#book-call" className="btn-primary inline-block">
                Book intro call →
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} StreamlinedFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 