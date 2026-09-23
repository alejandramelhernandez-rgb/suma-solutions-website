import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slate blue-gray — primary brand color
        slate: {
          50: "#f4f6f8",
          100: "#e2e8ee",
          300: "#a8b6c4",
          500: "#5c7186",
          700: "#3d4f61",
          900: "#202b35",
        },
        // Warm cream — backgrounds
        cream: {
          50: "#fefdfb",
          100: "#faf6ec",
          200: "#f3ecda",
        },
        // Deep plum — accent / CTAs
        plum: {
          50: "#f6eef4",
          300: "#b57ba8",
          500: "#7a3f6d",
          700: "#582850",
          900: "#3a1a35",
        },
      },
    },
  },
  plugins: [],
};
export default config;
