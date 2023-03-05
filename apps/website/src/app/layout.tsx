'use client';

import { AnimatePresence } from 'framer-motion';
import type { FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { fontFamily } from '@/core/font/family.font';
import { Footer } from '@/module/root/ui/footer.layout';
import { Header } from '@/module/root/ui/header.layout';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <RecoilRoot>
    <html
      lang="ja"
      className={`${fontFamily} font-sans scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-500`}
    >
      <head />
      <body className="flex min-h-screen flex-col">
        <Header />
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <main className="min-h-full grow">{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  </RecoilRoot>
);

export default RootLayout;
