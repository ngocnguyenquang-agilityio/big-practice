import { withRouter } from 'storybook-addon-react-router-v6';
// Types
import type { Meta, StoryObj } from '@storybook/react';

// Components
import ProductList from './ProductList';

// Mocks
import { mockProducts } from '../../mocks';

const meta = {
  title: 'Components/ProductList',
  component: ProductList,
  decorators: [withRouter],
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: mockProducts,
    sortBy: 'low-to-high',
  },
};
