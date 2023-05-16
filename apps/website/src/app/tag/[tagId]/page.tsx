import type { Metadata } from 'next';
import type { FC } from 'react';

type TagPageParams = {
  tagId: string;
};

const TagPage: FC<{
  params: TagPageParams;
}> = ({ params }) => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
    <article className="flex max-w-2xl flex-col gap-4 p-6">
      <h1 className="my-6 font-main text-5xl font-bold text-keyplate-12">タグ: {params.tagId}</h1>
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

export default TagPage;

export const revalidate = 60;

export const generateMetadata = async ({ params }: { params: TagPageParams }): Promise<Metadata> => {
  const metadata: Metadata = {
    title: `タグ: ${params.tagId}`,
  };

  return metadata;
};
