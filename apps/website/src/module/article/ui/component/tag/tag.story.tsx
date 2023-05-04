import type { Meta, StoryObj } from '@storybook/react';
import { Tag, tagColors } from './tag.presenter';

type Story = StoryObj<typeof Tag>;

const meta = {
  component: Tag,
  args: {
    children: '#機材紹介',
  },
  argTypes: {
    seed: {
      control: {
        type: 'text',
      },
      description: 'A seed that determines color of tag.',
    },
    color: {
      control: {
        type: 'radio',
      },
      options: tagColors,
      description: 'Specifies the color of the tag.',
    },
    forceDark: {
      control: {
        type: 'boolean',
      },
      description: 'Forces dark colors.',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

export const Default: Story = {};

export const WithSeed: Story = {
  args: {
    seed: '#イベント紹介',
    children: '#イベント紹介',
  },
};

export const ForceDark: Story = {
  args: {
    color: 'mint',
    forceDark: true,
  },
};

export const InsideHeading: Story = {
  decorators: [(Story) => <h1 className="text-3xl font-bold">{Story()}</h1>],
};
