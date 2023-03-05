import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
// import { fontFamily } from './font/family.font';
import '../src/style/global.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

// TODO: The next update to the storybook will address this.
//       https://github.com/storybookjs/storybook/issues/19711
// addDecorator((Story) => (
//   <div className={fontFamily}>
//     <Story />
//   </div>
// ));

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
