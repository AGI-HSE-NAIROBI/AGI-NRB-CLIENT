import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, rgba(243,226,244,1) 33%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#1a73e9"
      },
      fontFamily: {
        'primary': ['Jost', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
