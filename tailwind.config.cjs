/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
    },
    extend: {
      colors: {
        white: "#F5F5F5",
        black: {
          50: "#DFE4F1",
          100: "#BBC5E2",
          200: "#7A8FC7",
          300: "#435B9E",
          400: "#27365D",
          DEFAULT: "#0B0F1A",
          600: "#090C15",
          700: "#06080E",
          800: "#05060B",
          900: "#020204",
        },
        gray: {
          50: "#F6F7F9",
          100: "#EAEDF1",
          200: "#D4DAE3",
          300: "#BFC8D4",
          400: "#A9B5C6",
          DEFAULT: "#94A3B8",
          600: "#6C809D",
          700: "#4F6078",
          800: "#354050",
          900: "#1A2028",
        },
        blue: {
          50: "#E6EFFF",
          100: "#C8DCFE",
          200: "#95BCFE",
          300: "#5E98FD",
          400: "#2B78FC",
          DEFAULT: "#0359EE",
          600: "#0248BF",
          700: "#02358D",
          800: "#012460",
          900: "#01112D",
        },
        pink: {
          50: "#FBE5FF",
          100: "#F6C7FF",
          200: "#ED94FF",
          300: "#E45CFF",
          400: "#DA24FF",
          DEFAULT: "#C400EC",
          600: "#9D00BD",
          700: "#77008F",
          800: "#510061",
          900: "#26002E",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addVariant }) {
      addVariant(
        "supports-scrollbars",
        "@supports selector(::-webkit-scrollbar)"
      );
      addVariant("scrollbar", "&::-webkit-scrollbar");
      addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
      addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
    },
  ],
};
