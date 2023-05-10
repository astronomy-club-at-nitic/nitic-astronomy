import type { Meta, StoryObj } from '@storybook/react';
import { MemberExternalLink } from './member-external-link.presenter';

type Story = StoryObj<typeof MemberExternalLink>;

const meta = {
  component: MemberExternalLink,
  args: {
    href: 'https://example.com/hithere/welcome',
  },
  argTypes: {
    href: {
      control: {
        type: 'text',
      },
      description: 'A link to the external page. Inherited from `next/link` or `<a>`.',
    },
  },
} satisfies Meta<typeof MemberExternalLink>;

export default meta;

export const Default: Story = {};

export const Twitter: Story = {
  args: {
    href: 'https://twitter.com/vercel',
  },
};

export const GitHub: Story = {
  args: {
    href: 'https://github.com/ReoHakase',
  },
};

export const Instagram: Story = {
  args: {
    href: 'https://www.instagram.com/reohakuta',
  },
};
