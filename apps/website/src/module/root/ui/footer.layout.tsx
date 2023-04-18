import type { ComponentPropsWithoutRef, FC } from 'react';

type FooterProps = ComponentPropsWithoutRef<'footer'>;

export const Footer: FC<FooterProps> = () => (
  <footer className="flex w-full items-center justify-center p-3">
    <span className="rounded-full bg-keyplate-3 px-2 py-1 text-small text-keyplate-11">Copyright © 2023 Astronomy Club at NITIC</span>
  </footer>
);
