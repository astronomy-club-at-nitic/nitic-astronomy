import type { Member } from '@nitic-astronomy/model';
import { convertMember } from '~cms/converter/member.converter';
import { client } from '~cms/infra/client.factory';
import type { MicroCmsMember } from '~cms/infra/microcms.type';
import { MicroCmsApiEndpoint } from '~cms/infra/microcms.type';

export type GetMembersQuery = {
  limit?: number;
  offset?: number;
};

export type GetMembersResponse = {
  members: Member[];
  totalCount: number;
  limit: number;
  offset: number;
};

export type GetMembers = (query?: GetMembersQuery) => Promise<GetMembersResponse>;

export const getMembers: GetMembers = async (query) => {
  const microCmsResponse = await client.getList<MicroCmsMember>({
    endpoint: MicroCmsApiEndpoint.MEMBER,
    queries: {
      ...query,
      fields: [
        'name',
        'class',
        'role',
        'description',
        'obog',
        'icon',
        'externalLinks',
        'createdAt',
        'id',
        'publishedAt',
        'revisedAt',
        'updatedAt',
      ] satisfies Array<keyof MicroCmsMember>,
    },
  });

  const members = microCmsResponse.contents.map(convertMember);

  return {
    members,
    totalCount: microCmsResponse.totalCount,
    limit: microCmsResponse.limit,
    offset: microCmsResponse.offset,
  };
};
