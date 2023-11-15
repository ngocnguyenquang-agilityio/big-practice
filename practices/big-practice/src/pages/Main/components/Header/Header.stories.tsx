// Libs
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Header } from './HeaderContainer';

import { mockCartItems } from '../../../../mocks';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    cartItems: mockCartItems,
    defaultValueSearch: '',
    numberOfItemsInCart: 2,
    onToggleCart: () => {},
    handleSearch: () => {},
  },
};
