import { getTagIds, getTagDetail } from '@nitic-astronomy/cms';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactElement } from 'react';

type TagPageParams = {
  tagId: string;
};

export const generateStaticParams = async (): Promise<TagPageParams[]> => {
  const { tagIds } = await getTagIds();
  return tagIds.map((tagId) => ({
    tagId,
  }));
};

const TagPage = async ({ params }: { params: TagPageParams }): Promise<ReactElement> => {
  const tag = await getTagDetail({
    id: params.tagId,
  }).catch(() => {
    notFound();
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex max-w-2xl flex-col gap-4 p-6">
        <h1 className="my-6 font-main text-5xl font-bold text-keyplate-12">{`タグ: #${tag.name}`}</h1>
        <section className="font-main">
          <pre className="w-full whitespace-pre-wrap break-all bg-keyplate-3 p-6 font-mono text-sm text-keyplate-11">
            <code>{JSON.stringify(tag, null, 2)}</code>
          </pre>
        </section>
      </article>
    </div>
  );
};

export default TagPage;

export const revalidate = 60;

export const generateMetadata = async ({ params }: { params: TagPageParams }): Promise<Metadata> => {
  const tag = await getTagDetail({
    id: params.tagId,
  }).catch(() => {
    notFound();
  });

  const metadata: Metadata = {
    title: `#${tag.name}`,
    description: tag.description || `#${tag.name}のついている記事の一覧です。`,
    openGraph: {
      images: [
        {
          url: `/api/ogimage?title=${encodeURIComponent(`#${tag.name}`)}`,
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
      locale: 'ja_JP',
    },
  };

  return metadata;
};
