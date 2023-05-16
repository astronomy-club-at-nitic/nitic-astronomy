import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './banner.presenter';

type Story = StoryObj<typeof Banner>;

const meta = {
  component: Banner,
  args: {
    variant: 'info',
    children: 'K-Labo で君の知りたいを追求してみない？',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'warning'],
      },
      description: 'The variant of the banner.',
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;

export const Default: Story = {};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'プレビューモードで閲覧中です',
  },
};
