import type { Meta, StoryObj } from '@storybook/react';
import { MemberCard } from './member-card.presenter';

type Story = StoryObj<typeof MemberCard>;

const meta: Meta<typeof MemberCard> = {
  component: MemberCard,
  args: {
    name: '鈴木 結衣',
    role: '会計・5年情報系',
    description: 'ここに自己紹介文を挿入＊e.g. 菅原圭っていうアーティストが好きです🥤',
  },
  decorators: [(Story) => <ul className="max-w-sm">{Story()}</ul>],
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
    description: {
      description: 'A description of the member.',
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
