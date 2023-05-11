import type { Meta, StoryObj } from '@storybook/react';
import { PageSummary, PageSummaryHeading, PageSummaryMemberList } from './page-summary.presenter';
import { MemberSummary } from '@/module/member/ui/component/member-summary';

type Story = StoryObj<typeof PageSummary>;

const meta = {
  component: PageSummary,
  args: {
    children: <PageSummaryHeading>4月30日(日)の19時から茨城高専1号館屋上にて開催予定です！</PageSummaryHeading>,
  },
  argTypes: {},
} satisfies Meta<typeof PageSummary>;

export default meta;

export const Default: Story = {};

export const WithMemberList: Story = {
  args: {
    children: (
      <>
        <PageSummaryHeading>4月30日(日)の19時から茨城高専1号館屋上にて開催予定です！</PageSummaryHeading>
        <PageSummaryMemberList>
          <li>
            <MemberSummary
              {...{
                icon: {
                  url: 'https://avatars.githubusercontent.com/u/16751535?v=4',
                },
                name: '白田 連大',
                role: '会計・4年情報系',
              }}
            />
          </li>
          <li>
            <MemberSummary
              {...{
                name: '鈴木 結衣',
                role: '会計・5年情報系',
              }}
            />
          </li>
        </PageSummaryMemberList>
      </>
    ),
  },
};
