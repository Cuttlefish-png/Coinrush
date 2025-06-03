/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#9B00FF',
        'off-white': '#F5F5F5',
        'deep-purple': '#1a0033',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
      boxShadow: {
        'neon': '0 0 10px #9B00FF, 0 0 20px #9B00FF',
      },
    },
  },
  plugins: [],
};