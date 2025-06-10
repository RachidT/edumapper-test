export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "page-bg": "#F7F3F0",
        "card-bg": "#FCFAF9",
      },
      screens: {
        md: "744px",
      },
      width: {
        "screen-content": "720px",
      },
    },
  },
  plugins: [],
};
