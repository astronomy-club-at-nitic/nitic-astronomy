import NextLink from 'next/link';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { twMerge } from '@/core/util/tw-merge.util';

type LinkProps =
  | ComponentPropsWithoutRef<typeof NextLink>
  | (ComponentPropsWithoutRef<'a'> & {
      external: true;
    });

export const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  // Since experimental typedRoutes is enabled, NextLink only accepts
  // statically-typed routes and URL Objects, not strings.
  // Moreover, in React server components, it is unable to pass URL Objects via props. (SC to CC)
  // (It cannot be serialized as shown in the error message below.)

  // Warning: Only plain objects can be passed to Client Components from Server Components. URL objects are not supported.
  // <... className=... href={URL} target=... rel=... children=...>
  //                        ^^^^^

  // Therefore, we'd better use <a> tag instead of NextLink for external urls.

  // If the link is external, use <a> tag
  if ('external' in props) {
    // external is not a valid prop for <a> tag
    const { external, ...anchorProps } = props;
    return (
      <a className={twMerge('underline', className)} {...anchorProps}>
        {children}
      </a>
    );
  }
  // If not, use NextLink
  return (
    <NextLink className={twMerge('underline', className)} {...props}>
      {children}
    </NextLink>
  );
};

Link.displayName = 'Link';
