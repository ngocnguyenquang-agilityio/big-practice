import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import ProductCartItem from './ProductCartItem';

// Types
import { IProductCartItem } from '@interfaces';

// Mocks
import { mockProduct } from '@mocks';

const props: IProductCartItem = {
  ...mockProduct,
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

  test('Should render correct quantity of product', () => {
    const comp = render(<ProductCartItem {...props} />);
    const price = comp.getByTestId('item-price');
    expect(price).toBeTruthy();
    expect(price.textContent).toEqual(`$ ${mockProduct.price}USD`);
  });

  test('Should render correct title of product', () => {
    const comp = render(<ProductCartItem {...props} />);
    const title = comp.getByTestId('item-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toEqual(mockProduct.title);
  });

  test('Should render correct image of product', () => {
    const comp = render(<ProductCartItem {...props} />);
    const img = comp.getByTestId('item-thumbnail');
    expect(img).toHaveAttribute('alt', `${mockProduct.title}-thumbnail`);
  });
});
