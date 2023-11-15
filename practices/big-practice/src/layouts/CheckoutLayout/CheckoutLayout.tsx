const CheckoutLayout = ({ rightAside, children }: { rightAside?: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className='flex mx-auto max-w-screen-xl gap-10 p-8 text-white'>
      <div className='w-2/3'>{children}</div>
      <div className='flex w-1/3'>{rightAside}</div>
    </div>
  );
};

export default CheckoutLayout;
