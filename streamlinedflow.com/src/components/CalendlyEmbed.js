"use client";

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function CalendlyEmbed() {
  const { isDarkMode, themeVersion } = useTheme();
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // URL for the current theme
  const calendlyUrl = isDarkMode
    ? "https://calendly.com/liam-streamlinedflow/30min?hide_gdpr_banner=1&background_color=050505&text_color=ffffff&primary_color=38b6ff"
    : "https://calendly.com/liam-streamlinedflow/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=050505&primary_color=38b6ff";
  
  // Function to initialize Calendly
  const initializeCalendly = () => {
    if (!containerRef.current || typeof window === 'undefined') return;
    
    setIsLoading(true);
    
    // Clear any existing content
    containerRef.current.innerHTML = '';
    
    // Create new container
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'calendly-inline-widget';
    widgetDiv.style.minWidth = '320px';
    widgetDiv.style.height = '700px';
    widgetDiv.setAttribute('data-url', calendlyUrl);
    
    // Add to DOM
    containerRef.current.appendChild(widgetDiv);
    
    // Initialize Calendly if already loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widgetDiv,
        prefill: {},
        inlineStyles: true
      });
      
      setIsLoading(false);
    }
  };
  
  // Load Calendly script once
  useEffect(() => {
    if (typeof window === 'undefined' || window.Calendly) return;
    
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      console.log("Calendly script loaded");
      initializeCalendly();
    };
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  // Reinitialize when theme changes (watch themeVersion)
  useEffect(() => {
    initializeCalendly();
  }, [themeVersion, calendlyUrl]);

  return (
    <div className="calendly-container rounded-xl overflow-hidden border border-[var(--color-border)]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-[var(--color-box-bg)] z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--color-accent)] mb-3"></div>
            <p>Loading calendar...</p>
          </div>
        </div>
      )}
      <div 
        ref={containerRef}
        className="relative"
        style={{ minHeight: "700px" }}
      />
    </div>
  );
} 