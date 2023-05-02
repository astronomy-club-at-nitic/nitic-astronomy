import type { ComponentPropsWithoutRef, FC } from 'react';
import { Footer as FooterPresenter } from './footer.presenter';

type FooterProps = ComponentPropsWithoutRef<typeof FooterPresenter>;

export const Footer: FC<FooterProps> = ({ ...props }) => {
  return <FooterPresenter {...props} />;
};
