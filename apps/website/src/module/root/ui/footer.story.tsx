import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Footer } from './footer.layout';

type Story = ComponentStoryObj<typeof Footer>;

const meta: ComponentMeta<typeof Footer> = {
  component: Footer,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
