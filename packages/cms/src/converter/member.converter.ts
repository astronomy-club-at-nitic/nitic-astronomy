import type { MicroCmsMember } from '@/infra/microcms.type';
import type { Member } from '@/model/member.model';

export const convertMember = (member: MicroCmsMember): Member => ({
  id: member.id,
  name: member.name,
  role: member.role,
  description: member.description,
  icon: member.icon,
  externalLinks: member.externalLinks?.map((link) => link.href) ?? [],
  isObOg: member.obog,
});
