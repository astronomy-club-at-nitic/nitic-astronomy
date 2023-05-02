import type { Meta, StoryObj } from '@storybook/react';
import { Root } from './root.page';

type Story = StoryObj<typeof Root>;

const meta = {
  component: Root,
  argTypes: {},
} satisfies Meta<typeof Root>;

export default meta;

export const Default: Story = {};
