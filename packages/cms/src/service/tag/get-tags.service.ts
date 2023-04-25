import type { Tag } from '@nitic-astronomy/model';
import { convertTag } from '#cms/converter/tag.converter';
import { client } from '#cms/infra/client.factory';
import type { MicroCmsTag } from '#cms/infra/microcms.type';
import { MicroCmsApiEndpoint } from '#cms/infra/microcms.type';

export type GetTagsQuery = {
  limit?: number;
  offset?: number;
};

export type GetTagsResponse = {
  tags: Tag[];
  totalCount: number;
  limit: number;
  offset: number;
};

export type GetTags = (query?: GetTagsQuery) => Promise<GetTagsResponse>;

export const getTags: GetTags = async (query) => {
  const microCmsResponse = await client.getList<MicroCmsTag>({
    endpoint: MicroCmsApiEndpoint.TAG,
    queries: {
      ...query,
      fields: ['id', 'name', 'description', 'createdAt', 'publishedAt', 'revisedAt', 'updatedAt'] satisfies Array<keyof MicroCmsTag>,
      orders: '-publishedAt',
    },
  });

  const tags = microCmsResponse.contents.map(convertTag);

  return {
    tags,
    totalCount: microCmsResponse.totalCount,
    limit: microCmsResponse.limit,
    offset: microCmsResponse.offset,
  };
};
