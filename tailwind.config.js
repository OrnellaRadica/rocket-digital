/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE7333",
        secondary: "#D5DBE1",
        subtitle: "#767676",
        background: "#FEF9F7",
      },
    },
  },
  plugins: [],
};
