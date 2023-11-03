// Stores
import { useCart } from '@stores/cart';

// Icons
import removeIcon from '@assets/removeIcon.svg';

// Types
import { IProductCartItem } from '@interfaces';

// Components
import QuantityActionButton from '@components/QuantityActionButton';
import { Icon } from '@components/Icon';

const ProductCartItem = ({ id, product, quantity }: IProductCartItem) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

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
            src={product.thumbnail}
          />
        </div>
        <div className='flex flex-1 flex-col text-base'>
          <span className='leading-tight'>{product.title}</span>
          <p className='text-sm text-neutral-400'>Black / 7 x 9 inch</p>
        </div>
      </a>
      <div className='flex h-16 flex-col justify-between'>
        <p className='flex justify-end space-y-2 text-right text-sm'>
          {product.price}
          <span className='ml-1 inline'>USD</span>
        </p>
        <QuantityActionButton
          quantity={quantity}
          // TODO: Handle increase and decrease quantity
          handleDecrease={() => {}}
          handleIncrease={() => {}}
        />
      </div>
    </div>
  );
};

export default ProductCartItem;
