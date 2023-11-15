import { RenderResult, render } from '@testing-library/react';

// Components
import ProductDetail from './ProductDetail';

// Mocks
import { mockProduct } from '@mocks';

describe('ProductCard Component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(<ProductDetail product={mockProduct} />);
  });

  test('Should render successfully', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });
});
