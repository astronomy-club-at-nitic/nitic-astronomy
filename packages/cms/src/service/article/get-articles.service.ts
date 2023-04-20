import type { Article, Tag } from '@nitic-astronomy/model';
import { convertArticle } from '~cms/converter/article.converter';
import { client } from '~cms/infra/client.factory';
import type { MicroCmsArticle } from '~cms/infra/microcms.type';
import { MicroCmsApiEndpoint } from '~cms/infra/microcms.type';

export type GetArticlesQuery = {
  limit?: number;
  offset?: number;
  tag?: Tag['id'];
};

export type GetArticlesResponse = {
  articles: Article[];
  totalCount: number;
  limit: number;
  offset: number;
};

export type GetArticles = (query?: GetArticlesQuery) => Promise<GetArticlesResponse>;

/**
 * Get articles from MicroCMS.
 * The result does not include the body of the article.
 * @param query Query parameters for the API.
 * @returns Article list.
 */
export const getArticles: GetArticles = async (query) => {
  const microCmsResponse = await client.getList<MicroCmsArticle>({
    endpoint: MicroCmsApiEndpoint.ARTICLE,
    queries: {
      ...query,
      fields: ['authors', 'cover', 'createdAt', 'id', 'publishedAt', 'revisedAt', 'summary', 'tags', 'title', 'updatedAt'] satisfies Array<
        keyof MicroCmsArticle
      >,
      orders: '-publishedAt',
      filters: query?.tag ? `tags[contains]${query.tag}` : undefined,
    },
  });

  const articles = microCmsResponse.contents.map(convertArticle);

  return {
    articles,
    totalCount: microCmsResponse.totalCount,
    limit: microCmsResponse.limit,
    offset: microCmsResponse.offset,
  };
};
