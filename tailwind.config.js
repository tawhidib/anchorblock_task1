/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        title: "#323b4b",
        subTitle: "#8A94A6",
        placeholder: "#B0B7C3",
        blue: "#377DFF",
        primary: "#4E5D78",
        secondary: "#A7AFBC",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
