'use client';

import { AnimatePresence } from 'framer-motion';
import type { ComponentPropsWithoutRef, FC } from 'react';

type PageTransitionAnimationProviderProps = ComponentPropsWithoutRef<typeof AnimatePresence>;

export const PageTransitionAnimationProvider: FC<PageTransitionAnimationProviderProps> = ({ children, ...props }) => (
  <AnimatePresence mode="wait" onExitComplete={() => window?.scrollTo(0, 0)} {...props}>
    {children}
  </AnimatePresence>
);
