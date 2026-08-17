import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        muted: "#667085",
        brand: {
          blue: "#2563eb",
          purple: "#7c3aed",
          cyan: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px -40px rgba(15, 23, 42, 0.35)",
        glow: "0 20px 60px -30px rgba(37, 99, 235, 0.8)",
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(135deg, rgba(37,99,235,.95), rgba(124,58,237,.92) 55%, rgba(6,182,212,.9))",
      },
    },
  },
  plugins: [forms],
};

export default config;
