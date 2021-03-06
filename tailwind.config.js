module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      intro: "#ffeed9",
      slider: "#d6ae7b",
      background: "#fff5e6",
    }),
    extend: {
      backgroundImage: {
        "hero-image-md":
          "url('https://res.cloudinary.com/deevlog/image/upload/c_scale,h_960,w_1024/v1635724348/lp-tas-hero_miuxmh.jpg')",
        "hero-image-lg":
          "url('https://res.cloudinary.com/deevlog/image/upload/c_scale,h_960,w_1440/v1635724348/lp-tas-hero_miuxmh.jpg')",
      },
      keyframes: {
        arrow: {
          "0%": {
            opacity: "0",
            transform: "rotate(45deg) translate(-20px, -20px)",
          },
          "50%": { opacity: "1" },
          "100%": {
            opacity: "0",
            transform: "rotate(45deg) translate(20px, 20px)",
          },
        },
      },
      animation: {
        arrow: "arrow 2s infinite",
      },
    },
    fontFamily: {
      Script: ["Dancing Script", "ui-serif"],
      serif: ["ui-serif", "Georgia", "Cambria", "Times", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
