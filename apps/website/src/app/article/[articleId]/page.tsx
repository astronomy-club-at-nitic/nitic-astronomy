import { getArticleIds, getArticleDetail } from '@nitic-astronomy/cms';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactElement } from 'react';

type ArticlePageParams = {
  articleId: string;
};

export const generateStaticParams = async (): Promise<ArticlePageParams[]> => {
  const { articleIds } = await getArticleIds();
  return articleIds.map((articleId) => ({
    articleId,
  }));
};

const ArticlePage = async ({ params }: { params: ArticlePageParams }): Promise<ReactElement> => {
  const article = await getArticleDetail({
    id: params.articleId,
  }).catch(() => {
    notFound();
  });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-keyplate-12">
      <article className="flex max-w-2xl flex-col gap-4 p-6">
        <h1 className="my-6 font-main text-5xl font-bold text-keyplate-12">{`記事: ${article.title}`}</h1>
        <section className="font-main">
          <pre className="w-full whitespace-pre-wrap break-all bg-keyplate-3 p-6 font-mono text-sm text-keyplate-11">
            <code>{JSON.stringify(article, null, 2)}</code>
          </pre>
        </section>
      </article>
    </div>
  );
};

export default ArticlePage;

export const revalidate = 60;

export const generateMetadata = async ({ params }: { params: ArticlePageParams }): Promise<Metadata> => {
  const article = await getArticleDetail({
    id: params.articleId,
  }).catch(() => {
    notFound();
  });

  const metadata: Metadata = {
    title: `記事: ${article.title}`,
    openGraph: {
      description: article.summary,
      images: [
        {
          url: `/api/ogimage?title=${encodeURIComponent(article.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      type: 'article',
      locale: 'ja_JP',
      authors: article.authors.map((author) => author.name),
      publishedTime: article.publishedAt,
    },
  };

  return metadata;
};
