import type { Meta, StoryObj } from '@storybook/react';
import { PageSummary, PageSummaryHeading } from './page-summary.presenter';

type Story = StoryObj<typeof PageSummary>;

const meta = {
  component: PageSummary,
  args: {
    children: (
      <>
        <PageSummaryHeading>4月30日(日)の19時から茨城高専1号館屋上にて開催予定です！</PageSummaryHeading>
      </>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof PageSummary>;

export default meta;

export const Default: Story = {};
