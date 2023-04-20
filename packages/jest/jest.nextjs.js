const createConfig = require('next/jest')({
  dir: './',
});

/** @type {import('jest').Config} */
const defaultConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    // Make sure this is as same as specified in tsconfig.json
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~model/(.*)$': '<rootDir>/../model/src/$1',
    '^~cms/(.*)$': '<rootDir>/../cms/src/$1',
  },
};

module.exports = (/** @type {import('jest').Config} */ config) =>
  createConfig({
    ...defaultConfig,
    ...config,
  });
