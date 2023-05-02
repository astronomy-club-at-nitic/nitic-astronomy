import { getMembers, getArticleDetail } from '@nitic-astronomy/cms';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

const MembersPage = async (): Promise<ReactElement> => {
  const article = await getArticleDetail({
    id: 'member-introduction',
  });
  const members = await getMembers();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex max-w-2xl flex-col gap-4 p-6">
        <h1 className="my-6 font-main text-5xl font-bold text-keyplate-12">部員紹介</h1>
        <section className="font-main">
          <h2 className="text-heading2 font-bold">紹介記事</h2>
          <pre className="w-full whitespace-pre-wrap break-all bg-keyplate-3 p-6 font-mono text-sm text-keyplate-11">
            <code>{JSON.stringify(article, null, 2)}</code>
          </pre>
        </section>
        <section>
          <h2 className="text-heading2 font-bold">部員一覧</h2>
          <pre className="w-full whitespace-pre-wrap break-all bg-keyplate-3 p-6 font-mono text-sm text-keyplate-11">
            <code>{JSON.stringify(members, null, 2)}</code>
          </pre>
        </section>
      </article>
    </div>
  );
};

export default MembersPage;

export const revalidate = 60;

export const metadata: Metadata = {
  title: '部員紹介',
  openGraph: {
    images: [`/api/ogimage?title=${encodeURIComponent('部員紹介')}`],
  },
};
