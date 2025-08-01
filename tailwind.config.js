/** @type {import('tailwindcss').Config} */
export default {
  // enable dark mode via a .dark class on <html>
  darkMode: 'class',

  // scan these files for class names
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        // keep it simple: system fonts only
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },

  plugins: [],
};