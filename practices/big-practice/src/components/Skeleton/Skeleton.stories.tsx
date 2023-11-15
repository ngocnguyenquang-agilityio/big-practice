// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Skeleton from './Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numOfItems: 1,
  },
};
