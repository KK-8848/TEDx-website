/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vanguard': ['Vanguard', 'sans-serif'],
        'microgramma': ['Microgramma', 'sans-serif'],
        'avantgarde': ['AvantGarde', 'sans-serif'],
      }
     
      
    
  },
  plugins: [require("tailwindcss-animate")],
}}