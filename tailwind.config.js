/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode via class
  theme: {
    extend: {
      colors: {
        primary: '#106031',
        accent: '#F2F3F3',
        secondary: '#301718',
        accent2: '#E9D8AF',
      },
      fontFamily: {
        neogrotesque: ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
