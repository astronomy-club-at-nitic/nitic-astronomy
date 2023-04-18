import { convertTag } from '@/converter/tag.converter';
import { client } from '@/infra/client.factory';
import type { MicroCmsTag } from '@/infra/microcms.type';
import { MicroCmsApiEndpoint } from '@/infra/microcms.type';
import type { Tag } from '@/model/tag.model';

export type GetTagDetailQuery = {
  id: Tag['id'];
  draftKey?: string;
};

export type GetTagDetailResponse = Tag;

export type GetTagDetail = (query: GetTagDetailQuery) => Promise<GetTagDetailResponse>;

/**
 * Get an tag from MicroCMS.
 * The result includes the body of the tag.
 * @param query Query parameters for the API.
 * @returns Tag list.
 */
export const getTagDetail: GetTagDetail = async (query) => {
  const microCmsResponse = await client.getListDetail<MicroCmsTag>({
    endpoint: MicroCmsApiEndpoint.TAG,
    contentId: query.id,
    queries: {
      fields: ['createdAt', 'id', 'name', 'description', 'publishedAt', 'revisedAt', 'updatedAt'] satisfies Array<keyof MicroCmsTag>,
      draftKey: query.draftKey,
    },
  });

  const tagDetail = convertTag(microCmsResponse);

  return tagDetail;
};
