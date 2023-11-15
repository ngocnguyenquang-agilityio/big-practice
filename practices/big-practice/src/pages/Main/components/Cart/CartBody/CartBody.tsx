// Stores
import { useCartStore } from '@stores/cartStore';

// Libs
import { Link } from 'react-router-dom';

// Components
import CartEmpty from '../CartEmpty/CartEmpty';
import { Button } from '@components/Button/Button';
import ProductCartItemContainer from '../ProductCartItem/ProductCartItem';

// Constants
import { APP_ROUTERS } from '@constants';

const CartBody = () => {
  const { toggleCart, cartItems } = useCartStore();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return cartItems.length > 0 ? (
    <div className='flex h-full flex-col justify-between overflow-hidden p-1'>
      <ul className='flex-grow overflow-auto py-4'>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className='flex w-full flex-col border-b border-neutral-700'
          >
            <ProductCartItemContainer {...item} />
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
        <Link to={APP_ROUTERS.CHECKOUT}>
          <Button
            size='xl'
            onClick={toggleCart}
          >
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  ) : (
    <CartEmpty />
  );
};

export default CartBody;
