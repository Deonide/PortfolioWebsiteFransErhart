import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.font-light-antialiased': {
          'font-weight': '300',
          'font-smoothing': 'antialiased',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'antialiased',
        },
        '.font-extralight-antialiased': {
          'font-weight': '200',
          'letter-spacing': '0.05em',
          'font-smoothing': 'antialiased',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'antialiased',
        },
        '.break-words-anywhere': {
          'overflow-wrap': 'anywhere',
          'word-break': 'break-word',
        },
      }
      addUtilities(newUtilities);
    })
  ],
} satisfies Config;