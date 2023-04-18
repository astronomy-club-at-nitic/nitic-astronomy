import { z } from 'zod';
import { IdSchema } from './id.model';
import { ImageSchema } from './image.model';

export const MemberSchema = z.object({
  id: IdSchema,
  name: z.string().min(1),
  role: z.string().optional(),
  description: z.string().optional(),
  icon: ImageSchema.optional(),
  externalLinks: z.array(z.string().url()),
  isObOg: z.boolean(),
});

export type Member = z.infer<typeof MemberSchema>;
