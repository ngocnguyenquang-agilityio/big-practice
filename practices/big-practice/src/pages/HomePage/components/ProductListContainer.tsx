// Libs
import { useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

// Components
import Pagination from '@components/Pagination/Pagination';
import ProductList from '@components/ProductList/ProductList';
import Skeleton from '@components/Skeleton/Skeleton';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';
import { isEmpty } from '@helpers/utils';

// Hooks
import { useProducts } from '@hooks/useProducts';

export const ProductListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { category = '' } = useParams();

  const searchKeyword = searchParams.get('search');
  const standingPage = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || '';

  const endpoint = buildQueryProductEndpoint({ searchKeyword, standingPage, category });
  const { products, total, isLoading } = useProducts(endpoint);

  const numberOfItemsPerPage = 9;
  const totalPage = parseInt((total / numberOfItemsPerPage).toString()) + 1;

  const handleChangePagination = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      searchParams.set('page', e.currentTarget.value);

      setSearchParams(searchParams);
    },
    [searchParams],
  );

  return (
    <>
      {isLoading ? (
        <Skeleton pagination={numberOfItemsPerPage} />
      ) : (
        <>
          {!isEmpty(searchKeyword) && (
            <p className='my-3'>
              Showing <b>{total}</b> results for <b>"{searchKeyword}"</b>
            </p>
          )}
          <ProductList
            products={products || []}
            sortBy={sort}
          />
        </>
      )}

      {totalPage > 1 && (
        <Pagination
          totalPages={totalPage}
          standingPage={standingPage || '1'}
          handleChangePagination={handleChangePagination}
        />
      )}
    </>
  );
};

export default ProductListContainer;
