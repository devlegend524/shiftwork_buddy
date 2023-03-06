/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3f3d55",
        accentBlue: "#6d66fa",
        lightGrey: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
