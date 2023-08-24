/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {

        primary: "#44545F",
        dullPry: "#4E606E",
        dullWhite: "rgba(255,255,255,0.7)",
        secondary: "#B31B1B",
        secBtn: "rgba(179,27,27,0.4)",
        tertiary: "#848482",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(233, 239, 246, 0.4)",
      }
  },
  fontFamily: {
    mont: ["Montserrat", "sans-serif"],
    montAlt: ["Montserrat Alternates", "sans-serif"]
  },
},
screens: {
  sm: "768px",
  md: "1060px",
  lg: "1400px",
  xl: "1700px",
},
  plugins: [],
}

