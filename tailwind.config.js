/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: '#5AB1B7',
        highlight: '#FFA3A3',
        lightGreen: '#B3E7CC',
        yellow: '#F9D585',
        purple: '#8A4B6F',
        darkBlue: '#00475b',
        dark: '#8A4B6F'
      }
    },
  },
  plugins: [],
}
