import type { FC, ComponentPropsWithoutRef } from 'react';
import { Image } from '@/core/component/image';
import type { ImageProps } from '@/core/component/image';
import { twMerge } from '@/core/util/tw-merge.util';
import { breakpointTokens } from '@/style/token';
import AbstractImage from '@public/image/background/abstract.jpg';
import SquareDarkLogoImage from '@public/image/logo/square-dark.png';

export type CoverTitleProps = ComponentPropsWithoutRef<'h1'>;

export const CoverTitle: FC<CoverTitleProps> = ({ children, className, ...props }) => (
  <h1 {...props} className={twMerge('text-heading1 font-bold leading-[1.3] drop-shadow-[0px_6px_32px_#FFFFFF]', className)}>
    {children}
  </h1>
);

export type CoverDescriptionProps = ComponentPropsWithoutRef<'p'>;

export const CoverDescription: FC<CoverDescriptionProps> = ({ children, className, ...props }) => (
  <p {...props} className={twMerge('text-small', className)}>
    {children}
  </p>
);

export type CoverTagListProps = ComponentPropsWithoutRef<'ul'>;

export const CoverTagList: FC<CoverTagListProps> = ({ children, className, ...props }) => (
  <ul {...props} className={twMerge('flex w-full flex-row flex-wrap items-center justify-start gap-2 text-small', className)}>
    {children}
  </ul>
);

export type CoverProps = ComponentPropsWithoutRef<'div'> & Pick<ImageProps, 'src' | 'placeholder' | 'blurDataURL'>;

export const Cover: FC<CoverProps> = ({ src, placeholder, blurDataURL, children, className, ...props }) => {
  return (
    <div {...props} className={twMerge('relative flex h-[522px] w-full flex-col items-center justify-end bg-keyplate-6', className)}>
      <Image
        src={src ?? AbstractImage}
        fill
        placeholder={(!src && 'blur') || undefined}
        sizes="100vw"
        priority
        className="relative object-cover"
        alt="カバー"
        blurDataURL={blurDataURL}
      />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-keyplate-light-12/10 to-keyplate-light-12/50"></div>
      <hgroup className="relative z-10 flex w-full max-w-[700px] flex-col items-start justify-center gap-3 p-6 text-keyplate-light-1">
        <Image
          src={SquareDarkLogoImage}
          alt="茨城高専天文部のロゴ"
          placeholder="blur"
          sizes={`20vw, ${breakpointTokens.tablet.mediaQuery} 10vw, ${breakpointTokens.desktop.mediaQuery} 7.5vw`}
          className="mb-1.5 h-24 w-24 bg-purple-light-9"
        />
        {children}
      </hgroup>
    </div>
  );
};
