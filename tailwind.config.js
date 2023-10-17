/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
