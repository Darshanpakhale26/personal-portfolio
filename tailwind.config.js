/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure Tailwind works with all your React files
  ],
  theme: {
    extend: {
      // Extend default colors
      colors: {
        yellow: {
          500: '#f59e0b',
        },
        pink: {
          500: '#ec4899',
        },
        purple: {
          500: '#8b5cf6',
        },
        blue: {
          500: '#3b82f6',  // Adding blue for the React icon color
        },
      },
      // Adding keyframes and animations for fade-in effect and slow spin
      keyframes: {
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInRight: 'fadeInRight 1s ease-in-out',  // Fade-in from the right
        'spin-slow': 'spin 3s linear infinite',  // Slow spin for the React icon
      },
      
    },
  },
  plugins: [],
}
