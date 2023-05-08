/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "button":"#c1abff",
        "btnhigh":"#d1c1ff",
        "back":"#f5f5f5"
      }
    },
  },
  plugins: [],
}

