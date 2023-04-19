import type { Article } from '@nitic-astronomy/model';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { client } from '@/infra/client.factory';
import type { MicroCmsArticle } from '@/infra/microcms.type';
import { MicroCmsApiEndpoint } from '@/infra/microcms.type';

export type GetArticleIdsResponse = {
  articleIds: Array<Article['id']>;
  totalCount: number;
};

export type GetArticleIds = () => Promise<GetArticleIdsResponse>;

/**
 * Get all of article ids from MicroCMS.
 */
export const getArticleIds: GetArticleIds = async () => {
  const getPage = async (articleIds: Array<Article['id']>, offset: MicroCMSQueries['offset']): Promise<GetArticleIdsResponse> => {
    const microCmsResponse = await client.getList<Pick<MicroCmsArticle, 'id'>>({
      endpoint: MicroCmsApiEndpoint.ARTICLE,
      queries: {
        fields: ['id'] satisfies Array<keyof MicroCmsArticle>,
        limit: 100,
        offset,
      },
    });

    // Add the article IDs to the array.
    articleIds.push(...microCmsResponse.contents.map((article) => article.id));

    // If the total number of articles is greater than the number of ones already fetched,
    // get the next page.
    if (microCmsResponse.totalCount > microCmsResponse.offset + microCmsResponse.limit) {
      return getPage(articleIds, microCmsResponse.offset + microCmsResponse.limit);
    }
    return {
      articleIds,
      totalCount: microCmsResponse.totalCount,
    };
  };

  return getPage([], 0);
};
