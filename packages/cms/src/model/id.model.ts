import { z } from 'zod';

// Accepts capital and small letters, numbers and hyphens, and underscores.
export const IdSchema = z
  .string()
  .min(1)
  .regex(/^[a-zA-Z0-9-_]+$/);

export type Id = z.infer<typeof IdSchema>;
