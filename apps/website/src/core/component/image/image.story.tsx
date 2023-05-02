import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './image.presenter';

type Story = StoryObj<typeof Image>;

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {
    src: {
      description: 'An url of the image.',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'A text description of the image.',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    src: '/image/logo/mono.png',
    width: 150,
    height: 120,
    alt: 'Transparent logo of Astronomy Club at NITIC',
  },
};
