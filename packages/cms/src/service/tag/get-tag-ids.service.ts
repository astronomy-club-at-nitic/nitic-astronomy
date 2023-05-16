import type { Tag } from '@nitic-astronomy/model';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { client } from '#cms/infra/client.factory';
import type { MicroCmsTag } from '#cms/infra/microcms.type';
import { MicroCmsApiEndpoint } from '#cms/infra/microcms.type';

// export type GetTagIdsQuery = never;

export type GetTagIdsResponse = {
  tagIds: Array<Tag['id']>;
  totalCount: number;
};

export type GetTagIds = () => Promise<GetTagIdsResponse>;

/**
 * Get all of article ids from MicroCMS.
 */
export const getTagIds: GetTagIds = async () => {
  const getPage = async (tagIds: Array<Tag['id']>, offset: MicroCMSQueries['offset']): Promise<GetTagIdsResponse> => {
    const microCmsResponse = await client.getList<Pick<MicroCmsTag, 'id'>>({
      endpoint: MicroCmsApiEndpoint.TAG,
      queries: {
        fields: ['id'] satisfies Array<keyof MicroCmsTag>,
        limit: 100,
        offset,
      },
    });

    // Add the tag IDs to the array.
    tagIds.push(...microCmsResponse.contents.map((article) => article.id));

    // If the total number of tags is greater than the number of ones already fetched,
    // get the next page.
    if (microCmsResponse.totalCount > microCmsResponse.offset + microCmsResponse.limit) {
      return getPage(tagIds, microCmsResponse.offset + microCmsResponse.limit);
    }
    return {
      tagIds,
      totalCount: microCmsResponse.totalCount,
    };
  };

  return getPage([], 0);
};
