import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#44545F",
        dullPry: "#4E606E",
        darkPry: "#2a3439",
        dullWhite: "rgba(255,255,255,0.7)",
        secondary: "#B31B1B",
        secBtn: "rgba(179,27,27,0.4)",
        tertiary: "#848482",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(233, 239, 246, 0.4)",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      montAlt: ["Montserrat Alternates", "sans-serif"],
    },
  },
  screens: {
    sm: "768px",
    md: "1060px",
    lg: "1400px",
    xl: "1700px",
  },
  plugins: [],
};
export default config;
