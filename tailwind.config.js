/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        dm: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#07070f',
          alt: '#0f0f1c',
          card: '#13132a',
        },
        violet: {
          glow: '#a78bfa',
          primary: '#7c3aed',
          light: '#c4b5fd',
          dark: '#4c1d95',
          muted: '#2d1b69',
        },
        text: {
          primary: '#f0eeff',
          secondary: '#b3aed6',
          muted: '#6b6899',
        },
        border: {
          DEFAULT: '#1e1b4b',
          light: '#312e81',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'violet-glow': 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, #07070f 0%, #0f0f1c 50%, #12082a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(167,139,250,0.3)' },
          '100%': { textShadow: '0 0 30px rgba(167,139,250,0.8), 0 0 60px rgba(124,58,237,0.4)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'violet-sm': '0 0 15px rgba(124,58,237,0.15)',
        'violet-md': '0 0 30px rgba(124,58,237,0.25)',
        'violet-lg': '0 0 60px rgba(124,58,237,0.3)',
        'card': '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(124,58,237,0.2)',
      },
    },
  },
  plugins: [],
};
