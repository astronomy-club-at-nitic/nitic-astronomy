import type { MicroCmsTag } from '@/infra/microcms.type';
import type { Tag } from '@/model/tag.model';

export const convertTag = (tag: MicroCmsTag): Tag => ({
  id: tag.id,
  name: tag.name,
  description: tag.description,
});
