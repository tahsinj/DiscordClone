import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-gray': '#dfe1e4',
        discord: '#7289da',
        'medium-gray': '#f0f1f3',
        'dark-discord': '#4572c4',
      },
    },
  },
  plugins: [],
} satisfies Config;
