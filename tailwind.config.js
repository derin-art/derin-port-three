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
        Krona: ["Krona", "serif"],
        CorUp: ["CorUp", "serif"],
        PlayI: ["PlayI", "serif"],
        inter: ["inter", "serif"],
        Unbounded: ["Unbounded", "serif"],
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
        TiWhite: "#fafafa",
        ultraGray: "#242424",
        ultraBlack: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
