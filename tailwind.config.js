/** @type {import('tailwindcss').Config} */
const colors = require("@resetpower/rcs/colors");

module.exports = {
  mode: "jit",
  darkMode: "media",
  content: ["./src/**/*.tsx", "./node_modules/@resetpower/rcs/**/*.js"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
