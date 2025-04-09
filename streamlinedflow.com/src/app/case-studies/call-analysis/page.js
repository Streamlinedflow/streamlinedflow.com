"use client"
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

export default function CaseStudy() {
  const { isDarkMode } = useTheme();
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Navigation */}
      <AnimatedSection delay={0} type="fadeIn">
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

      {/* Hero Section */}
      <AnimatedSection delay={0.3} type="fadeUp">
        <section className="container mx-auto section-padding">
          <div className="section-container">
            <div className="accent-tag">
              <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>CASE STUDY</span>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center relative">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-2 rounded-lg flex items-center justify-center">
                    <div style={{ color: 'var(--color-accent-2)' }}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold gradient-text hover-gradient-line">Call Analysis System</h1>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-12 text-center">
                How we transformed a client&rsquo;s call monitoring process with an AI system that transcribes calls, analyzes conversations, and provides actionable insights to management.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Challenge and Solution Section */}
      <AnimatedSection delay={0.2} type="scaleUp" scrollTriggered={true}>
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
                    The client was struggling to monitor daily customer service calls. Their manual review process was time-consuming and only covered a small percentage of calls.
                  </p>

                  <div className="space-y-12">
                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="p-4 rounded-lg shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                        <p className="text-gray-300">Management had no efficient way to monitor the quality of customer calls daily. They were spending significant time on manual reviews. This limited their ability to provide consistent feedback to call takers and identify recurring issues.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6 min-h-[200px]">
                      <div className="p-4 rounded-lg shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">The Impact</h3>
                        <p className="text-gray-300">The lack of comprehensive call monitoring was leading to inconsistent customer service quality, missed training opportunities, and valuable customer feedback being overlooked. Staff development was hindered by the limited feedback on real customer interactions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Solution Steps */}
                <div className="relative">
                  <div style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }} className="rounded-xl p-8 border h-full hover:ring-2 hover:ring-[var(--color-accent-2)]">
                    <div className="space-y-12">
                      <div className="flex items-start space-x-6 min-h-[200px]">
                        <div className="p-4 rounded-lg shrink-0 flex items-center justify-center">
                          <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-4">1. Capture</h3>
                          <p className="text-gray-300">We developed an automated system that integrates with their existing call recording infrastructure, automatically capturing and securely storing call recordings for processing.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6 min-h-[200px]">
                        <div className="p-4 rounded-lg shrink-0 flex items-center justify-center">
                          <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-4">2. Analyze</h3>
                          <p className="text-gray-300">We created a custom OpenAI assistant that transcribes the calls and performs intelligent analysis to identify key discussion points, customer sentiment, and areas for improvement.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6 min-h-[200px]">
                        <div className="p-4 rounded-lg shrink-0 flex items-center justify-center">
                          <svg className="w-8 h-8" style={{ color: 'var(--color-accent-2)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-4">3. Report</h3>
                          <p className="text-gray-300">The system automatically generates and emails detailed reports to management, containing insights and actionable feedback that helps improve call quality and staff training.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered={true}>
        <section className="container mx-auto section-padding">
          <div className="section-container">
            <div className="accent-tag">
              <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>NEXT STEPS</span>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center hover-gradient-line mx-auto">
                  Ready to Automate your Business?
                </h2>
              </div>
              <p className="text-gray-300 mb-6">We&apos;ll walk you through our process and discuss your needs.</p>
              <Link href="/#book-call" className="btn-gradient inline-block">
                book a call
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
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
              </div>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </main>
  );
} 