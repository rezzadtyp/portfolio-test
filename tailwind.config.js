/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "500": "500px",
        "1000": "1000px",
      },
      height: {
        "500": "500px"
      },
      fontFamily: {
        hankenGrotesk: ["Hanken Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}

