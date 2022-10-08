/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme'); 

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode:'class',
  important:true, 
  theme: {
    extend: {
      fontFamily:{
        sans:['Quicksand', ...defaultTheme.fontFamily.sans],
        mono:[...defaultTheme.fontFamily.mono], 
      }
    },
  },
  plugins: [],
}
