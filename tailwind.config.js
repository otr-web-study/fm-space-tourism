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
        'lg-content': 'minmax(2rem, 1fr) repeat(2, minmax(0, 35rem)) minmax(2rem, 1fr)',
        'lg-crew-content': 'minmax(2rem, 1fr) minmax(0, 70rem) minmax(2rem, 1fr)',
      },
      backgroundImage: {
        'home-mobile': 'url("assets/home/background-home-mobile.jpg")',
        'home-tablet': 'url("assets/home/background-home-tablet.jpg")',
        'home-desktop': 'url("assets/home/background-home-desktop.jpg")',
        'destination-mobile': 'url("assets/destination/background-destination-mobile.jpg")',
        'destination-tablet': 'url("assets/destination/background-destination-tablet.jpg")',
        'destination-desktop': 'url("assets/destination/background-destination-desktop.jpg")',
        'crew-mobile': 'url("assets/crew/background-crew-mobile.jpg")',
        'crew-tablet': 'url("assets/crew/background-crew-tablet.jpg")',
        'crew-desktop': 'url("assets/crew/background-crew-desktop.jpg")',
        'texhnology-mobile': 'url("assets/technology/background-technology-mobile.jpg")',
        'texhnology-tablet': 'url("assets/technology/background-technology-tablet.jpg")',
        'texhnology-desktop': 'url("assets/technology/background-technology-desktop.jpg")',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
