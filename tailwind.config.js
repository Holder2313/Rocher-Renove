/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#2b4547'
      }
    },
  },
  plugins: [require('preline/plugin')],
}

