import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0a7bff",
          "green-70": "#63adff",
          "green-30": "#b9ddff",
          "green-10": "#e8f4ff",
          "green-dark": "#0058c9",
          red: "#dc2626",
          "red-70": "#f87171",
          "red-10": "#fee2e2",
          "red-dark": "#b91c1c",
          teal: "#35d9ff",
          ink: "#04153a",
        },
        stackwire: {
          blue: "#0a7bff",
          navy: "#04153a",
          orange: "#ff7a00",
          cyan: "#35d9ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Sora", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,26,24,0.06), 0 1px 12px rgba(11,26,24,0.05)",
        popover: "0 12px 32px rgba(11,26,24,0.18)",
      },
      borderRadius: {
        xl2: "14px",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in .25s ease-out",
        "slide-up": "slide-up .3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
