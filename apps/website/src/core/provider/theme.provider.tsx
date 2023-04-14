'use client';

// 参考: https://github.com/khinshankhan/next-themes-app-dir-example

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ComponentPropsWithoutRef, FC } from 'react';

type ThemeProviderProps = ComponentPropsWithoutRef<typeof NextThemesProvider>;

// https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => <NextThemesProvider {...props}>{children}</NextThemesProvider>;
