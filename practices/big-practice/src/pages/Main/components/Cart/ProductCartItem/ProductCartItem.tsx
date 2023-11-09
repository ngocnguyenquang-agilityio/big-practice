// Libs
import useSWR from 'swr';
import { memo } from 'react';

// Stores
import { useCartStore } from '@stores/cartStore';

// Icons
import removeIcon from '@assets/removeIcon.svg';

// Types
import { IProductCartItem } from '@interfaces';

// Components
import QuantityActionButton from '@components/QuantityActionButton';
import { Icon } from '@components/Icon/Icon';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';
import { isEmpty } from '@helpers/utils';

const ProductCartItem = memo(function ProductCartItemRenderer({
  id,
  thumbnail,
  title,
  quantity,
  price,
}: IProductCartItem) {
  const { removeFromCart, increaseQuantity, decreaseQuantity, updateProductInCart } = useCartStore();

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(id);
  };

  const endpoint = buildQueryProductEndpoint({ productId: id });

  const { data: product } = useSWR(endpoint, {
    keepPreviousData: true,
    onSuccess: (product) => {
      updateProductInCart(product);
    },
  });

  return (
    <div className='relative flex w-full flex-row justify-between px-1 py-4'>
      <div className='absolute z-40 -mt-2 ml-[55px]'>
        <button
          className='ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200'
          onClick={handleRemoveFromCart}
        >
          <Icon
            svg={removeIcon}
            name='remove-icon'
          />
        </button>
      </div>
      <a
        className='z-30 flex flex-row space-x-4'
        href=''
      >
        <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800'>
          <img
            className='h-full w-full object-cover'
            loading='lazy'
            src={isEmpty(product) ? thumbnail : product.thumbnail}
          />
        </div>
        <div className='flex flex-1 flex-col text-base'>
          <span className='leading-tight'>{isEmpty(product) ? title : product.title}</span>
        </div>
      </a>
      <div className='flex h-16 flex-col justify-between'>
        <p className='flex justify-end space-y-2 text-right text-sm'>
          $ {isEmpty(product) ? price : product.price}
          <span className='ml-1 inline'>USD</span>
        </p>
        <QuantityActionButton
          quantity={quantity}
          handleIncrease={handleIncreaseQuantity}
          handleDecrease={handleDecreaseQuantity}
        />
      </div>
    </div>
  );
});

export default ProductCartItem;
