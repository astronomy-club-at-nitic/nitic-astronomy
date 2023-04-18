import dotenv from 'dotenv';
import { createClient } from 'microcms-js-sdk';
import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from '../env';

dotenv.config();

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});
