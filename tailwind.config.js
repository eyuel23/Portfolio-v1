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
      fontFamily: {
        didot: "Didot",
      },
    },
  },
  plugins: [],
};
