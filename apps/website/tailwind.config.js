const tailwindScrollbar = require('tailwind-scrollbar');

/** @type {import('tailwindcss').Config} */
const config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
        code: ['var(--font-Shippori-mincho-b1)'],
      },
      colors: {
        // TODO: Extend by figma tokens.
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
  variants: {
    scrollbar: ['rounded'],
  },
};

module.exports = config;
