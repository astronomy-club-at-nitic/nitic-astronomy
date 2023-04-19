import NextLink from 'next/link';
import { ComponentPropsWithRef, forwardRef, ForwardRefExoticComponent } from 'react';

type LinkProps = ComponentPropsWithRef<typeof NextLink>;

export const Link: ForwardRefExoticComponent<LinkProps> = forwardRef<HTMLAnchorElement, Omit<LinkProps, 'ref'>>(({ children, ...props }, ref) => (
  <NextLink ref={ref} className="underline" {...props}>
    {children}
  </NextLink>
));

Link.displayName = 'Link';
