import type { Image } from '@nitic-astronomy/model';
import type { MicroCMSImage } from 'microcms-js-sdk';

export const convertImage = (image: MicroCMSImage): Image => ({
  url: image.url,
  width: image.width,
  height: image.height,
});
