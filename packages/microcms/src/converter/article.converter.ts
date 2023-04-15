import { convertImage } from './image.converter';
import { convertMember } from './member.converter';
import { convertTag } from './tag.converter';
import type { MicroCmsArticle } from '@/infra/microcms.type';
import type { Article, ArticleDetail } from '@/model/article.model';

export const convertArticle = (article: MicroCmsArticle): Article => ({
  id: article.id,
  title: article.title,
  summary: article.summary,
  tags: article.tags ? article.tags.map(convertTag) : [],
  authors: article.authors ? article.authors.map(convertMember) : [],
  cover: article.cover ? convertImage(article.cover) : undefined,
  publishedAt: article.publishedAt,
  updatedAt: article.updatedAt,
  createdAt: article.createdAt,
  revisedAt: article.revisedAt,
});

export const convertArticleDetail = (article: MicroCmsArticle): ArticleDetail => ({
  ...convertArticle(article),
  body: article.content,
});
