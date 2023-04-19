import { z } from 'zod';
import { IdSchema } from './id.model';
import { ImageSchema } from './image.model';
import { MemberSchema } from './member.model';
import { TagSchema } from './tag.model';

export const ArticleSchema = z.object({
  id: IdSchema,
  title: z.string().min(1),
  summary: z.string().min(1),
  cover: ImageSchema.optional(),
  authors: z.array(MemberSchema),
  tags: z.array(TagSchema),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime(),
  createdAt: z.string().datetime(),
  revisedAt: z.string().datetime().optional(),
});

export type Article = z.infer<typeof ArticleSchema>;

export const ArticleDetailSchema = ArticleSchema.extend({
  body: z.string().min(1),
});

export type ArticleDetail = z.infer<typeof ArticleDetailSchema>;
