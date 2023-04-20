import type { Tag } from '@nitic-astronomy/model';
import type { MicroCmsTag } from '~cms/infra/microcms.type';

export const convertTag = (tag: MicroCmsTag): Tag => ({
  id: tag.id,
  name: tag.name,
  description: tag.description,
});
