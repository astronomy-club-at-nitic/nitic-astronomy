import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from '@/core/util/tw-merge.util';

export type BannerProps = ComponentPropsWithoutRef<'nav'> & {
  variant?: 'info' | 'warning';
};

export const Banner: FC<BannerProps> = ({ variant = 'info', className, children, ...props }) => (
  <nav
    aria-label="グローバルバナー"
    className={twMerge(
      'flex flex-col items-center justify-center gap-1 self-stretch px-6 py-3 font-bold',
      variant === 'info' && 'bg-info-9 text-info-1',
      variant === 'warning' && 'bg-warning-9 text-warning-light-12',
      className,
    )}
    {...props}
  >
    {children}
  </nav>
);
