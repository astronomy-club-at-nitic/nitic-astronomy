import type { FC, ComponentPropsWithoutRef } from 'react';
import { Image } from '@/core/component/image';
import { twMerge } from '@/core/util/tw-merge.util';
import AstralDarkBackgroundImage from '@public/image/background/astral-dark.jpg';
import AstralLightBackgroundImage from '@public/image/background/astral-light.jpg';

type PageSummaryMemberListProps = ComponentPropsWithoutRef<'ol'>;

export const PageSummaryMemberList: FC<PageSummaryMemberListProps> = ({ children, className, ...props }) => (
  <ol
    className={twMerge(
      'flex flex-col items-stretch justify-start gap-2 tablet:flex-row tablet:flex-wrap tablet:items-center tablet:justify-center tablet:gap-8',
      className,
    )}
    {...props}
  >
    {children}
  </ol>
);

type PageSummaryHeadingProps = ComponentPropsWithoutRef<'p'>;

export const PageSummaryHeading: FC<PageSummaryHeadingProps> = ({ children, className, ...props }) => (
  <h2 {...props} className={twMerge('text-center font-bold', className)}>
    {children}
  </h2>
);

type PageSummaryProps = ComponentPropsWithoutRef<'div'>;

export const PageSummary: FC<PageSummaryProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={twMerge('relative flex w-full flex-col items-center justify-center bg-keyplate-3', className)}>
      <Image
        src={AstralLightBackgroundImage}
        aria-hidden
        fill
        placeholder="blur"
        sizes="100vw"
        className="relative object-cover dark:hidden"
        alt="明るい星空の背景"
      />
      <Image
        src={AstralDarkBackgroundImage}
        aria-hidden
        fill
        placeholder="blur"
        sizes="100vw"
        className="relative hidden object-cover dark:block"
        alt="暗い星空の背景"
      />
      <div className="relative z-10 flex w-full max-w-[700px] flex-col items-center justify-center gap-3 p-6">{children}</div>
    </div>
  );
};
