"use client"

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    // Create gradient particles
    const particles = [];
    const particleCount = 40; // Reduced for better performance
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    // Animation loop
    const animate = () => {
      // Set background to transparent (will inherit from CSS)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        // Set color based on theme
        if (isDarkMode) {
          ctx.fillStyle = `rgba(56, 182, 255, ${particle.opacity * 0.2})`;
        } else {
          ctx.fillStyle = `rgba(0, 102, 204, ${particle.opacity * 0.15})`;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Check boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX = -particle.speedX;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY = -particle.speedY;
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationId);
    };
  }, [isDarkMode]); // Re-run effect when theme changes
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
} 