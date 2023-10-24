// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import CartItem from '.';

const meta = {
  title: 'Components/CartItem',
  component: CartItem,
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: {
      name: 'Test Product',
      price: 20,
      image:
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=3840&q=75',
    },
    handleDecrease: () => {},
    handleIncrease: () => {},
    handleRemoveItemFromCart: () => {},
  },
};
