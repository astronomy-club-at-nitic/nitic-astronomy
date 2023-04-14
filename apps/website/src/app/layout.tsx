import type { FC, ReactNode } from 'react';
import { fontFamily } from '@/core/font/family.font';
import { ContextProvider } from '@/core/provider/context.provider';
import { PageTransitionAnimationProvider } from '@/core/provider/page-transition-animation.provider';
import { ThemeProvider } from '@/core/provider/theme.provider';
import { Footer } from '@/module/root/ui/footer.layout';
import { Header } from '@/module/root/ui/header.layout';
import '@/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <ContextProvider>
    {/* `next-themes`プロバイダによるHydration差分を無視するため`suppressHydrationWarning`を付加する */}
    {/* 参照: https://github.com/pacocoursey/next-themes/issues/152 */}
    {/* 参照: https://github.com/khinshankhan/next-themes-app-dir-example */}
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body
        className={`${fontFamily} flex min-h-screen flex-col bg-slate-2 font-sans scrollbar-thin scrollbar-track-transparent scrollbar-thumb-keyplate-6 scrollbar-thumb-rounded-full hover:scrollbar-thumb-keyplate-7`}
      >
        <ThemeProvider attribute="data-theme">
          <Header />
          <PageTransitionAnimationProvider>
            <main className="min-h-full grow">{children}</main>
          </PageTransitionAnimationProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  </ContextProvider>
);

export default RootLayout;
