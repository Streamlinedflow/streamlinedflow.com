import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <nav className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
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
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#case-studies" className="nav-link">Case Studies</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#contact" className="nav-link">Contact Us</a>
            </div>
            <a href="#book-call" className="btn-primary">
              Book intro call →
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 inline-block px-4 py-2 bg-[#38b6ff]/10 rounded-full">
              <span className="text-[#38b6ff] font-semibold">AI-POWERED GROWTH</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Building intelligent AI systems that scale your business
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your business with custom AI solutions. From automated workflows to intelligent 
              decision-making systems—we help you leverage AI to achieve sustainable growth.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="#book-call" className="btn-primary w-full md:w-auto">
                Book intro call →
              </a>
              <a href="#pricing" className="btn-outline w-full md:w-auto">
                View pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4 inline-block px-4 py-2 bg-[#38b6ff]/10 rounded-full">
              <span className="text-[#38b6ff] font-semibold">SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">What our clients get</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Lead Generation */}
              <div className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-[#38b6ff]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Lead generation</h3>
                </div>
                <p className="text-gray-300">Scalable, affordable outbound & marketing systems to grow your company on autopilot.</p>
              </div>

              {/* Project Management */}
              <div className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-[#38b6ff]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Project management</h3>
                </div>
                <p className="text-gray-300">Bespoke project management systems used by 8-figure agencies & SaaS companies.</p>
              </div>

              {/* AI Service Fulfillment */}
              <div className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-[#38b6ff]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">AI service fulfillment</h3>
                </div>
                <p className="text-gray-300">AI that automates key steps in your fulfillment process to reduce payroll.</p>
              </div>

              {/* CRM Buildouts */}
              <div className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-[#38b6ff]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">CRM buildouts</h3>
                </div>
                <p className="text-gray-300">Sales systems to track, iterate, and scale growth just like an 8-figure company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="mb-4">
                  <span className="text-[#38b6ff] font-semibold">CASE STUDY</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Automated Reporting System</h3>
                <p className="text-gray-300 mb-6">See how we helped a business automate their client reporting, saving 20+ hours per week and improving client satisfaction.</p>
                <Link href="/case-studies/automated-reporting" className="text-[#38b6ff] hover:underline">Read more →</Link>
              </div>

              <div className="card opacity-40">
                <div className="mb-4">
                  <span className="text-[#38b6ff] font-semibold">COMING SOON</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Case Study</h3>
                <p className="text-gray-300 mb-6">New case study coming soon...</p>
              </div>

              <div className="card opacity-40">
                <div className="mb-4">
                  <span className="text-[#38b6ff] font-semibold">COMING SOON</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Case Study</h3>
                <p className="text-gray-300 mb-6">New case study coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery Call',
                  description: 'We analyze your current systems and identify growth opportunities.'
                },
                {
                  step: '02',
                  title: 'Custom Strategy',
                  description: 'We create a tailored automation strategy for your business.'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'We implement the systems and train your team on the new workflows.'
                }
              ].map((item) => (
                <div key={item.step} className="card">
                  <div className="text-[#38b6ff] font-bold text-xl mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Ready to Scale?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Book a free strategy call and let's discuss how we can help automate your business growth.
            </p>
            <div className="card max-w-xl mx-auto p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#38b6ff] outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#38b6ff] outline-none"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#38b6ff] outline-none"
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Book Call Section */}
      <section id="book-call" className="container mx-auto section-padding">
        <div className="rounded-xl backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Start Your Growth Journey</h2>
            <p className="text-xl text-gray-300 mb-12">
              Schedule your free 30-minute strategy call today and discover how we can help scale your business.
            </p>
            <a href="#" className="btn-primary inline-block">
              Book Your Free Call →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            {/* Logo Column */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
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
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Building hands-off growth systems for B2B founders.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <div className="space-y-3">
                <a href="#case-studies" className="block text-gray-400 hover:text-white transition-colors">Case Studies</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors">How It Works</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
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
              <a href="#book-call" className="btn-primary inline-block">
                Book intro call →
              </a>
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
