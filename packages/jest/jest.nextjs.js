const createConfig = require('next/jest')({
  dir: './',
});

/** @type {import('jest').Config} */
const defaultConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['dotenv/config'],
};

module.exports = (/** @type {import('jest').Config} */ config) =>
  createConfig({
    ...defaultConfig,
    ...config,
  });
