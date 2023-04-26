import { TagSchema } from '@nitic-astronomy/model';
import { z } from 'zod';
import { getTags } from './get-tags.service';

describe('getTags', () => {
  test('should return tags in expected schema', async () => {
    // Arrange

    // Act
    const result = await getTags();

    // Assert
    expect(() => {
      z.array(TagSchema).parse(result.tags);
    }).not.toThrow();
  });
});
