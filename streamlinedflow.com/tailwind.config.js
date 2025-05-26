/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // <-- tells Tailwind to use the `.dark` class globally
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/features/**/*.{js,ts,jsx,tsx,mdx}',
    // You can adjust the paths as needed
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
};
