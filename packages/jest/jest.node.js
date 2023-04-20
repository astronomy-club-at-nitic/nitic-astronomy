/** @type {import("jest").Config} */
module.exports = {
  collectCoverageFrom: ['./src/**/*.ts'],
  coverageDirectory: './coverage',
  moduleFileExtensions: ['json', 'js', 'ts'],
  moduleNameMapper: {
    // Make sure this is as same as specified in tsconfig.json
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~model/(.*)$': '<rootDir>/../model/src/$1',
    '^~cms/(.*)$': '<rootDir>/../cms/src/$1',
  },
  rootDir: '.',
  setupFiles: ['dotenv/config'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
};
