import React, { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    company: "",
    budget: "",
    services: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        role: "",
        company: "",
        budget: "",
        services: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered={true}>
      <>
        {/* 1️⃣ Heading + blur-container (behind the wave) */}
        <section
          id="contact"
          className="container mx-auto pt-36 px-4 bg-slate-100 dark:bg-transparent relative z-0"
        >
          <div className="rounded-xl backdrop-blur-lg py-12 w-full">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl mb-6 text-center text-gray-900 dark:text-white leading-tight">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                Send us a message detailing your business needs, and we’ll get
                back to you to discuss how we can help automate your workflows.
              </p>
            </div>
          </div>
        </section>

        {/* 2️⃣ Form (above the wave) */}
        <section className="container mx-auto px-4  relative z-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xl backdrop-blur-lg border-2 border-transparent bg-white dark:bg-zinc-900 bg-clip-padding p-6 flex flex-col">
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
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Role"
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                    className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-2.5 rounded-lg font-medium text-white bg-blue-600 shadow hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all w-full mt-6 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    </AnimatedSection>
  );
};

export default ContactForm;
