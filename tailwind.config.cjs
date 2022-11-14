/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans', 'sans']
      }
    },
    colors: {
      'cream': '#F7E9DD',
      'orange': '#EB765E',
      'gray': '#A09993',
      'light-blue': '#76B5BC',
      'white': '#FFFCF8'
    },

  },
  plugins: [],
}
