// Libs
import { RenderResult, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import CartBody from './CartBody';
import { useCartStore } from '@stores/cartStore';

jest.mock('@stores/cartStore');
const useMockCartStore = jest.mocked(useCartStore);

describe('CartBody Component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    useMockCartStore.mockReturnValue({
      cartItems: [
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
    });
    comp = render(
      <MemoryRouter>
        <CartBody />
      </MemoryRouter>,
    );
  });
  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render with no cartItems', () => {
    useMockCartStore.mockReturnValue({
      cartItems: [],
    });
    comp = render(<CartBody />);
    expect(screen.getByText('Your cart is empty.')).toBeTruthy();
  });
});
