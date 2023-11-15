// Libs
import { ChangeEvent, memo, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// Icons
import cartIcon from '@assets/cartIcon.svg';

// Components
import { Button } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import SearchInput from '@components/SearchInput/SearchInput';

// Helpers
import { debounce } from '@helpers/utils';

// Constants
import { APP_ROUTERS, headerItems } from '@constants';

// Stores
import { useCartStore } from '@stores/cartStore';

// Types
import { IProduct } from '@interfaces';

export const Header = memo(
  ({
    cartItems,
    defaultValueSearch,
    numberOfItemsInCart,
    onToggleCart,
    handleSearch,
  }: {
    cartItems: IProduct[];
    defaultValueSearch: string;
    numberOfItemsInCart: number;
    onToggleCart: () => void;
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  }) => {
    return (
      <header className='flex items-center p-4 lg:px-6'>
        <div className='flex w-full items-center justify-between '>
          <div className='flex sm:w-1/3 '>
            <Link
              to={APP_ROUTERS.HOMEPAGE}
              reloadDocument
              className='mr-2 flex w-full items-center justify-center sm:w-auto lg:mr-6'
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
              <span className='ml-2 text-sm font-medium uppercase text-white hidden lg:block'>acme store</span>
            </Link>
            <ul
              data-testid='header-items'
              className='hidden gap-6 text-sm lg:flex sm:items-center'
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

          <div className='justify-center sm:flex sm:w-1/3'>
            <form className='w-max-[550px] relative w-full lg:w-80 xl:w-full'>
              <SearchInput
                type='text'
                placeholder='Search Products...'
                onChange={handleSearch}
                defaultValue={defaultValueSearch}
              />
            </form>
          </div>

          <div className='flex justify-end sm:w-1/3'>
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
                  <div
                    data-testid='number-of-items'
                    className='absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-600 rounded-full -top-2 -right-2 dark:border-gray-900'
                  >
                    {numberOfItemsInCart > 9 ? '9+' : numberOfItemsInCart}
                  </div>
                )}
              </div>
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

const HeaderContainer = () => {
  const { cartItems, toggleCart } = useCartStore();

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
    <Header
      cartItems={cartItems}
      defaultValueSearch={searchKeyword || ''}
      numberOfItemsInCart={numberOfItemsInCart}
      onToggleCart={toggleCart}
      handleSearch={searchWithDebounce}
    />
  );
};

export default HeaderContainer;
