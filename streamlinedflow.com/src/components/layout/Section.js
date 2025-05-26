import React from 'react';

/**
 * Section component for consistent vertical spacing between areas.
 * Usage: Wrap content sections to enforce top/bottom padding.
 */
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-36 ${className}`}>  
      {children}
    </section>
  );
}


