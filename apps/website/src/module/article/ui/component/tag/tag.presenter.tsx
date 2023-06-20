import type { FC, ComponentPropsWithoutRef } from 'react';
import { pickUniquely } from './pick-uniquely';
import { tv } from '@/core/util/tailwind-variants.util';

export const tagColors = ['plum', 'yellow', 'lime', 'mint', 'sky', 'amber', 'keyplate'] as const;

export type TagColor = (typeof tagColors)[number];

const tagStyle = tv({
  base: 'inline-flex rounded-full px-[0.75em] py-[0.375em]',
  variants: {
    color: {
      keyplate: 'bg-keyplate-4 text-keyplate-11',
      plum: 'bg-plum-4 text-plum-11',
      yellow: 'bg-yellow-4 text-yellow-11',
      lime: 'bg-lime-4 text-lime-11',
      mint: 'bg-mint-4 text-mint-11',
      sky: 'bg-sky-4 text-sky-11',
      amber: 'bg-amber-4 text-amber-11',
    } satisfies Record<TagColor, string>,
    forceDark: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      forceDark: true,
      color: 'keyplate',
      class: 'bg-keyplate-dark-4 text-keyplate-dark-11',
    },
    {
      forceDark: true,
      color: 'plum',
      class: 'bg-plum-dark-4 text-plum-dark-11',
    },
    {
      forceDark: true,
      color: 'yellow',
      class: 'bg-yellow-dark-4 text-yellow-dark-11',
    },
    {
      forceDark: true,
      color: 'lime',
      class: 'bg-lime-dark-4 text-lime-dark-11',
    },
    {
      forceDark: true,
      color: 'mint',
      class: 'bg-mint-dark-4 text-mint-dark-11',
    },
    {
      forceDark: true,
      color: 'sky',
      class: 'bg-sky-dark-4 text-sky-dark-11',
    },
    {
      forceDark: true,
      color: 'amber',
      class: 'bg-amber-dark-4 text-amber-dark-11',
    },
  ],
  defaultVariants: {
    color: 'plum',
    forceDark: false,
  },
});

export type TagProps = ComponentPropsWithoutRef<'span'> & {
  forceDark?: boolean;
} & {
  color?: TagColor;
  seed?: string;
};

export const Tag: FC<TagProps> = ({ forceDark, className, children, ...props }) => {
  const color: TagColor | undefined = props.seed ? pickUniquely(props.seed, [...tagColors]) : props.color;
  return (
    <span
      className={tagStyle({
        color,
        forceDark,
        class: className,
      })}
      {...props}
    >
      {children}
    </span>
  );
};
