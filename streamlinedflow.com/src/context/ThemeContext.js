"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark =
        savedTheme === 'dark' ||
        (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);  // ✅ only toggle the dark class
    }
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    const newThemeValue = !isDarkMode;
    setIsDarkMode(newThemeValue);
    document.documentElement.classList.toggle('dark', newThemeValue);  // ✅ toggle dark mode class
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newThemeValue ? 'dark' : 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}
