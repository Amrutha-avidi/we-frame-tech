/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        },
      },
      animation: {
        typewriter: 'typewriter 9s steps(30) 1s infinite', // Smooth typing animation
        blink: 'blink 0.7s steps(2) infinite', // Blinking caret
      },
    },
  },
  plugins: [],
};
