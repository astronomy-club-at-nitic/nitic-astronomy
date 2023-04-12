import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header.layout';

type Story = StoryObj<typeof Header>;

const meta = {
  component: Header,
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

export const Default: Story = {};
