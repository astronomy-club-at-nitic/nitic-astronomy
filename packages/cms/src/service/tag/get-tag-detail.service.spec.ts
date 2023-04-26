import { TagSchema } from '@nitic-astronomy/model';
import { getTagDetail } from './get-tag-detail.service';

describe('getTagDetail', () => {
  test.skip('should return a tag in expected schema', async () => {
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
