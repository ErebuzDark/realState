/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        "light-gray": "#E0E0E0",
        "dark-gray": "#BBBBBB",
        "cta-color": "#343434",
      },
    },    
  },
  plugins: [],
};
