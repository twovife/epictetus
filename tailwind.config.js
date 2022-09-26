/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        patric: ["Patrick Hand", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
