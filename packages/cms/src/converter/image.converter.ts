import type { MicroCMSImage } from 'microcms-js-sdk';
import type { Image } from '../model/image.model';

export const convertImage = (image: MicroCMSImage): Image => ({
  url: image.url,
  width: image.width,
  height: image.height,
});
