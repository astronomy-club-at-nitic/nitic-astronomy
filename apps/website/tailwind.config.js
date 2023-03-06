const tailwindScrollbar = require('tailwind-scrollbar');
const { createThemes } = require('tw-colors');

const coreTokens = require('./src/style/token/core.json');
const darkTokens = require('./src/style/token/dark.json');
const lightTokens = require('./src/style/token/light.json');

/** @type {import('tailwindcss').Config} */
const config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  // Tailwind CSSのユーティリティセレクタ`dark:`に対応するCSSセレクタ
  // この場合、`dark:`は`[data-theme="dark"] `に置き換えられる
  darkMode: ['[data-theme="dark"]'], // 必ず`next-themes`の設定と合わせる！
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      primary: coreTokens.colors.plum,
      info: coreTokens.colors.cyan,
      success: coreTokens.colors.green,
      warning: coreTokens.colors.yellow,
      danger: coreTokens.colors.crimson,
      keyplate: coreTokens.colors.slate,
      ...coreTokens.colors,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
        code: ['var(--font-Shippori-mincho-b1)'],
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    createThemes({
      // `.theme-light`か`data-theme='light'`のついている要素(の子孫)に適用される
      light: {
        primary: lightTokens.colors.plum,
        info: lightTokens.colors.cyan,
        success: lightTokens.colors.green,
        warning: lightTokens.colors.yellow,
        danger: lightTokens.colors.crimson,
        keyplate: lightTokens.colors.slate,
        ...lightTokens.colors,
      },
      // `.theme-dark`か`data-theme='dark'`のついている要素(の子孫)に適用される
      dark: {
        primary: darkTokens.colors.plum,
        info: darkTokens.colors.cyan,
        success: darkTokens.colors.green,
        warning: darkTokens.colors.yellow,
        danger: darkTokens.colors.crimson,
        keyplate: darkTokens.colors.slate,
        ...darkTokens.colors,
      },
    }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};

module.exports = config;
