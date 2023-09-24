import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./utils/**/*.{js,ts,jsx,tsx}",
];
export const plugins = [require("daisyui")];
export const darkTheme = "scaffoldEthDark";
export const daisyui = {
  themes: [
    {
      scaffoldEth: {
        primary: "#212638",
        "primary-content": "#F9FBFF",
        secondary: "#8DD122",
        "secondary-content": "#F9FBFF",
        accent: "#4969A6",
        "accent-content": "#F9FBFF",
        neutral: "#F9FBFF",
        "neutral-content": "#385183",
        "base-100": "#343235",
        "base-200": "#343235",
        "base-300": "#FBF0DF",
        "base-content": "#F9FBFF",
        info: "#385183",
        success: "#34EEB6",
        warning: "#FFCF72",
        error: "#FF8863",

        "--rounded-btn": "9999rem",

        ".tooltip": {
          "--tooltip-tail": "6px",
          "--tooltip-color": "hsl(var(--p))",
        },
      },
    },
    {
      scaffoldEthDark: {
        primary: "#212638",
        "primary-content": "#F9FBFF",
        secondary: "#8DD122",
        "secondary-content": "#F9FBFF",
        accent: "#4969A6",
        "accent-content": "#F9FBFF",
        neutral: "#F9FBFF",
        "neutral-content": "#385183",
        "base-100": "#343235",
        "base-200": "#343235",
        "base-300": "#FBF0DF",
        "base-content": "#F9FBFF",
        info: "#385183",
        success: "#34EEB6",
        warning: "#FFCF72",
        error: "#FF8863",

        "--rounded-btn": "9999rem",

        ".tooltip": {
          "--tooltip-tail": "6px",
          "--tooltip-color": "hsl(var(--p))",
        },
      },
    },
    {
      exampleUi: {
        primary: "#000000",
        "primary-content": "#ffffff",
        secondary: "#FF6644",
        "secondary-content": "#212638",
        accent: "#93BBFB",
        "accent-content": "#212638",
        neutral: "#f3f3f3",
        "neutral-content": "#212638",
        "base-100": "#ffffff",
        "base-200": "#f1f1f1",
        "base-300": "#d0d0d0",
        "base-content": "#212638",
        info: "#93BBFB",
        success: "#34EEB6",
        warning: "#FFCF72",
        error: "#FF8863",

        "--rounded-btn": "9999rem",

        ".tooltip": {
          "--tooltip-tail": "6px",
        },
      },
    },
  ],
};
export const theme = {
  // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
  extend: {
    fontFamily: {
      figtree: ["Figtree", "sans-serif"],
      src: url("/assets/fonts/figtree/figtree-regular.woff2"),
    },
    boxShadow: {
      center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
    },
    keyframes: {
      grow: {
        "0%": {
          width: "0%",
        },
        "100%": {
          width: "100%",
        },
      },
      zoom: {
        "0%, 100%": { transform: "scale(1, 1)" },
        "50%": { transform: "scale(1.1, 1.1)" },
      },
    },
    animation: {
      grow: "grow 5s linear infinite",
      "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      zoom: "zoom 1s ease infinite",
    },
  },
};
