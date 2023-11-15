// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Cart from './Cart';

const meta = {
  title: 'Components/Cart',
  component: Cart,
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cart: [
      {
        id: 1,
        title: 'Product Detail',
        price: 10,
        thumbnail:
          'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
        category: 'Product',
        quantity: 1,
      },
      {
        id: 2,
        title: 'Product Detail 2',
        price: 20,
        thumbnail:
          'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
        category: 'Product',
        quantity: 3,
      },
    ],
    handleToggleCart: () => {},
  },
};
