// Libs
import { memo, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Helpers
import { isEmpty } from '@helpers/utils';

export const Categories = memo(
  ({
    categories = [],
    selectingItem,
    onSelectCategory,
  }: {
    categories: Array<{ value: string; label: string }>;
    selectingItem?: string;
    onSelectCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }): JSX.Element => {
    return (
      <nav>
        <h3 className='hidden text-xs text-neutral-400 md:block'>Category</h3>
        <ul
          className='hidden md:block'
          data-testid='categories'
        >
          {categories.map((item) => (
            <li
              className={`mt-2 flex text-white ${selectingItem === item.value ? 'font-bold underline' : ''}`}
              key={item.value}
            >
              <Link
                to={isEmpty(item.value) ? '/' : `/category/${item.value}`}
                className='w-full text-sm underline-offset-4 hover:underline hover:text-neutral-100'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='md:hidden'>
          <div className='relative'>
            <select
              className='bg-transparent flex w-full items-center justify-between rounded border px-4 py-2 text-sm border-white/30'
              onChange={onSelectCategory}
            >
              {categories.map((item) => (
                <option
                  className='mt-2 flex text-white bg-black'
                  value={item.value}
                  key={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    );
  },
);

const CategoryListContainer = ({ categories }: { categories: Array<{ label: string; value: string }> }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const onSelectCategory = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      const value = e.target.value;
      navigate(isEmpty(value) ? '/' : `/category/${value}`);
    },
    [category],
  );
  return (
    <Categories
      categories={categories}
      selectingItem={category}
      onSelectCategory={onSelectCategory}
    />
  );
};

export default CategoryListContainer;
