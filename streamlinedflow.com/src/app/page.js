import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <nav className="rounded-lg backdrop-blur-lg bg-[#001f3f]/40 border border-white/5 px-6 py-4">
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
              <a href="#blog" className="nav-link">Blog</a>
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-block px-4 py-2 bg-[#38b6ff]/10 rounded-full">
            <span className="text-[#38b6ff] font-semibold">AUTOMATE YOUR BUSINESS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
            We build hands-off growth systems for B2B founders
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Find the perfect offer, automate your lead acquisition, & solve your project 
            management woes—all while scaling your B2B business to 8 figures.
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
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="container mx-auto section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card">
                <div className="mb-4">
                  <span className="text-[#38b6ff] font-semibold">CASE STUDY {item}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">200% Growth in 6 Months</h3>
                <p className="text-gray-300 mb-6">See how we helped a B2B SaaS company automate their lead generation and scale their revenue.</p>
                <a href="#" className="text-[#38b6ff] hover:underline">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto section-padding">
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
      </section>

      {/* Blog Section */}
      <section id="blog" className="container mx-auto section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Latest Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card">
                <div className="mb-4">
                  <span className="text-[#38b6ff] font-semibold">AUTOMATION</span>
                </div>
                <h3 className="text-xl font-bold mb-4">The Future of B2B Growth</h3>
                <p className="text-gray-300 mb-6">Learn about the latest trends in B2B automation and growth strategies.</p>
                <a href="#" className="text-[#38b6ff] hover:underline">Read article →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto section-padding">
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
      </section>

      {/* Book Call Section */}
      <section id="book-call" className="container mx-auto section-padding bg-[#38b6ff]/10 rounded-2xl my-20 mx-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Start Your Growth Journey</h2>
          <p className="text-xl text-gray-300 mb-12">
            Schedule your free 30-minute strategy call today and discover how we can help scale your business.
          </p>
          <a href="#" className="btn-primary inline-block">
            Book Your Free Call →
          </a>
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
                <a href="#blog" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
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
