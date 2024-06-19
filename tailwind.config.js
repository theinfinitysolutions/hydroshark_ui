const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marqueebanner: "marquee 5s linear infinite",
        slideUp: "slideUp 2s deplay-[1000ms] ease-in-out forwards",
        rotate: "rotate 8s linear infinite",
        bounce: "bounce1 5s infinite",
        bounceX: "bounceX 3s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(var(--move-initial), 0, 0)" },
          "100%": { transform: "translate3d(var(--move-final), 0, 0)" },
        },
        slideUp: {
          "0%": { opacity: 0.5, transform: "translateY(20vh) rotateX(0)" },

          "100%": { opacity: 1, transform: "translateY(0) rotateX(-8deg)" },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        bounce1: {
          "0%": {
            transform: "translateY(0)",
            rotate: "rotate(8deg)",
          },
          "50%": {
            transform: "translateY(-5vh)",
            rotate: "rotate(-8deg)",
          },
          "100%": {
            transform: "translateY(0)",
            rotate: "rotate(8deg)",
          },
        },
        bounceX: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-5vh)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
