import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';
import { fontFamily } from '@/core/font/family.font';
import { ContextProvider } from '@/core/provider/context.provider';
import { PageTransitionAnimationProvider } from '@/core/provider/page-transition-animation.provider';
import { ThemeProvider } from '@/core/provider/theme.provider';
import { Footer } from '@/module/root/ui/footer.layout';
import { Header } from '@/module/root/ui/header.layout';
import { colorTokens } from '@/style/token';
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
        {/* Refer: https://vercel.com/docs/concepts/analytics/quickstart */}
        <Analytics />
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

// When VERCEL_URL is detected: https://${process.env.VERCEL_URL}
// If there's no environment variable VERCEL_URL is set, will always fallback to http://localhost:${process.env.PORT || 3000}.
// Refer: https://beta.nextjs.org/docs/api-reference/metadata#metadatabase
const domain = new URL(process.env['VERCEL_URL'] ? `https://${process.env['VERCEL_URL']}` : `http://localhost:${process.env['PORT'] || 3000}`);

export const metadata: Metadata = {
  metadataBase: domain,

  title: {
    default: '茨城高専 天文部',
    template: '%s | 茨城高専 天文部',
  },
  description: 'まったり星を眺めるのも、己の興味に従って研究をするのも、天文部ではすべてが自由。みなさんの入部をお待ちしています！',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  icons: '/favicon.png',
  openGraph: {
    // Open graph image will be provided via file-based configuration.
    // Refer: https://beta.nextjs.org/docs/api-reference/metadata#static-images
    type: 'website',
    locale: 'ja_JP',
    url: domain,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NITIC_astronomy',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: colorTokens.keyplate.light['2'] }, // keyplate-light-2
    { media: '(prefers-color-scheme: dark)', color: colorTokens.keyplate.dark['2'] }, // keyplate-dark-2
  ],
};
