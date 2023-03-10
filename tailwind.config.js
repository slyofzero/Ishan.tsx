/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        1: "1px",
      },
      fontFamily: {
        morganite: "Morganite",
      },
    },
  },
  plugins: [],
};
