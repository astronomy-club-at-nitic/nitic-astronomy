import { getTagDetail } from './get-tag-detail.service';
import { TagSchema } from '@/model/tag.model';

describe('getTagDetail', () => {
  test('should return a tag in expected schema', async () => {
    // Arrange
    const tagId = 'example';

    // Act
    const result = await getTagDetail({
      id: tagId,
    });

    // Assert
    expect(() => {
      TagSchema.parse(result);
    }).not.toThrow();
  });
});
