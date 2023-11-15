import { RenderResult, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

// Component
import ProductList from './ProductList';

// Mocks
import { mockProducts } from '@mocks';

describe('ProductList Component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ProductList
          products={mockProducts}
          sortBy='low-to-high'
        />
      </MemoryRouter>,
    );
  });

  test('Should render successfully', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render correct number of items in list', async () => {
    const items = await screen.getByTestId('product-list');
    expect(items.children).toHaveLength(mockProducts.length);
  });
});
