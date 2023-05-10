import type { Meta, StoryObj } from '@storybook/react';
import { MemberIcon } from './member-icon.presenter';
import SquareDarkLogoImage from '@public/image/logo/square-dark.png';
type Story = StoryObj<typeof MemberIcon>;

const meta: Meta<typeof MemberIcon> = {
  component: MemberIcon,
  args: {
    src: SquareDarkLogoImage,
    placeholder: 'blur',
    alt: 'Logo of Astronomy Club at NITIC',
  },
  argTypes: {
    src: {
      description: 'An url of the image.',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'A text description of the image.',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Default: Story = {};

export const LargerSize: Story = {
  args: {
    className: 'h-48 w-48',
  },
};
