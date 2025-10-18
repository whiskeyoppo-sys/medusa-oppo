/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'gold': '#D4AF37',
        'onyx': '#0A0A0A',
        'light-gray': '#888888',
        'dark-gray': '#1a1a1a',
      },
    },
  },
  plugins: [],
};
