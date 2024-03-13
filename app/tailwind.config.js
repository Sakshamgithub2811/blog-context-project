/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './src/**/*.{html,js}',
],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#f5f5f5',
          200: '#d4d4d4',
          300: '#b3b3b3',
          400: '#737373',
          500: '#525252', 
          600: '#404040',
          700: '#2b2b2b',
          800: '#1f1f1f',
          900: '#141414',
        },
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}