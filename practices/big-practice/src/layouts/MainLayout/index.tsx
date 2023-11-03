// Components
import Cart from '@components/Cart';
import Footer from '@components/Footer';
import Header from '@components/Header';

// Stores
import { useCartStore } from '@stores/cartStore';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpenCart, toggleCart } = useCartStore();

  return (
    <div className='bg-neutral-900 text-white selection:bg-pink-500 selection:text-white'>
      <Header onToggleCart={toggleCart} />
      <div className='mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-white md:flex-row'>{children}</div>
      <Footer />
      {isOpenCart && <Cart handleToggleCart={toggleCart} />}
    </div>
  );
};

export default MainLayout;
