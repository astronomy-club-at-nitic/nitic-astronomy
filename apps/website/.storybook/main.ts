import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  stories: ['../src/**/*.story.tsx'],
  webpackFinal: (config) => {
    const finalConfig: Configuration = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': path.resolve(__dirname, '../src'),
        },
      },
    };

    return finalConfig;
  },
};

export default config;
