import AnimatedSection from "@/components/common/AnimatedSection";
import CalendlyEmbed from "@/components/common/CalendlyEmbed";

const BookCall = () => {
  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered={true}>
      <>
        {/* 1️⃣ Heading + blur-container (behind the wave) */}
        <section
          id="book-call"
          className="container mx-auto pt-36 px-4 bg-slate-100 dark:bg-transparent relative z-0"
        >
          <div className="rounded-xl backdrop-blur-lg py-12 w-full">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white leading-tight">
                Book a Discovery Call
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
                Schedule a free 30-minute call to discuss your business needs
                and explore how we can help automate your workflows.
              </p>
            </div>
          </div>
        </section>

        {/* 2️⃣ Calendly Embed (above the wave) */}
        <section className="container mx-auto px-4 mt-12 md:-mt-16 relative z-20 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="w-full">
              <CalendlyEmbed />
            </div>
          </div>
        </section>
      </>
    </AnimatedSection>
  );
};

export default BookCall;
