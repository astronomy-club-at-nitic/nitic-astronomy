import { getArticles } from '@nitic-astronomy/cms';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactElement } from 'react';

const ArticlesPage = async (): Promise<ReactElement> => {
  const { articles } = await getArticles({
    limit: 100,
    offset: 0,
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex max-w-2xl flex-col gap-4 p-6">
        <h1 className="my-6 font-main text-5xl font-bold text-keyplate-12">記事一覧</h1>
        {articles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id} className="text-info-11 underline">
            🖋️ {article.title}
          </Link>
        ))}
        <pre className="w-full whitespace-pre-wrap break-all bg-keyplate-3 p-6 font-mono text-sm text-keyplate-11">
          <code>{JSON.stringify(articles, null, 2)}</code>
        </pre>
      </article>
    </div>
  );
};

export default ArticlesPage;

export const revalidate = 60;

export const metadata: Metadata = {
  title: '記事一覧',
};
