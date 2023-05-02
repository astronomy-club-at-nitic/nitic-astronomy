import breakpoints from './breakpoint.json';
import coreColorTokens from './color/core.json';

export const colorTokens = {
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
  primary: coreColorTokens.colors.plum,
  info: coreColorTokens.colors.cyan,
  success: coreColorTokens.colors.green,
  warning: coreColorTokens.colors.yellow,
  danger: coreColorTokens.colors.crimson,
  keyplate: coreColorTokens.colors.slate,
  ...coreColorTokens.colors,
};

export const breakpointTokens = breakpoints;
