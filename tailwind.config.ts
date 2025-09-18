import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // app router files
    "./src/components/**/*.{js,ts,jsx,tsx}", // components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
