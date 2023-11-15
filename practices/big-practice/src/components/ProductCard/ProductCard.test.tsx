import { render } from '@testing-library/react';

// Components
import ProductCard from './ProductCard';

// Types
import type { ProductCard as IProductCard } from '@interfaces';

const props: IProductCard = {
  title: 'Product Detail',
  price: 20,
  thumbnail:
    'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=3840&q=75',
};

describe('ProductCard Component', () => {
  test('Should render successfully', () => {
    const comp = render(<ProductCard {...props} />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<ProductCard {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
