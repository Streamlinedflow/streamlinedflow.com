import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    budget: '',
    services: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!',
      });
      setFormData({
        name: '',
        email: '',
        role: '',
        company: '',
        budget: '',
        services: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered={true}>
      <section id="contact" className="container mx-auto py-16 px-4 bg-slate-100 dark:bg-transparent relative">
        <div className="rounded-xl backdrop-blur-lg p-12 w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6 text-start text-gray-900 dark:text-white leading-tight relative inline-block">
              Contact Us
              <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-4 rounded-full"></span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-8 max-w-2xl">
              Send us a message detailing your business needs, and we’ll get back to you to discuss how we can help automate your workflows.
            </p>

            <div className="rounded-lg border-2 border-transparent bg-slate-100 dark:bg-gray-900/50 bg-clip-padding p-8">
              {submitStatus.success === true && (
                <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg mb-6 text-left">
                  {submitStatus.message}
                </div>
              )}
              {submitStatus.success === false && (
                <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 text-left">
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Role"
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled className="text-gray-400">
                      Budget
                    </option>
                    <option>$0 - $5000</option>
                    <option>$5000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>

                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled className="text-gray-400">
                      Service
                    </option>
                    <option>Developing a custom AI solution</option>
                    <option>Custom Chatbot Development</option>
                    <option>AI Automation systems</option>
                    <option>Multiple services</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements"
                  rows="4"
                  required
                  className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#38b6ff] to-[#0080ff] shadow hover:from-[#0080ff] hover:to-[#38b6ff] transition-all w-full mt-6 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default ContactForm;