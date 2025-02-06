// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "rgba(101, 155, 235, 1)",
        background: "rgba(33, 36, 41, 1)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
      },
      screens: {
        nav: "1014px",
      },
    },
  },
  plugins: [],
};

export default config;
