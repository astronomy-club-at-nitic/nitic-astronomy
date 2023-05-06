export const pickUniquely = <TCandidate>(seed: string, candidates: Array<TCandidate>) => {
  // If there are no candidates, return undefined
  if (candidates.length === 0) {
    return undefined;
  }
  // Calculate the sum of the Unicode code points of the seed string
  const seedSum = seed.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);

  // Pick a candidate based on the seed sum
  // The index must be zero or a positive integer
  const index = Math.abs(Math.round(seedSum)) % candidates.length;

  return candidates[index];
};
