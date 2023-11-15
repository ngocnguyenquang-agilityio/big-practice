// Libs
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
import Main from './Main/MainPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const ProductDetailsPage = lazy(() => import('./ProductDetailsPage/ProductDetailsPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `${APP_ROUTERS.DETAILS_PAGE}/:productId`,
        element: <ProductDetailsPage />,
      },
      {
        path: `${APP_ROUTERS.CATEGORY}/:category`,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
    errorElement: <ErrorBoundary />,
  },
]);
