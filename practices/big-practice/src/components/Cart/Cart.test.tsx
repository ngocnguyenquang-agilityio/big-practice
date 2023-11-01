import { render, screen, fireEvent } from '@testing-library/react';

// Components
import Cart, { ICart } from '.';

// Mocks
import { mockCart } from '@mocks';

const props: ICart = {
  handleToggleCart: jest.fn(),
  cart: mockCart,
};

describe('Cart Component', () => {
  test('Should render successfully', () => {
    const comp = render(<Cart {...props} />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Cart {...props} />);
    expect(comp).toMatchSnapshot();
  });

  test('Should render empty cart if no data', () => {
    const mockFunc = jest.fn();
    render(
      <Cart
        cart={[]}
        handleToggleCart={mockFunc}
      />,
    );
    const emptyCart = screen.queryByText('Your cart is empty.');
    expect(emptyCart).toBeTruthy();
  });

  test('Should call handleToggleCart', () => {
    render(<Cart {...props} />);
    const button = screen.getByTestId('close-cart-btn');
    fireEvent.click(button);
    expect(props.handleToggleCart).toBeCalledTimes(1);
  });
});
