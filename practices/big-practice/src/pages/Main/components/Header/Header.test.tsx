// Libs
import { RenderResult, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import { Header } from './HeaderContainer';

// Mocks
import { mockCartItems } from '@mocks';

// Constants
import { headerItems } from '@constants';

const props = {
  cartItems: mockCartItems,
  defaultValueSearch: '',
  numberOfItemsInCart: 2,
  handleSearch: jest.fn(),
  onToggleCart: jest.fn(),
};

describe('Header component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <BrowserRouter>
        <Header {...props} />
      </BrowserRouter>,
    );
  });

  test('Should render successfully', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render number of items correctly', async () => {
    const items = await screen.getByTestId('header-items');
    expect(items.children).toHaveLength(headerItems.length);
  });

  test('Should call toggleCart', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(props.onToggleCart).toBeCalledTimes(1);
  });

  test('Should render correct number of items in cart', () => {
    const item = screen.getByTestId('number-of-items');
    expect(item.textContent).toBe(props.numberOfItemsInCart.toString());
  });
});
