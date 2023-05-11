import { getArticleIds, getArticleDetail } from '@nitic-astronomy/cms';
import { format, parseISO } from 'date-fns';
import ja from 'date-fns/locale/ja';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { ReactElement } from 'react';
import { Cover, CoverHeadingGroup, CoverDescription, CoverTagList, CoverHeading } from '@/core/component/cover/cover.presenter';
import { Link } from '@/core/component/link';
import { PageSummary, PageSummaryHeading, PageSummaryMemberList } from '@/core/component/page-summary';
import { Tag } from '@/module/article/ui/component/tag';
import { MemberCard } from '@/module/member/ui/component/member-card';
import { MemberSummary } from '@/module/member/ui/component/member-summary';

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
    <div className="flex min-h-screen w-full flex-col items-center justify-start gap-4 text-keyplate-12">
      <article className="flex w-full  flex-col items-center justify-start">
        <Cover src={article.cover?.url}>
          <CoverHeadingGroup>
            <CoverHeading>{article.title}</CoverHeading>
            <CoverDescription>
              {article.publishedAt && `${format(parseISO(article.publishedAt), 'yyyy年MM月dd日(E)', { locale: ja })} 公開`}
              {article.updatedAt && ` ・ ${format(parseISO(article.updatedAt), 'yyyy年MM月dd日(E)', { locale: ja })} 更新`}
            </CoverDescription>
          </CoverHeadingGroup>
          <CoverTagList>
            {article.tags.map((tag) => (
              <li key={tag.id} className="shrink">
                <Link href={`/tag/${tag.id}`}>
                  <Tag seed={tag.name} forceDark className="duration-100 hover:scale-110 hover:shadow-card">
                    #{tag.name}
                  </Tag>
                </Link>
              </li>
            ))}
          </CoverTagList>
        </Cover>
        <PageSummary>
          <PageSummaryHeading>{article.summary}</PageSummaryHeading>
          <PageSummaryMemberList>
            {article.authors.map((author) => (
              <li key={author.id}>
                <MemberSummary name={author.name} icon={author.icon} role={author.role} />
              </li>
            ))}
          </PageSummaryMemberList>
        </PageSummary>
        <section className="flex max-w-[700px] flex-col items-start justify-start p-6 font-main">
          <pre className="w-full whitespace-pre-wrap break-all bg-keyplate-3 p-6 font-mono text-sm text-keyplate-11">
            <code>{JSON.stringify(article, null, 2)}</code>
          </pre>
        </section>
        <section className="flex flex-col items-stretch justify-start gap-4 p-6">
          <h2 className="text-heading2 font-bold">著者プロフィール</h2>
          <ol className="flex flex-col items-center justify-center gap-6">
            {article.authors.map((author) => (
              <li key={author.id} className="flex w-full max-w-sm shrink">
                <MemberCard {...author} className="w-full" />
              </li>
            ))}
          </ol>
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
    title: article.title,
    description: article.summary,
    openGraph: {
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
