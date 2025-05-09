import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Example/Tag',
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Nova',
  },
};
