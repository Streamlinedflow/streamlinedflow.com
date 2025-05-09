// BookCallSection.tsx
import AnimatedSection from "@/components/AnimatedSection";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const BookCall = () => {
  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered={true}>
      <section id="book-call" className="container mx-auto py-16 px-4">
        <div className="rounded-xl backdrop-blur-lg border bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-blue-500/15 p-12 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center relative">
              <div className="absolute left-0 top-0 inline-block px-4 py-2 rounded-full mb-2 bg-blue-100 dark:bg-blue-900 text-blue-500 font-semibold">
                SCHEDULE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-transparent bg-clip-text hover:underline underline-offset-8">
                Book a Discovery Call
              </h2>
            </div>
            <p className="text-center mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Schedule a free 30-minute call to discuss your business needs and explore how we can help automate your workflows.
            </p>
            
            {/* Calendly embed */}
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default BookCall;
