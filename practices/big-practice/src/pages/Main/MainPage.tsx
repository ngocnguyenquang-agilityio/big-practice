// Libs
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import MainLayout from '@layouts/MainLayout/MainLayout';
import Loading from '@components/Loading/Loading';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

// Stores
import { useCartStore } from '@stores/cartStore';

const Main = () => {
  const { isOpenCart, toggleCart } = useCartStore();
  console.log('abc', isOpenCart);

  useEffect(() => {
    if (isOpenCart) document.body.style.overflow = 'hidden';
    if (!isOpenCart) document.body.style.overflow = 'scroll';
  }, [isOpenCart]);

  return (
    <Suspense fallback={<Loading />}>
      <MainLayout
        header={<HeaderContainer />}
        footer={<Footer />}
      >
        {isOpenCart && <Cart handleToggleCart={toggleCart} />}
        <Outlet />
      </MainLayout>
    </Suspense>
  );
};

export default Main;
