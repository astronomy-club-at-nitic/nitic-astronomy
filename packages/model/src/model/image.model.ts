import { z } from 'zod';

export const ImageSchema = z.object({
  url: z.string().url(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});

export type Image = z.infer<typeof ImageSchema>;
