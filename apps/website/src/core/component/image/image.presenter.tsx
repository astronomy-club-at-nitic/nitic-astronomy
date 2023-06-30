import NextImage from 'next/image';
import type { ImageProps } from 'next/image';
import { useMemo } from 'react';
import { forwardRef, ForwardRefExoticComponent } from 'react';

const isImageSourceRemote = (src: string | unknown): src is string => {
  return typeof src === 'string';
};

export const Image: ForwardRefExoticComponent<ImageProps> = forwardRef<HTMLImageElement | null, Omit<ImageProps, 'ref'>>(
  ({ src, placeholder, blurDataURL, ...props }, ref) => {
    // Refer: https://github.com/vercel/next.js/discussions/26168
    const remoteBlurDataURL = useMemo(() => (isImageSourceRemote(src) ? `/_next/image?url=${encodeURIComponent(src)}&w=64&q=75` : undefined), [src]);
    return (
      <NextImage
        src={src}
        placeholder={(!!remoteBlurDataURL && 'blur') || placeholder}
        blurDataURL={remoteBlurDataURL || blurDataURL}
        ref={ref}
        {...props}
      />
    );
  },
);

Image.displayName = 'Image';
