// Types
import { IProduct } from '@interfaces';

// Components
import ProductCard from '@components/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '../../constants/routes';

const ProductList = ({ products = [], sortBy }: { products: IProduct[]; sortBy?: string }) => {
  return (
    <ul
      data-testid='product-list'
      className='grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    >
      {products
        .sort((a: IProduct, b: IProduct) => {
          if (sortBy === 'low-to-high') {
            return a.price > b.price ? 1 : -1;
          }
          if (sortBy === 'high-to-low') {
            return a.price < b.price ? 1 : -1;
          }

          return 0;
        })
        .map((product) => (
          <li
            className='aspect-square transition-opacity animate-fadeIn'
            key={product.id}
          >
            <Link to={`${APP_ROUTERS.DETAILS_PAGE}/${product.id}`}>
              <ProductCard
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
