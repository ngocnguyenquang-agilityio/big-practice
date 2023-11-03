// Libs
import { ChangeEvent, memo, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// Icons
import cartIcon from '@assets/cartIcon.svg';

// Components
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import SearchInput from '@components/SearchInput';

// Helpers
import { debounce } from '@helpers/utils';

// Constants
import { APP_ROUTERS, headerItems } from '@constants';
import { useCartStore } from '@stores/cartStore';

const Header = memo(({ onToggleCart }: { onToggleCart: () => void }) => {
  const { cartItems } = useCartStore();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchKeyword = searchParams.get('search');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.target.value;

    navigate(`/?search=${inputValue.trim()}`);
  }, []);

  const searchWithDebounce = debounce(handleSearch, 1000);

  const numberOfItemsInCart = cartItems.reduce((total, currentItem) => (total += currentItem.quantity), 0);

  return (
    <header className='relative flex items-center justify-between p-4 lg:px-6'>
      <div className='flex w-full items-center'>
        <div className='flex w-full md:w-1/3 items-center'>
          <Link
            to={APP_ROUTERS.HOMEPAGE}
            reloadDocument
            className='mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6'
          >
            <div className='flex flex-none items-center justify-center border border-neutral-700 bg-black h-[40px] w-[40px] rounded-xl'>
              <svg
                name='logo-icon'
                xmlns='http://www.w3.org/2000/svg'
                aria-label='Acme Store logo'
                viewBox='0 0 32 28'
                className='h-5 w-5 fill-white h-[16px] w-[16px]'
              >
                <path d='M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z' />
                <path d='M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z' />
              </svg>
            </div>
            <span className='ml-2 text-sm font-medium uppercase text-white'>acme store</span>
          </Link>
          <ul
            data-testid='header-items'
            className='gap-6 text-sm md:flex md:items-center'
          >
            {headerItems.map((item) => (
              <Link
                to={item.url}
                key={item.url}
                className='underline-offset-4 hover:underline text-neutral-400 hover:text-neutral-300 cursor-pointer'
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className='justify-center md:flex md:w-1/3'>
          <SearchInput
            type='text'
            placeholder='Search Products...'
            onChange={searchWithDebounce}
            defaultValue={searchKeyword || ''}
          />
        </div>
        <div className='flex justify-end md:w-1/3'>
          <Button
            variant='outline'
            size='icon'
            onClick={onToggleCart}
          >
            <div className='relative flex h-11 w-11 items-center justify-center rounded-md border transition-colors border-neutral-700 text-white'>
              <Icon
                svg={cartIcon}
                name='cart-icon'
              />
              {cartItems.length > 0 && (
                <div className='absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-600 rounded-full -top-2 -right-2 dark:border-gray-900'>
                  {numberOfItemsInCart > 9 ? '9+' : numberOfItemsInCart}
                </div>
              )}
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
});

export default Header;
