import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link.presenter';

type Story = StoryObj<typeof Link>;

const meta: Meta<typeof Link> = {
  component: Link,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  render: () => <Link href="/">Link</Link>,
};
