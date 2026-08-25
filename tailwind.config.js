/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#B84A24',      // Deep rust/terracotta orange — from the Ganesh emblem
          primaryLight: '#E8622C', // Brighter saffron-orange — accents, hover states
          accent: '#C9992E',       // Warm gold — premium touches, dividers, badges
          bg: '#FBF7F1',           // Warm ivory/off-white
          text: '#221F1C',         // Near-black charcoal
          muted: '#6B6259',        // Secondary text, warm grey-brown
          success: '#4B7A3E',      // Small olive-green accent
        }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};