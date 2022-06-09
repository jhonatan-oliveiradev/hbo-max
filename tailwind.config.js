module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "spider-man": "url('/assets/background.jpg)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
