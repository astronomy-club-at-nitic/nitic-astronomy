import { IdSchema } from '@nitic-astronomy/model';
import { z } from 'zod';
import { getArticleIds } from './get-article-ids.service';

describe('getArticleIds', () => {
  test('should return articles in expected schema', async () => {
    // Arrange

    // Act
    const result = await getArticleIds();

    // Assert
    expect(() => {
      z.array(IdSchema).parse(result.articleIds);
    }).not.toThrow();
  });
});
