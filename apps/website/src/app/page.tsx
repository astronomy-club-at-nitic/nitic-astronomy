import type { Metadata } from 'next';
import type { FC } from 'react';

const RootPage: FC = () => <div />;

export default RootPage;

export const generateMetadata = async (): Promise<Metadata> => {
  const metadata: Metadata = {
    title: '茨城高専 天文部',
    description: 'まったり星を眺めるのも、己の興味に従って研究をするのも、天文部ではすべてが自由。みなさんの入部をお待ちしています！',
    viewport: {
      width: 'device-width',
      initialScale: 1.0,
    },
    icons: '/favicon.ico',
    openGraph: {
      type: 'website',
      url: `https://${process.env['NEXT_PUBLIC_HOSTNAME']}`,
      images: `https://${process.env['NEXT_PUBLIC_HOSTNAME']}/ogp.png`,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@NITIC_astronomy',
    },
  };

  return metadata;
};
