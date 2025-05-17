import React from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';

export default function NextStepsCTA() {
  return (
    <AnimatedSection delay={0.2} type="fadeUp" scrollTriggered>
      {/* CTA Wrapper */}
      <div className="rounded-xl backdrop-blur-lg py-6">
        <div className="text-center">
          <div className="accent-tag mb-4">
            <span className="font-semibold" style={{ color: 'var(--color-accent-2)' }}>
              NEXT STEPS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text hover-gradient-line">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Let’s discuss how we can help streamline your operations with our custom solutions.
          </p>
          <Link
            href="/#book-call"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#38b6ff] to-[#0066cc] text-white uppercase text-sm font-semibold"
          >
            book a call
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
