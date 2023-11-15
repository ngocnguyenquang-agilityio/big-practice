// Libs
import { useParams } from 'react-router-dom';

// Components
import ProductDetail from '@components/ProductDetail/ProductDetail';
import ProductDetailLayout from '@layouts/ProductDetailLayout/ProductDetailLayout';
import Skeleton from '@components/Skeleton/Skeleton';

// Helpers
import { useProducts } from '@hooks/useProducts';

const ProductDetailsPage = () => {
  const { productId } = useParams();

  const { data, isLoading } = useProducts({ productId }, { keepPreviousData: true });

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <ProductDetailLayout productDetail={!isLoading && <ProductDetail product={data} />} />
      )}
    </>
  );
};

export default ProductDetailsPage;
