import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    MICROCMS_SERVICE_DOMAIN: z
      .string()
      .min(1)
      .regex(/^[a-z0-9-]+$/),
    MICROCMS_API_KEY: z.string().min(1),
  },
  client: {
    // example:
    // NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    // you'll have to destructure all the keys manually.
    // This is due to how Next.js bundles environment variables and
    // only explicitly accessed variables are included in the bundle.
    // Refer: https://env.t3.gg/docs/nextjs
    MICROCMS_SERVICE_DOMAIN: process.env['MICROCMS_SERVICE_DOMAIN'],
    MICROCMS_API_KEY: process.env['MICROCMS_API_KEY'],
  },
});
