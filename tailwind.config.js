/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16',
      }
    },
  },
  plugins: [],
}

