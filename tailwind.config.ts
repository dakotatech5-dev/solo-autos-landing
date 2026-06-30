import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        graphite: "#292929",
        line: "#E7E5E4",
        accent: "#E94B2C",
        soft: "#F7F5F2"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
