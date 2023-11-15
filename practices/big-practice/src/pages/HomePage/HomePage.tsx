// Components
import SortProducts from './components/SortProductsContainer';

// Layouts
import HomeLayout from '@layouts/HomeLayout/HomeLayout';

// Types
import ProductListContainer from './components/ProductListContainer';

// Constants
import { CATEGORIES, SORT_CONDITIONS } from '@constants';
import CategoryListContainer from './components/CategoryListContainer';

const HomePage = () => {
  return (
    <HomeLayout
      leftAside={<CategoryListContainer categories={CATEGORIES} />}
      rightAside={<SortProducts sortConditions={SORT_CONDITIONS} />}
    >
      <div className='relative'>
        <ProductListContainer />
      </div>
    </HomeLayout>
  );
};

export default HomePage;
