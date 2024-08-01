import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "light": "#EDEDED",
        "dark": "#131313",

        "white": "#FFF",
        "black": "#000"
      },

      fontFamily: {
        "main": "'Urbanist', sans-serif"
      },

      colors: {
        "light": "#000",
        "dark": "#fff"
      }
    },
  },
  plugins: [],
};
export default config;
