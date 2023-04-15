import { z } from 'zod';
import { getArticles } from './get-articles.service';
import { ArticleSchema } from '@/model/article.model';

describe('getArticles', () => {
  test('should return articles in expected schema', async () => {
    // Arrange

    // Act
    const result = await getArticles();

    // Assert
    expect(() => {
      z.array(ArticleSchema).parse(result.articles);
    }).not.toThrow();
  });
});
