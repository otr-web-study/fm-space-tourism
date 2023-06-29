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
      gridTemplateRows: {
        'page-layout': 'min-content 1fr',
      },
      gridTemplateColumns: {
        'lg-content': 'minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr)',
      },
      backgroundImage: {
        'home-tablet': 'url("assets/home/background-home-tablet.jpg")',
        'home-mobile': 'url("assets/home/background-home-mobile.jpg")',
        'home-desktop': 'url("assets/home/background-home-desktop.jpg")',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
