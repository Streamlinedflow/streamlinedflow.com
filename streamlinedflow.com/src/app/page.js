"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';

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

  // Add wave animation
  useEffect(() => {
    const canvas = document.getElementById('waveCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;
    let animationFrameId;
    let rect;

    const resize = () => {
      rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
    };

    const drawWave = (baseY, amplitude, frequency, speed, opacity) => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(56, 182, 255, ${opacity})`;
      ctx.lineWidth = 1;

      for (let x = 0; x < rect.width; x += 1) {
        const y = baseY + 
          Math.sin(x * frequency + time * speed) * amplitude + 
          Math.sin(x * frequency * 0.5 + time * speed * 1.5) * (amplitude * 0.5);
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const animate = () => {
      if (!rect) return;
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Two intersecting waves in the middle
      drawWave(rect.height * 0.5, 40, 0.003, 0.7, 0.15); // First wave
      drawWave(rect.height * 0.5, 35, 0.004, -0.5, 0.15); // Second wave going the opposite direction

      time += 0.015;
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <AnimatedBackground />
      {/* Background Canvas */}
      <canvas
        id="waveCanvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.9 }} 
      />

      {/* Content */}
      <div className="relative z-10">
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
        <section className="container mx-auto py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">Streamline Your Business with </span><span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Custom AI solutions that automate your workflows and enhance productivity
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/services" className="btn-gradient">
                explore services
              </Link>
              <Link href="/#case-studies" className="btn-gradient">
                view case studies
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto section-padding">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center relative">
                <div className="accent-tag absolute left-0 top-0">
                  <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>SERVICES</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                  What our clients get
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Custom AI Agent Solutions */}
                <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)]">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-[var(--color-background)] rounded-lg flex items-center justify-center">
                      <div style={{ color: 'var(--color-accent-2)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">Custom AI Automation systems</h3>
                  </div>
                  <p className="text-gray-300 mb-6">Scalable, affordable systems to grow your company on autopilot.</p>
                  <Link href="/services?service=autonomous-agent" className="text-[#38b6ff] hover:underline">Read more</Link>
                </div>
                {/* Custom Chatbot Solutions */}
                <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)]">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-[var(--color-background)] rounded-lg flex items-center justify-center">
                      <div style={{ color: 'var(--color-accent-2)' }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H6a2 2 0 00-2 2v4m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0h-2m-6 0h2m-8 0h2m-2 0v4" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">Custom Chatbot Development</h3>
                  </div>
                  <p className="text-gray-300 mb-6">Enhance user engagement and streamline interactions with our custom chatbot development services.</p>
                  <Link href="/services?service=chatbot" className="text-[#38b6ff] hover:underline">Read more</Link>
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
                  <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>CLIENT WORK</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                  Case Studies
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)] flex flex-col">
                  <div>
                    <div className="mb-4">
                      <span className="text-[#38b6ff] font-semibold">CASE STUDY</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Automated Reporting System</h3>
                    <p className="text-gray-300 mb-6">See how we helped a business automate their client reporting, saving 20+ hours per week and improving client satisfaction.</p>
                  </div>
                  <div className="mt-auto">
                    <Link href="/case-studies/automated-reporting" className="text-[#38b6ff] hover:underline">Read more</Link>
                  </div>
                </div>

                <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)] flex flex-col">
                  <div>
                    <div className="mb-4">
                      <span className="text-[#38b6ff] font-semibold">CASE STUDY</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Call Analysis System</h3>
                    <p className="text-gray-300 mb-6">Learn how we built an AI automation system that transcribes call recordings, analyzes conversations, and delivers management reports with actionable feedback.</p>
                  </div>
                  <div className="mt-auto">
                    <Link href="/case-studies/call-analysis" className="text-[#38b6ff] hover:underline">Read more</Link>
                  </div>
                </div>

                <div className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)] opacity-40 flex flex-col">
                  <div>
                    <div className="mb-4">
                      <span className="text-[#38b6ff] font-semibold">COMING SOON</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Case Study</h3>
                    <p className="text-gray-300 mb-6">New case study coming soon...</p>
                  </div>
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
                  <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>PROCESS</span>
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
                  <div key={item.step} className="card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:ring-2 hover:ring-[var(--color-accent-2)]">
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
                  <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>CONTACT US</span>
                </div>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center relative">
                
                <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                  Ready to Automate your Business?
                </h2>
              </div>
              <p className="mb-12">
                Send us a message briefly detailing your business needs and let&apos;s discuss how we can help automate your business growth.
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
                    {isSubmitting ? 'Submitting...' : 'Submit'}
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
                    <span className="bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text">Flow</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
               
                </p>
              </div>

              {/* Navigation Links - Updated with new class */}
              <div className="md:col-span-2 md:ml-4">
                <h3 className="font-semibold mb-4 text-white">Company</h3>
                <div className="space-y-3">
                  <Link href="/services" className="footer-company-link">Services</Link>
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
      </div>
    </main>
  );
}
