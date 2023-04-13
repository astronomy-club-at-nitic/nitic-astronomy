'use client';

import { AnimatePresence as OriginalAnimationPresence } from 'framer-motion';
import type { ComponentPropsWithoutRef, FC } from 'react';

type AnimatePresenceProps = ComponentPropsWithoutRef<typeof OriginalAnimationPresence>;

export const AnimatePresence: FC<AnimatePresenceProps> = ({ children, ...props }) => (
  <OriginalAnimationPresence mode="wait" onExitComplete={() => window?.scrollTo(0, 0)} {...props}>
    {children}
  </OriginalAnimationPresence>
);
