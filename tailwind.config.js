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
      boxShadow: {
        bright: " 0 1rem 2rem rgba(255, 255, 255, 0.2)",
      },
      dropShadow: {
        light: "4.4px 8.8px 8.8px rgba(0,0, 0, 0.36)",
        image: " 3.6px 7.2px 7.2px rgba(0,0, 0, 0.36) ",
      },
    },
  },
  plugins: [],
};
