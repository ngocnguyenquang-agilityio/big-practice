import { render } from '@testing-library/react';

// Components
import ProductCartItem from '.';

// Types
import { IProductCartItem } from '@interfaces';

// Mocks
import { mockProduct } from '@mocks';

const props: IProductCartItem = {
  id: 'id',
  product: mockProduct,
  quantity: 1,
};

describe('ProductCard Component', () => {
  test('Should render successfully', () => {
    const comp = render(<ProductCartItem {...props} />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<ProductCartItem {...props} />);
    expect(comp).toMatchSnapshot();
  });

  // TODO: Update more test cases when implement functions
});
