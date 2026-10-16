/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#040407',
        surface: '#09090f',
        card: '#0f0f16',
        cardHover: '#151520',
        borderDim: 'rgba(255, 255, 255, 0.07)',
        borderHover: 'rgba(255, 255, 255, 0.18)',
        accentCyan: '#38bdf8',
        accentEmerald: '#10b981',
        accentViolet: '#818cf8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
