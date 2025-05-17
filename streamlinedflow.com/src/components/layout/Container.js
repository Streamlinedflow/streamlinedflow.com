import React from 'react';

/**
 * Container component for consistent horizontal padding and max-width.
 * Usage: Wrap page or section content to enforce gutters.
 */
export default function Container({ children, className = '' }) {
  return (
    <div
      className={`max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
