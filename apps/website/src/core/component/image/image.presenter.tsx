import NextImage from 'next/image';
import { ComponentPropsWithRef, forwardRef, ForwardRefExoticComponent } from 'react';

type ImageProps = Omit<ComponentPropsWithRef<typeof NextImage>, 'sizes'> & {
  sizes?: ComponentPropsWithRef<typeof NextImage>['height' | 'width'];
};

export const Image: ForwardRefExoticComponent<ImageProps> = forwardRef<HTMLImageElement | null, Omit<ImageProps, 'ref'>>(
  ({ height, width, sizes, ...props }, ref) => <NextImage ref={ref} height={height ?? sizes} width={width ?? sizes} {...props} />,
);

Image.displayName = 'Image';
