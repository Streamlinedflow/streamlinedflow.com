import AnimatedSection from "@/components/AnimatedSection";
import CalendlyEmbed from "@/components/CalendlyEmbed";

const BookCall = () => {
  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered={true}>
      <section
        id="book-call"
        className="container mx-auto py-16 px-4 bg-slate-100 dark:bg-transparent relative"
      >
        <div className="rounded-xl backdrop-blur-lg py-12 w-full">
          <div className="max-w-6xl mx-auto">
            {/* Text block */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white leading-tight relative inline-block">
                Book a Discovery Call
                <span className="block h-1 w-12 bg-gradient-to-r from-sky-500 to-blue-600 mt-4 rounded-full mx-auto"></span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                Schedule a free 30-minute call to discuss your business needs and explore how we can help automate your workflows.
              </p>
            </div>

            {/* Calendly embed - same width as section */}
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default BookCall;


