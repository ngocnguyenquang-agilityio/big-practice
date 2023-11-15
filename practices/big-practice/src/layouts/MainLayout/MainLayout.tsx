interface IMainLayout {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout = ({ children, header, footer }: IMainLayout) => {
  return (
    <div className='bg-neutral-900 text-white selection:bg-pink-500 selection:text-white'>
      {header}
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-white md:flex-row'>{children}</div>
      {footer}
    </div>
  );
};

export default MainLayout;
