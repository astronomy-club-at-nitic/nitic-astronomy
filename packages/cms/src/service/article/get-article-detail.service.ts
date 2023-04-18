import { convertArticleDetail } from '@/converter/article.converter';
import { client } from '@/infra/client.factory';
import type { MicroCmsArticle } from '@/infra/microcms.type';
import { MicroCmsApiEndpoint } from '@/infra/microcms.type';
import type { ArticleDetail } from '@/model/article.model';

export type GetArticleDetailQuery = {
  id: ArticleDetail['id'];
  draftKey?: string;
};

export type GetArticleDetailResponse = ArticleDetail;

export type GetArticleDetail = (query: GetArticleDetailQuery) => Promise<GetArticleDetailResponse>;

/**
 * Get an article from MicroCMS.
 * The result includes the body of the article.
 * @param query Query parameters for the API.
 * @returns Article list.
 */
export const getArticleDetail: GetArticleDetail = async (query) => {
  const microCmsResponse = await client.getListDetail<MicroCmsArticle>({
    endpoint: MicroCmsApiEndpoint.ARTICLE,
    contentId: query.id,
    queries: {
      fields: ['authors', 'cover', 'content', 'createdAt', 'id', 'publishedAt', 'revisedAt', 'summary', 'tags', 'title', 'updatedAt'] satisfies Array<
        keyof MicroCmsArticle
      >,
      draftKey: query.draftKey,
    },
  });

  const articleDetail = convertArticleDetail(microCmsResponse);

  return articleDetail;
};
