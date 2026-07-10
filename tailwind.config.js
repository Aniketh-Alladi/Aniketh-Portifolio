/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF3DC",
        charcoal: "#161616",
        crimson: "#E02A2E",
        gold: "#F2B90D",
        ink: "#111111",
        muted: "#666666",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(17, 17, 17, 0.06)",
        lift: "0 16px 40px rgba(17, 17, 17, 0.12)",
      },
    },
  },
  plugins: [],
};
