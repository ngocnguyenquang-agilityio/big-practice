// Icons
import crossIcon from '@assets/crossIcon.svg';

// Components
import { Button } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import CartBody from './CartBody/CartBody';

// Hooks
import { useOutsideClick } from '@hooks/useClickOutSide';

export interface ICart {
  handleToggleCart: () => void;
}

const Cart = ({ handleToggleCart }: ICart) => {
  const ref = useOutsideClick(() => {
    handleToggleCart();
  });

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black/30 opacity-100 backdrop-blur-[.5px]'>
      <aside
        ref={ref}
        className='fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l p-4 lg:px-6 backdrop-blur-xl border-neutral-700 bg-black/90 text-white md:w-[390px] translate-x-0 z-60'
      >
        <div className='flex items-center justify-between'>
          <p className='text-lg font-semibold'>My Cart</p>
          <div className='flex justify-end md:w-1/3'>
            <Button
              data-testid='close-cart-btn'
              variant='outline'
              size='icon'
              onClick={handleToggleCart}
            >
              <Icon
                svg={crossIcon}
                name='cross-icon'
              />
            </Button>
          </div>
        </div>
        <CartBody />
      </aside>
    </div>
  );
};

export default Cart;
