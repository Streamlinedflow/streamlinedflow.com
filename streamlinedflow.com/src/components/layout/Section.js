import React from 'react';

/**
 * Section component for consistent vertical spacing between areas.
 * Usage: Wrap content sections to enforce top/bottom padding.
 */
export default function Section({ children, className = '' }) {
  return (
    <section className={`py-24 ${className}`}>  
      {children}
    </section>
  );
}


