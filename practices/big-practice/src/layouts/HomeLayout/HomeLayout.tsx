interface IHomeLayout {
  children: React.ReactNode;
  leftAside: React.ReactNode;
  rightAside: React.ReactNode;
}

const HomeLayout = ({ children, leftAside, rightAside }: IHomeLayout) => {
  return (
    <>
      <div className='order-first w-full flex-none md:max-w-[125px]'>{leftAside}</div>
      <div className='order-last min-h-screen w-full md:order-none'>{children}</div>
      <div className='order-none flex-none md:order-last md:w-[125px]'>{rightAside}</div>
    </>
  );
};

export default HomeLayout;
