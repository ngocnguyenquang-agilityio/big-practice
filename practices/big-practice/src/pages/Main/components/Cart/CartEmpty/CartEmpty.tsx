const CartEmpty = () => {
  return (
    <div className='mt-20 flex w-full flex-col items-center justify-center overflow-hidden'>
      <svg
        name='cart-icon'
        xmlns='http://www.w3.org/2000/svg'
        width={64}
        height={64}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='lucide lucide-shopping-cart'
      >
        <circle
          cx='8'
          cy='21'
          r='1'
        />
        <circle
          cx='19'
          cy='21'
          r='1'
        />
        <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
      </svg>
      <p className='mt-6 text-center text-2xl font-bold'>Your cart is empty.</p>
    </div>
  );
};

export default CartEmpty;
