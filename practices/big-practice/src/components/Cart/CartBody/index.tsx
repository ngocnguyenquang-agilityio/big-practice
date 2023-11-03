// Stores
import { useCart } from '@stores/cart';

// Components
import ProductCartItem from '../ProductCartItem';
import CartEmpty from '../CartEmpty';

const CartBody = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return cartItems.length > 0 ? (
    <div className='flex h-full flex-col justify-between overflow-hidden p-1'>
      <ul className='flex-grow overflow-auto py-4'>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className='flex w-full flex-col border-b border-neutral-700'
          >
            <ProductCartItem
              id={item.id}
              product={item.product}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
      <div className='py-4 text-sm text-neutral-400'>
        <div className='mb-3 flex items-center justify-between border-b pb-1 border-neutral-700'>
          <p>Taxes</p>
          <p className='text-right text-base text-white'>
            $0.00
            <span className='ml-1 inline'>USD</span>
          </p>
        </div>
        <div className='mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700'>
          <p>Shipping</p>
          <p className='text-right'>Calculated at checkout</p>
        </div>
        <div className='mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700'>
          <p>Total</p>
          <p className='text-right text-base text-white'>
            ${totalPrice}
            <span className='ml-1 inline'>USD</span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <CartEmpty />
  );
};

export default CartBody;
