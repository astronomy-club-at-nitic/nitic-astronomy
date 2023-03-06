import type { Metadata } from 'next';
import type { FC } from 'react';

const RootPage: FC = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
    <hgroup className="text-center">
      <h1 className="my-4 text-4xl font-bold">
        <span className="rounded-full bg-primary-3 px-8 py-2 text-primary-11">Astronomy Club</span> at&nbsp;NITIC
      </h1>
      <p>
        Next 13 with <code className="bg-keyplate-3 text-keyplate-11">/app</code>{' '}
        <span className="font-bold text-teal-11">styled using Tailwind CSS</span>
      </p>
    </hgroup>
    <article className="flex max-w-2xl flex-col gap-4">
      <section className="font-main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p>
          そこでは、あらゆる事が可能である。人は一瞬にして氷雲の上に飛躍し大循環の風を従へて北に旅する事もあれば、赤い花杯の下を行く蟻と語ることもできる。
          罪や、かなしみでさへそこでは聖くきれいにかゞやいてゐる。
        </p>
      </section>
      <section className="font-article text-article">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p>
          そこでは、あらゆる事が可能である。人は一瞬にして氷雲の上に飛躍し大循環の風を従へて北に旅する事もあれば、赤い花杯の下を行く蟻と語ることもできる。
          罪や、かなしみでさへそこでは聖くきれいにかゞやいてゐる。
        </p>
      </section>
    </article>
  </div>
);

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
