/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
      },
      fontFamily: {
        'russo': ['Russo One'],
        'poppins': ['Poppins', 'sans-serif'],
        'Belanosima':[ 'Belanosima']
      }
    },
  },
  plugins: [],
}

