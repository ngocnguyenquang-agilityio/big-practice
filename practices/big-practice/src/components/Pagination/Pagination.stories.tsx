// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Pagination from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPages: 4,
    standingPage: '1',
    handleChangePagination: () => {},
  },
};
