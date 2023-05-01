import { getTags } from '@nitic-astronomy/cms';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactElement } from 'react';

const TagsPage = async (): Promise<ReactElement> => {
  const { tags } = await getTags({
    limit: 100,
    offset: 0,
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex max-w-2xl flex-col gap-4 p-6">
        <h1 className="my-6 font-main text-5xl font-bold text-keyplate-12">タグ一覧</h1>
        {tags.map((tag) => (
          <Link href={`/tag/${tag.id}`} key={tag.id} className="text-info-11 underline">
            #{tag.name}
          </Link>
        ))}
        <pre className="w-full whitespace-pre-wrap break-all bg-keyplate-3 p-6 font-mono text-sm text-keyplate-11">
          <code>{JSON.stringify(tags, null, 2)}</code>
        </pre>
        <section className="font-main">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
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
};

export default TagsPage;

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'タグ一覧',
};
