/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ezcar: ["Ezcar", "serif"],
        Nabla: ["Nabla", "serif"],
        Abril: ["Abril", "serif"],
        Josefin: ["Josefin", "serif"],
        JosefinNormal: ["JosefinNormal", "serif"],
      },
      colors: {
        MikYellow: "#FEC601",
        PhaBlue: "#020887",
        PigBlue: "#38369A",
        PineGreen: "#0B7A75",
        SmoBlack: "#12100E",
      },
    },
  },
  plugins: [],
};
