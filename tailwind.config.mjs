const { ZIndex } = require("@tsparticles/engine");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/aceternity-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1350px",
      },
    },
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        "meteor-effect": "meteor 35s linear infinite",
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(205deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1", ZIndex: -1 },
          "100%": {
            transform: "rotate(205deg) translateX(-1200px)",
            opacity: "0",
          },
          scroll: {
            to: {
              transform: "translate(calc(-50% - 0.5rem))",
            },
          },
        },
      },
      colors: {
        primary: {
          50: "#F7F7F7 ",
          100: "#E1E5F7",
          200: "#C1C9ED",
          300: "#A2A9E2",
          400: "#828FDC",
          500: "#5A76D6",
          600: "#4258B0",
          700: "#2B4280",
          800: "#1A1B26",
          900: "#03040A",
        },
        accent: {
          50: "#F4F3FF", // Very light purple, almost white
          100: "#E3DFFF", // Soft light lavender
          200: "#C0B8F7", // Muted light purple
          300: "#9C94F0", // Light pastel purple
          400: "#7A70E9", // Soft violet
          500: "#402BC9", // Base color (vibrant purple)
          600: "#3A1F9F", // Darker violet
          700: "#2E1780", // Deep violet
          800: "#24106A", // Very deep purple
          900: "#1A0B53", // Almost black purple
        },
      },
    },
  },
  plugins: [addVariablesForColors],
  function({ matchUtilities, theme }) {
    matchUtilities(
      {
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
