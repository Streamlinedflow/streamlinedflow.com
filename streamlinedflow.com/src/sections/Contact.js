import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection'; // Assuming this is your animation component

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
      // Simulate form submission
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
      <section id="contact" className="container mx-auto section-padding">
        <div className="section-container">
          <div className="accent-tag">
            <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>
              CONTACT US
            </span>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                Message us
              </h2>
            </div>
            <p className="mb-12">
              Send us a message briefly detailing your business needs and let&apos;s discuss how we can help automate your business growth.
            </p>
            <div className="form-container max-w-2xl mx-auto">
              {submitStatus.success === true ? (
                <div className="form-success">{submitStatus.message}</div>
              ) : submitStatus.success === false ? (
                <div className="form-error">{submitStatus.message}</div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
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
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Enter role"
                    />
                  </div>
                  <div>
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
                      <option value="" disabled>
                        Budget
                      </option>
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
                      <option value="" disabled>
                        Service
                      </option>
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
    </AnimatedSection>
  );
};

export default ContactForm;
