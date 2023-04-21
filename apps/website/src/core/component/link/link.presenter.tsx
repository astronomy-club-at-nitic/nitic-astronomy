import NextLink from 'next/link';
import type { ComponentPropsWithoutRef, FC } from 'react';

type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export const Link: FC<LinkProps> = ({ children, ...props }) => (
  <NextLink className="underline" {...props}>
    {children}
  </NextLink>
);

Link.displayName = 'Link';
