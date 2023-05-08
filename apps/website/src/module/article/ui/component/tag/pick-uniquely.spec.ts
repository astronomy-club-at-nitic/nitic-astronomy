import { pickUniquely } from './pick-uniquely';

describe('pickUniquely', () => {
  it('should return undefined if there are no candidates', () => {
    const result = pickUniquely('seed', []);
    expect(result).toBeUndefined();
  });

  it('should return a candidate', () => {
    const result = pickUniquely('seed', ['candidate']);
    expect(result).toBe('candidate');
  });

  it('should return a candidate matching the snapshot', () => {
    const result = pickUniquely('seed', ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']);
    expect(result).not.toBeUndefined();
    expect(result).toMatchSnapshot();
  });
});
