"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    budget: '',
    services: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.budget || !formData.services) {
      setSubmitStatus({
        success: false,
        message: 'Please select a budget and service option.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });
    
    try {
      // Replace with your Make.com webhook URL
      const webhookUrl = 'https://hook.us2.make.com/tlfdnyalk8nvsujlwvx4dot37o8r39v9';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thanks for your submission! We\'ll be in touch soon.'
        });
        // Reset form data
        setFormData({
          name: '',
          email: '',
          role: '',
          company: '',
          budget: '',
          services: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: 'Something went wrong. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Navigation */}
      <div className="container mx-auto py-6">
        <nav className="section-container !p-6">
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
                <span>SL</span>
                <span className="logo-text-highlight">Flow</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="#case-studies" className="nav-link">Case Studies</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#contact" className="nav-link">Contact Us</a>
            </div>
            <a href="#contact" className="btn-gradient">
              Get in touch →
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Building intelligent AI systems that scale your business
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your business with custom AI solutions. From automated workflows to intelligent 
              decision-making systems—we help you leverage AI to achieve sustainable growth.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-gradient w-full md:w-auto">
                 Get in touch →
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
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold">SERVICES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                What our clients get
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Custom AI Agent Solutions */}
              <div className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-[#38b6ff]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Custom AI Automation systems</h3>
                </div>
                <p>Scalable, affordable systems to grow your company on autopilot.</p>
              </div>
              {/* Custom Chatbot Solutions */}
              <div className="card">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-2 bg-[#38b6ff]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#38b6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Custom Chatbot Development</h3>
                </div>
                <p>Enhance user engagement and streamline interactions with our custom chatbot development services.</p>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold">CLIENT WORK</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                Case Studies
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="mb-4">
                  <span className="text-[#38b6ff] font-semibold">CASE STUDY</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Automated Reporting System</h3>
                <p className="text-gray-300 mb-6">See how we helped a business automate their client reporting, saving 20+ hours per week and improving client satisfaction.</p>
                <Link href="/case-studies/automated-reporting" className="text-[#38b6ff] hover:underline">Read more →</Link>
              </div>

              <div className="card">
                <div className="mb-4">
                  <span className="text-[#38b6ff] font-semibold">CASE STUDY</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Call Analysis System</h3>
                <p className="text-gray-300 mb-6">Learn how we built an AI automation system that transcribes call recordings, analyzes conversations, and delivers management reports with actionable feedback.</p>
                <Link href="/case-studies/call-analysis" className="text-[#38b6ff] hover:underline">Read more →</Link>
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
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold">PROCESS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                How It Works
              </h2>
            </div>
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
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto section-padding">
        <div className="section-container">
        <div className="accent-tag">
                <span className="font-semibold">CONTACT US</span>
              </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center relative">
              
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                Ready to Automate your Business?
              </h2>
            </div>
            <p className="mb-12">
              Send us a message briefly detailing your business needs and let's discuss how we can help automate your business growth.
            </p>
            <div className="form-container max-w-2xl mx-auto">
              {submitStatus.success === true ? (
                <div className="form-success">
                  {submitStatus.message}
                </div>
              ) : submitStatus.success === false ? (
                <div className="form-error">
                  {submitStatus.message}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                
                {/* Row 2: Role and Company Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label></label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Enter role"
                    />
                  </div>
                  
                  <div>
                    <label></label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company name"
                    />
                  </div>
                </div>
                
                {/* Row 3: Project Budget and Services */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="select-with-placeholder">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={formData.budget === '' ? 'placeholder' : ''}
                    >
                      <option value="" disabled>Budget</option>
                      <option>$0 - $5000</option>
                      <option>$5000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000+</option>
                    </select>
                  </div>
                  
                  <div className="select-with-placeholder">
                    <select
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      className={formData.services === '' ? 'placeholder' : ''}
                    >
                      <option value="" disabled>Service</option>
                      <option>Developing a custom AI solution</option>
                      <option>Custom Chatbot Development</option>
                      <option>AI Automation systems</option>
                      <option>Multiple services</option>
                    </select>
                  </div>
                </div>
                
                {/* Row 4: How can we help */}
                <div>
                  <label>How can we help?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or requirements"
                    rows="4"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-gradient w-full mt-6 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ borderTopColor: 'var(--color-border)' }} className="border-t">
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
                  <span>SL</span>
                  <span className="logo-text-highlight">Flow</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
             
              </p>
            </div>

            {/* Navigation Links - Updated with new class */}
            <div className="md:col-span-2 md:ml-4">
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <div className="space-y-3">
                <a href="#case-studies" className="footer-company-link">Case Studies</a>
                <a href="#how-it-works" className="footer-company-link">How It Works</a>
                <a href="#contact" className="footer-company-link">Contact Us</a>
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
    </main>
  );
}
