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
      </article>
    </div>
  );
};

export default TagsPage;

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'タグ一覧',
  description: '茨城高専天文部が書いた記事につけているタグの一覧です。さまざまな活動をしているので、興味のあるタグを探してみてください！',
  openGraph: {
    images: [`/api/ogimage?title=${encodeURIComponent('タグ一覧')}`],
  },
};
