/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Slab", "serif"],
        Coffee: ["Coffee Healing", "cursive"],
        Milocha: ["Milocha", "cursive"],
      },
      colors: {
        LiBlue: "#A8E8F9",
        Blu: "00537A",
        DaBlu: "#013C58",
        DaYello: "#F5A201",
        Yello: "#FFBA42",
        LiYello: "FFD35B",
      },
    },
  },
  plugins: [],
};
