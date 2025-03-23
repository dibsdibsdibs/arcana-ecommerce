import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FEFFFE",
        cream: "#F7F0E6",
        mint: "#C9CE8C",
        lightpink: "#F9D3D3",
        green: "#C4DBCE",
      },
      fontFamily: {
        ibmplexmono: ['"IBM Plex Mono"', 'monospace'],
        italianoldstyle: ['"ItalianOldstyle"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
