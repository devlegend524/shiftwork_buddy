/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primaryBlue: "#6d66fa", accentBlue: "#3f3d55" },
    },
  },
  plugins: [],
};
