/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#262626",
        tertiary: "#3c3b3b",
        "primary-text": "FBFCEE",
        "secondary-text": "#F7F8D7",
        "tertiary-text": "#FFFEC4",
        "quaternary-text": "#FFD6A5",
        "quinary-text": "#ec925d",
        "senary-text": "#2f0000",

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg-small.png')",
        "down-arrow": "url('/src/assets/downArrow.png')",
        "short-down-arrow": "url('/src/assets/shortDownArrow.png')",
      },
    },
  },
  plugins: [],
};
