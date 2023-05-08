import NextImage from 'next/image';
import { ComponentPropsWithRef, forwardRef, ForwardRefExoticComponent } from 'react';

type ImageProps = ComponentPropsWithRef<typeof NextImage>;

export const Image: ForwardRefExoticComponent<ImageProps> = forwardRef<HTMLImageElement | null, Omit<ImageProps, 'ref'>>((props, ref) => (
  <NextImage ref={ref} {...props} />
));

Image.displayName = 'Image';
