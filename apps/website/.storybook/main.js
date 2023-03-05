const path = require('path');

module.exports = {
  stories: ['../src/**/*.story.tsx'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-addon-next-router',
  ],
  webpackFinal: async (/** @type {import("@types/webpack").Configuration} */ config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
        'style-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
