import { IProductCartItem } from '@interfaces';

export const CheckoutProduct = ({ title, price, thumbnail, quantity }: Partial<IProductCartItem>) => {
  return (
    <div className='pb-6'>
      <div className='absolute z-40 -mt-2 ml-[55px]'>
        <div className='ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200'>
          {quantity}
        </div>
      </div>
      <div className='z-30 flex flex-row space-x-4 justify-between'>
        <div className='flex gap-4'>
          <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-700 bg-neutral-900 hover:bg-neutral-800'>
            <img
              className='h-full w-full object-cover'
              data-testid='item-thumbnail'
              loading='lazy'
              src={thumbnail}
            />
          </div>
          <span className='text-md'>{title}</span>
        </div>
        <div className='flex items-center'>
          <p className='space-y-2 text-right text-md'>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

const CheckoutProductContainer = ({ title, price, quantity, thumbnail }: IProductCartItem) => {
  <CheckoutProduct
    quantity={quantity}
    price={price}
    thumbnail={thumbnail}
    title={title}
  />;
};

export default CheckoutProductContainer;
