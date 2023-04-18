import type { MicroCMSImage, MicroCMSDate } from 'microcms-js-sdk';

export enum MicroCmsApiEndpoint {
  MEMBER = 'member',
  TAG = 'tag',
  ARTICLE = 'article',
}

export type MicroCmsExternalLink = {
  fieldId: 'externalLink';
  href: string;
};

export type MicroCmsMember = {
  id: string;
  name: string;
  class?: string;
  role?: string;
  description?: string;
  icon?: MicroCMSImage;
  obog: boolean;
  externalLinks?: MicroCmsExternalLink[];
} & MicroCMSDate;

export type MicroCmsTag = {
  id: string;
  name: string;
  description?: string;
} & MicroCMSDate;

export type MicroCmsArticle = {
  id: string;
  title: string;
  content: string;
  summary: string;
  cover?: MicroCMSImage;
  tags?: MicroCmsTag[];
  authors?: MicroCmsMember[];
} & MicroCMSDate;
