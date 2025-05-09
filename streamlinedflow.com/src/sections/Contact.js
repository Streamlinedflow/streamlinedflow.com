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
      <section id="contact" className="container mx-auto py-16 px-4">
        <div className="rounded-xl backdrop-blur-lg border bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-12 w-full">
          <div className="inline-block px-4 py-2 rounded-full mb-2 bg-blue-100 dark:bg-blue-900 text-blue-500 font-semibold">
            CONTACT US
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text hover:underline underline-offset-8">
              Message us
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-300">
              Send us a message briefly detailing your business needs and let's discuss how we can help automate your business growth.
            </p>
            <div className="rounded-lg border bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-8 max-w-2xl mx-auto">
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
                    placeholder="Enter role"
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-blue-500/15 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
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
