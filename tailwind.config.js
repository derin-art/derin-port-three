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
        Krona: ["Krona", "serif"],
      },
      colors: {
        MikYellow: "#FEC601",
        ForBlack: "#06080F",
        PhaBlue: "#020887",
        PigBlue: "#38369A",
        PineGreen: "#0B7A75",
        SmoBlack: "#12100E",
        ChiViolet: "#856084",
        PinkLav: "#D4ADCF",
      },
    },
  },
  plugins: [],
};
