import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './image.presenter';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {
    sizes: {
      description: 'Property that specifies width and height at once.',
      control: { type: 'number' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    src: '/image/logo/transparent.svg',
    width: 120,
    height: 95.3,
    alt: 'logo transparent',
  },
};

export const WithSize: Story = {
  args: {
    src: '/image/logo/light.svg',
    sizes: 120,
    alt: 'logo light',
  },
};
