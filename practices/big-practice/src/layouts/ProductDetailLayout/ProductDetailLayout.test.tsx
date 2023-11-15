import { RenderResult, render } from '@testing-library/react';

// Components
import ProductDetailLayout from './ProductDetailLayout';

const ProductDetail = () => <div>Product Detail</div>;
const RelatedProduct = () => <div>Related Product</div>;

const props = {
  productDetail: <ProductDetail />,
  relatedProduct: <RelatedProduct />,
};

describe('HomeLayout', () => {
  let comp: RenderResult;

  beforeEach(() => {
    comp = render(<ProductDetailLayout {...props} />);
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should render correctly', () => {
    expect(comp).toMatchSnapshot();
  });
});
