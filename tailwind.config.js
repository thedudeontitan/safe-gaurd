/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "button":"#C9A7EB",
        "back":"#f5f5f5"
      }
    },
  },
  plugins: [],
}

