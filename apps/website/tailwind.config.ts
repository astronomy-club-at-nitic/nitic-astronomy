import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { createThemes } from 'tw-colors';

import breakpoints from './src/style/token/breakpoint.json';
import coreTokens from './src/style/token/color/core.json';
import darkTokens from './src/style/token/color/dark.json';
import lightTokens from './src/style/token/color/light.json';

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  // Tailwind CSSのユーティリティセレクタ`dark:`に対応するCSSセレクタ
  // この場合、`dark:`は`[data-theme="dark"] `に置き換えられる
  darkMode: ['class', '[data-theme="dark"]'], // 必ず`next-themes`の設定と合わせる！
  theme: {
    screens: {
      mobile: `${breakpoints.mobile.minWidth}px`,
      tablet: `${breakpoints.tablet.minWidth}px`,
      desktop: `${breakpoints.desktop.minWidth}px`,
    },
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
      backgroundImage: {
        'dot-pattern-light': "url('/image/background/dot-pattern-light.svg')",
        'dot-pattern-dark': "url('/image/background/dot-pattern-dark.svg')",
      },
      boxShadow: {
        card: '0px 4px 16px rgba(0, 0, 0, 0.05)',
        floating: '0px 4px 32px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        main: [...defaultTheme.fontFamily.sans],
        article: ['var(--font-shippori-mincho-b1)', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        article: [
          '1.125rem',
          {
            lineHeight: '1.55', // 155%
          },
        ],
        heading1: [
          '2.5rem',
          {
            fontWeight: '700',
          },
        ],
        heading2: [
          '2rem',
          {
            fontWeight: '700',
          },
        ],
        heading3: [
          '1.75rem',
          {
            fontWeight: '700',
          },
        ],
        small: '0.75rem',
      },
      lineHeight: {
        medium: '1.55',
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

export default config;
