// Libs
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

type SortProducts = {
  sortCondition: Array<{ value: string; label: string }>;
  selectingItem: string;
  onSelectSort: (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SortProducts = memo(({ sortCondition = [], selectingItem, onSelectSort }: SortProducts): JSX.Element => {
  return (
    <nav>
      <h3 className='hidden text-xs text-neutral-400 md:block'>Sort By</h3>
      <ul
        className='hidden md:block'
        data-testid='sort-products'
      >
        {sortCondition.map((item) => (
          <li
            className={`mt-2 flex text-white ${item.value === selectingItem ? 'font-bold underline' : ''}`}
            key={item.value}
          >
            <button
              className='text-sm underline-offset-4 hover:underline hover:text-neutral-100'
              value={item.value}
              onClick={onSelectSort}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className='md:hidden'>
        <div className='relative'>
          <select
            className='bg-transparent flex w-full items-center justify-between rounded border px-4 py-2 text-sm border-white/30'
            onChange={onSelectSort}
          >
            {sortCondition.map((item) => (
              <option
                className={`mt-2 flex text-white bg-black`}
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
});

const SortProductContainer = ({ sortConditions = [] }: { sortConditions: Array<{ label: string; value: string }> }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || '';

  const handleSelectSort = useCallback(
    (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLSelectElement>) => {
      searchParams.set('sort', e.currentTarget.value);
      setSearchParams(searchParams);
    },
    [searchParams],
  );

  return (
    <SortProducts
      selectingItem={sortBy}
      sortCondition={sortConditions}
      onSelectSort={handleSelectSort}
    />
  );
};

export default SortProductContainer;
