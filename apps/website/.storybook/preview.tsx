import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Preview } from '@storybook/react';
import React from 'react';
import { fontFamily } from '../src/core/font/family.font';
import '../src/style/global.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={fontFamily}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
