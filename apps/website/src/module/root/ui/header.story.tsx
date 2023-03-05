import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Header } from './header.layout';

type Story = ComponentStoryObj<typeof Header>;

const meta: ComponentMeta<typeof Header> = {
  component: Header,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
