import { convertMember } from '@/converter/member.converter';
import { client } from '@/infra/client.factory';
import type { MicroCmsMember } from '@/infra/microcms.type';
import { MicroCmsApiEndpoint } from '@/infra/microcms.type';
import type { Member } from '@/model/member.model';

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
