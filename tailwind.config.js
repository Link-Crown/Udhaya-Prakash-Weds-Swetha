/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        wine: "#7a1f3d",
        rose: "#d63384",
        pink: "#e91e8c",
        ivory: "#fdf8f3",
        gold: "#c9a15a",
        ink: "#34252a"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 30px 80px rgba(79, 29, 45, .18)",
        gold: "0 0 35px rgba(201, 161, 90, .24)"
      }
    }
  },
  plugins: []
};