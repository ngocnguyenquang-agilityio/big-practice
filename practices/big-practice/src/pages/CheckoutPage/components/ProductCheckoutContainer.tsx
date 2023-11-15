// Stores
import { useCartStore } from '@stores/cartStore';

// Types
import { IProductCartItem } from '@interfaces';

export const ProductCheckout = ({ cartItems, totalPrice }: { cartItems: IProductCartItem[]; totalPrice: number }) => {
  return (
    <div className='flex w-full flex-col px-4 py-4 justify-between overflow-hidden'>
      <ul className='flex-grow overflow-auto py-4'>
        {cartItems.map((item) => (
          <li
            className='flex w-full flex-col border-b border-neutral-700 py-2'
            key={item.id}
          >
            <div className='absolute z-40 -mt-2 ml-[55px]'>
              <div className='ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200'>
                {item.quantity}
              </div>
            </div>
            <div className='z-30 flex flex-row space-x-4 justify-between'>
              <div className='flex gap-4'>
                <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800'>
                  <img
                    className='h-full w-full object-cover'
                    data-testid='item-thumbnail'
                    loading='lazy'
                    src={item.thumbnail}
                  />
                </div>
                <span className='text-md'>{item.title}</span>
              </div>
              <div className='flex items-center'>
                <p className='space-y-2 text-right text-md'>${item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='py-4 text-sm text-neutral-400'>
        <div className='mb-3 flex items-center justify-between'>
          <p className='text-white'>Subtotal</p>
          <p className='text-sm text-white font-bold'>${totalPrice}</p>
        </div>
        <div className='mb-3 flex items-center justify-between'>
          <p className='text-white'>Shipping</p>
          <p className='text-sm text-neutral-400'>Calculated at next step</p>
        </div>
        <div className='mb-3 flex items-center justify-between pb-1 pt-1 text-white'>
          <p className='font-bold text-xl'>Total</p>
          <div className='flex items-baseline'>
            <span className='inline pr-2 text-neutral-400 text-sm'>USD</span>
            <p className='text-xl font-bold'>${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCheckoutContainer = () => {
  const { cartItems } = useCartStore();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <ProductCheckout
      cartItems={cartItems}
      totalPrice={totalPrice}
    />
  );
};

export default ProductCheckoutContainer;
