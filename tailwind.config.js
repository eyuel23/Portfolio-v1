/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        brandColor: "#F5EBE0",
      },
      colors: {
        primary: "#251f1f",
        gold: "#A68A72",
        brandColor: "#F5EBE0",
      },
      fontFamily: {
        didot: "Didot",
      },
    },
  },
  plugins: [],
};
