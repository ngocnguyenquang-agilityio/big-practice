import React from 'react';

// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Loading from './Loading';

const meta = {
  title: 'Components/Loading',
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Loading />,
};
