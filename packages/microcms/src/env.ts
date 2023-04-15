import { z } from 'zod';

// MICROCMS_SERVICE_DOMAIN=サービスドメイン名
// MICROCMS_API_KEY=APIキー

const envSchema = z.object({
  MICROCMS_SERVICE_DOMAIN: z.string().min(1),
  MICROCMS_API_KEY: z.string().min(1),
});

export type Env = z.infer<typeof envSchema>;

export const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = envSchema.parse(process.env);
