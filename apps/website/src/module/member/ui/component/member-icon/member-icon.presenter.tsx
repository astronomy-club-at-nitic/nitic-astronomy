import NextImage from 'next/image';
import { ComponentPropsWithRef, forwardRef, ForwardRefExoticComponent } from 'react';
import { twMerge } from '@/core/util/tw-merge.util';
import { breakpointTokens } from '@/style/token';

export type MemberIconProps = ComponentPropsWithRef<typeof NextImage>;

export const MemberIcon: ForwardRefExoticComponent<MemberIconProps> = forwardRef(
  ({ sizes, className, ...props }: Omit<MemberIconProps, 'ref'>, ref) => {
    return (
      <NextImage
        ref={ref}
        className={twMerge('h-12 w-12 overflow-hidden rounded-full  border-2 border-keyplate-3 bg-keyplate-4 object-contain', className)}
        sizes={sizes ?? `15vw, ${breakpointTokens.tablet.mediaQuery} 7.5vw`}
        {...props}
      ></NextImage>
    );
  },
);

MemberIcon.displayName = 'MemberIcon';
