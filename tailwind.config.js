/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#121212', // Matte black background
        'bg-darker': '#0A0A0A', // Even darker background
        'neon-green': '#39FF14', // Neon green accent
        'electric-violet': '#9D00FF', // Electric violet accent
        'glitch-pink': '#FF00FF', // Glitch pink accent
        'light-text': '#F5F5F5', // Light text color
        'dark-text': '#1A1A1A', // Dark text color
        'grey-text': '#AAAAAA', // Grey text color
      },
      fontFamily: {
        sans: ['var(--font-druk)', 'var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 2s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
      },
      backgroundImage: {
        'noise-pattern': "url('/noise.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
