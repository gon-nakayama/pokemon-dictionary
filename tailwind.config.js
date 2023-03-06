module.exports = {
  mode: "jit",
  darkMode: false, // 'media' or 'class'
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {
      animation: {
        "slide-in-bottom":
          "slide-in-bottom 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionDelay: ["hover", "focus"],
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
