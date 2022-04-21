module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Montserrat, Arial, sans-serif",
      serif: "Georgia, serif",
      mono: "Consolas",
      roboto: "Roboto, Calibri, sans-serif",
    },
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in forwards",
        "fade-in-fast": "fade-in 0.1s ease-in forwards",
        "fade-in-down": "fade-in-down 1s ease-out",
        "fade-in-left": "fade-in-left 1s ease-out",
        "fade-in-right": "fade-in-right 1s ease-out",
      },
    },
  },
  plugins: [],
};
