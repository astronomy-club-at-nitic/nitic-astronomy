'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';
import { useMedia } from 'react-use';
import { Footer as FooterPresenter } from './footer.presenter';

type FooterProps = Omit<ComponentPropsWithoutRef<typeof FooterPresenter>, 'isSm'>;

export const Footer: FC<FooterProps> = ({ ...props }) => {
  const isSm = useMedia('(width >= 640px)');

  return <FooterPresenter isSm={isSm} {...props} />;
};
