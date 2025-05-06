// BookCallSection.tsx
import AnimatedSection from "@/components/AnimatedSection"; // Ensure this is correctly imported
import CalendlyEmbed from "@/components/CalendlyEmbed"; // Ensure CalendlyEmbed component is correctly imported

const BookCall= () => {
  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered={true}>
      <section id="book-call" className="container mx-auto section-padding">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="accent-tag absolute left-0 top-0">
                <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>SCHEDULE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center hover-gradient-line mx-auto">
                Book a Discovery Call
              </h2>
            </div>
            <p className="text-center mb-8 max-w-2xl mx-auto">
              Schedule a free 30-minute call to discuss your business needs and explore how we can help automate your workflows.
            </p>
            
            {/* Embed the Calendly component */}
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default BookCall;
