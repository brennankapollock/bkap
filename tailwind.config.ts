import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        static: {
          green: '#00ff00',
          amber: '#ffff00',
          red: '#ff0000',
        },
        crt: {
          bg: '#000000',
          scan: '#001100',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        display: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'glitch-1': 'glitch-1 2s infinite',
        'glitch-2': 'glitch-2 3s infinite',
        'scan-lines': 'scan-lines 0.1s linear infinite',
        'flicker': 'flicker 0.15s infinite linear',
      },
      keyframes: {
        'glitch-1': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'glitch-2': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(2px, -2px)' },
          '40%': { transform: 'translate(2px, 2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'scan-lines': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config