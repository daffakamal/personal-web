/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      desc: "17px",
      subTitle: "18px",
      title: "27px",
      md: "16px",
      xl: "28px",
      "2xl": "32px",
    },
    extend: {
      colors: {
        "blue-100": "#C8E1FF",
        "blue-200": "#0057BD",
        "blue-300": "#3692FF",
        "blue-900": "#1C4188",
        "purple-100": "#BDBCFF",
        "pink-100": "#EFC1FF",
        "black-800": "#282828",
        "black-900": "#3A3A3A",
        "white-100": "#FAFAFA",
      },
      dropShadow: {
        gray: "0 8px 13px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
