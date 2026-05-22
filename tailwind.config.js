/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'pp-shadow': '0 0 25px #00ffee',
        'pp-dark-shadow': '0 0 25px #6b21a8',
        'ep-shadow': '0 0 8px #00ffee',
        'pp-link': '0 0 10px #00ffee',
        'pp-link-dark': '0 0 10px #6b21a8',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),],
  darkMode: "class",
}
