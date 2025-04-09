"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  themeVersion: 0, // Add a version counter to track theme changes
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [themeVersion, setThemeVersion] = useState(0); // Add state for version tracking

  useEffect(() => {
    // Handle localStorage safely (only in browser)
    if (typeof window !== 'undefined') {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      // Default to light mode if no preference is saved
      const prefersDark = savedTheme === 'dark' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      setIsDarkMode(prefersDark);
      
      // Apply the appropriate theme using data attribute
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    const newThemeValue = !isDarkMode;
    setIsDarkMode(newThemeValue);
    
    // Increment the theme version to force components to update
    setThemeVersion(prev => prev + 1);
    
    // Apply theme using data attribute instead of classes
    document.documentElement.setAttribute('data-theme', newThemeValue ? 'dark' : 'light');
    
    // Save preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newThemeValue ? 'dark' : 'light');
      // Remove the page refresh code - we'll handle specific component refreshes instead
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isLoaded, themeVersion }}>
      {children}
    </ThemeContext.Provider>
  );
} 