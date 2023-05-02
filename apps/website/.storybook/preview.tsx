import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Preview } from '@storybook/react';
import React from 'react';
import { fontFamily } from '../src/core/font/family.font';
import { ThemeProvider } from '../src/core/provider/theme.provider';
import '../src/style/global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute="data-theme">
        <div className={fontFamily}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
