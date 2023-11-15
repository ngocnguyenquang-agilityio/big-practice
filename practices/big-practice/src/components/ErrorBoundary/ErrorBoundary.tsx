// Libs
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

// Components
import { Button } from '@components/Button/Button';

// Constants
import { APP_ROUTERS } from '@constants';

export const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const onClickReloadPage = () => {
    navigate(APP_ROUTERS.HOMEPAGE);
  };

  const errorMessage = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    }
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    return 'Unknown error';
  };

  return (
    <div className='error-page min-h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-5xl font-semibold text-red-600 mb-4'>Something went wrong</h1>
        <details className='text-2xl text-gray-300 font-semibold'>{errorMessage(error)}</details>
        <Button
          className='mt-4'
          onClick={onClickReloadPage}
        >
          Reload Page
        </Button>
      </div>
    </div>
  );
};
