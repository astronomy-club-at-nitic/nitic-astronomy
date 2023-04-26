import type { Member } from '@nitic-astronomy/model';
import type { MicroCmsMember } from '#cms/infra/microcms.type';

export const convertMember = (member: MicroCmsMember): Member => ({
  id: member.id,
  name: member.name,
  role: member.role,
  description: member.description,
  icon: member.icon,
  externalLinks: member.externalLinks?.map((link) => link.href) ?? [],
  isObOg: member.obog,
});
