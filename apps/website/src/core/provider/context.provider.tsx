'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';
import { RecoilRoot } from 'recoil';

type ContextProviderProps = ComponentPropsWithoutRef<typeof RecoilRoot>;

export const ContextProvider: FC<ContextProviderProps> = ({ children, ...props }) => <RecoilRoot {...props}>{children}</RecoilRoot>;
