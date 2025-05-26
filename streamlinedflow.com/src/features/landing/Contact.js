import React, { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";

export default function ContactForm() {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required selects
    if (!formData.budget || !formData.services) {
      setSubmitStatus({
        success: false,
        message: "Please select a budget and service option.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      const webhookUrl =
        "https://hook.us2.make.com/tlfdnyalk8nvsujlwvx4dot37o8r39v9";
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thanks for your submission! We'll be in touch soon.",
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
      } else {
        setSubmitStatus({
          success: false,
          message:
            "Something went wrong. Please try again or contact us directly.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered>
      <>
        {/* Heading */}
        <div className="mb-16 relative z-20">
          <h2 className="text-4xl md:text-5xl mb-2 text-center text-gray-900 dark:text-white leading-tight">
            Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base text-center">
            Send us a message detailing your business needs, and we’ll get back
            to you to discuss how we can help automate your workflows.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl relative z-20 border-2 border-transparent bg-white dark:bg-zinc-900 p-6 flex flex-col">
          {submitStatus.success === true && (
            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg text-left">
              {submitStatus.message}
            </div>
          )}
          {submitStatus.success === false && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg text-left">
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
                className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>
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
                className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>
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
              rows={4}
              required
              className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-500/30 text-gray-900 dark:text-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
    px-5 py-2.5 w-full font-medium text-white
    bg-gradient-to-r from-[#38b6ff] to-[#0080ff]
    rounded-lg shadow-md
    transition duration-150 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300
    ${
      isSubmitting
        ? "opacity-70 cursor-not-allowed"
        : "hover:brightness-90 active:ring-2 active:ring-offset-2 active:ring-blue-300"
    }
  `}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </>
    </AnimatedSection>
  );
}
