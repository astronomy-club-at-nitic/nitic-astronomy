import { IdSchema } from '@nitic-astronomy/model';
import { z } from 'zod';
import { getTagIds } from './get-tag-ids.service';

describe('getTagIds', () => {
  test('should return all of tag ids in expected schema', async () => {
    // Arrange

    // Act
    const result = await getTagIds();

    // Assert
    expect(() => {
      z.array(IdSchema).parse(result.tagIds);
    }).not.toThrow();
  });
});
