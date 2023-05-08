import type { Meta, StoryObj } from '@storybook/react';
import { Cover, CoverHeadingGroup, CoverHeading, CoverDescription, CoverTagList } from './cover.presenter';
import { Link } from '@/core/component/link';
import { Tag } from '@/module/article/ui/component/tag';

type Story = StoryObj<typeof Cover>;

const meta = {
  component: Cover,
  args: {
    children: (
      <CoverHeadingGroup>
        <CoverHeading>定例観測会の実施のお知らせ</CoverHeading>
        <CoverDescription>2023年3月1日(水) 掲載 ・ 2023年4月30日(日) 更新</CoverDescription>
      </CoverHeadingGroup>
    ),
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
      description: 'A source URL of the image. If not specified, a default image will be used. Inherited from `next/image`',
    },
    placeholder: {
      description: 'A placeholder type of the image. Inherited from `next/image`',
    },
    blurDataURL: {
      description: 'A base64-encoded string of a blurred image placeholder. Inherited from `next/image`',
    },
  },
} satisfies Meta<typeof Cover>;

export default meta;

export const Default: Story = {};

export const Small: Story = {
  args: {
    className: 'h-[390px]',
  },
};

export const WithExternalImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80',
  },
};

export const WithTagList: Story = {
  args: {
    children: (
      <>
        <CoverHeadingGroup>
          <CoverHeading>定例観測会の実施のお知らせ</CoverHeading>
          <CoverDescription>2023年3月1日(水) 掲載 ・ 2023年4月30日(日) 更新</CoverDescription>
        </CoverHeadingGroup>
        <CoverTagList>
          <li>
            <Link href="/">
              <Tag color="plum" forceDark>
                #イベント
              </Tag>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Tag color="sky" forceDark>
                #定例観測会
              </Tag>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Tag color="amber" forceDark>
                #オフライン
              </Tag>
            </Link>
          </li>
        </CoverTagList>
      </>
    ),
  },
};
