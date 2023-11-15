// Libs
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
import { isEmpty } from '@helpers/utils';

// Hooks
import { useProducts } from '@hooks/useProducts';

interface ProductCartItemProps extends IProductCartItem {
  handleRemoveFromCart: () => void;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
}

export const ProductCartItem = memo(function ProductCartItemRenderer({
  thumbnail,
  price,
  title,
  quantity,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: Partial<ProductCartItemProps>) {
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
      <div className='z-30 flex flex-row space-x-4'>
        <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800'>
          <img
            className='h-full w-full object-cover'
            data-testid='item-thumbnail'
            loading='lazy'
            src={thumbnail}
            alt={`${title}-thumbnail`}
          />
        </div>
        <div
          className='flex flex-1 flex-col text-base'
          data-testid='item-title'
        >
          <span className='leading-tight'>{title}</span>
        </div>
      </div>
      <div className='flex h-16 flex-col justify-between'>
        <p
          className='flex justify-end space-y-2 text-right text-sm'
          data-testid='item-price'
        >
          $ {price}
          <span className='ml-1 inline'>USD</span>
        </p>
        <QuantityActionButton
          quantity={quantity || 1}
          handleIncrease={handleIncreaseQuantity!}
          handleDecrease={handleDecreaseQuantity!}
        />
      </div>
    </div>
  );
});

const ProductCartItemContainer = ({ id, quantity, price, title, thumbnail }: IProductCartItem) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity, updateProductInCart } = useCartStore();

  const { data: product } = useProducts(
    { productId: id },
    {
      keepPreviousData: true,
      onSuccess: updateProductInCart,
    },
  );

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(id);
  };

  return (
    <ProductCartItem
      quantity={quantity}
      title={isEmpty(product) ? title : product.title}
      thumbnail={isEmpty(product) ? thumbnail : product.thumbnail}
      price={isEmpty(product) ? price : product.price}
      handleDecreaseQuantity={handleDecreaseQuantity}
      handleIncreaseQuantity={handleIncreaseQuantity}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  );
};

export default ProductCartItemContainer;
