import { getArticleDetail } from './get-article-detail.service';
import { ArticleDetailSchema } from '@/model/article.model';

describe('getArticleDetail', () => {
  test('should return an article with content body in expected schema', async () => {
    // Arrange
    const articleId = 'example';

    // Act
    const result = await getArticleDetail({
      id: articleId,
    });

    // Assert
    expect(() => {
      ArticleDetailSchema.parse(result);
    }).not.toThrow();
  });
});
