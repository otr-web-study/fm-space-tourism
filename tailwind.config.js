/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
      },
      fontFamily: {
        bellefair: ['Bellefair', 'sans-serif'],
        'barlow-cond': ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
