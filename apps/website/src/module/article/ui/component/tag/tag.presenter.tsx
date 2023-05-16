import { cva } from 'class-variance-authority';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { pickUniquely } from './pick-uniquely';

export const tagColors = ['plum', 'yellow', 'lime', 'mint', 'sky', 'amber', 'keyplate'] as const;

export type TagColor = (typeof tagColors)[number];

const tagColorStyle = cva<{
  color: Record<TagColor, string>;
}>(null, {
  variants: {
    color: {
      keyplate: 'bg-keyplate-4 text-keyplate-11',
      plum: 'bg-plum-4 text-plum-11',
      yellow: 'bg-yellow-4 text-yellow-11',
      lime: 'bg-lime-4 text-lime-11',
      mint: 'bg-mint-4 text-mint-11',
      sky: 'bg-sky-4 text-sky-11',
      amber: 'bg-amber-4 text-amber-11',
    },
  },
});

const tagForceDarkColorStyle = cva<{
  color: Record<TagColor, string>;
}>(null, {
  variants: {
    color: {
      keyplate: 'bg-keyplate-dark-4 text-keyplate-dark-11',
      plum: 'bg-plum-dark-4 text-plum-dark-11',
      yellow: 'bg-yellow-dark-4 text-yellow-dark-11',
      lime: 'bg-lime-dark-4 text-lime-dark-11',
      mint: 'bg-mint-dark-4 text-mint-dark-11',
      sky: 'bg-sky-dark-4 text-sky-dark-11',
      amber: 'bg-amber-dark-4 text-amber-dark-11',
    },
  },
});

export type TagProps = ComponentPropsWithoutRef<'span'> & {
  forceDark?: boolean;
} & {
  color?: TagColor;
  seed?: string;
};

export const Tag: FC<TagProps> = ({ forceDark, className, children, ...props }) => {
  const color: TagColor = (props.seed ? pickUniquely(props.seed, [...tagColors]) : props.color) || 'plum';
  return (
    <span
      className={twMerge(
        'inline-flex rounded-full px-[0.75em] py-[0.375em]',
        tagColorStyle({ color }),
        forceDark && tagForceDarkColorStyle({ color }),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
