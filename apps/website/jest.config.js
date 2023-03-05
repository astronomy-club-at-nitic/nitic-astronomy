/** @type {import('jest').Config} */
module.exports = require('@nitic-astronomy/jest/jest.nextjs')({
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
});
