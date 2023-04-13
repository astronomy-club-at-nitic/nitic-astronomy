'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';
import { RecoilRoot as OriginalRecoilRoot } from 'recoil';

type RecoilRootProps = ComponentPropsWithoutRef<typeof OriginalRecoilRoot>;

export const RecoilRoot: FC<RecoilRootProps> = ({ children, ...props }) => <OriginalRecoilRoot {...props}>{children}</OriginalRecoilRoot>;
