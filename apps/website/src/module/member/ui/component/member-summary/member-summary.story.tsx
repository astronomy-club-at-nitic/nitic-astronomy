import type { Meta, StoryObj } from '@storybook/react';
import { MemberSummary } from './member-summary.presenter';

type Story = StoryObj<typeof MemberSummary>;

const meta: Meta<typeof MemberSummary> = {
  component: MemberSummary,
  args: {
    name: '鈴木 結衣',
    role: '会計・5年情報系',
  },
  argTypes: {
    name: {
      description: 'A name of the member.',
      control: {
        type: 'text',
      },
    },
    role: {
      description: 'A displayed role of the member.',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Default: Story = {};

export const WithExternalIcon: Story = {
  args: {
    icon: {
      url: 'https://avatars.githubusercontent.com/u/16751535?v=4',
    },
    name: '白田 連大',
    role: '会計・4年情報系',
  },
};

export const WithCount: Story = {
  args: {
    count: 3,
  },
};
