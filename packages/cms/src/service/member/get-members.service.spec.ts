import { z } from 'zod';
import { getMembers } from './get-members.service';
import { MemberSchema } from '@/model/member.model';

describe('getMembers', () => {
  test('should return members in expected schema', async () => {
    // Arrange

    // Act
    const result = await getMembers();

    // Assert
    expect(() => {
      z.array(MemberSchema).parse(result.members);
    }).not.toThrow();
  });
});
