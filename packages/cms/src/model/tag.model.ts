import { z } from 'zod';
import { IdSchema } from './id.model';

export const TagSchema = z.object({
  id: IdSchema,
  name: z.string().min(1),
  description: z.string().optional(),
});

export type Tag = z.infer<typeof TagSchema>;
