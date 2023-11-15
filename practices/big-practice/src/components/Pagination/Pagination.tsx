// Component
import { Button } from '@components/Button/Button';

interface IPagination {
  totalPages: number;
  standingPage: null | string;
  handleChangePagination: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination = ({ totalPages, standingPage, handleChangePagination }: IPagination) => {
  return (
    <nav className='pt-4 flex justify-end'>
      <ul
        data-testid='pagination'
        className='inline-flex -space-x-px text-md gap-4'
      >
        {Array.apply(0, new Array(totalPages)).map((_, idx) => {
          const currentPage = idx + 1;
          const isActivePage = currentPage.toString() === standingPage;

          return (
            <li key={idx}>
              <Button
                size='icon'
                variant='secondary'
                value={currentPage.toString()}
                onClick={handleChangePagination}
                className={isActivePage ? 'bg-blue-600' : ''}
              >
                {currentPage.toString()}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
