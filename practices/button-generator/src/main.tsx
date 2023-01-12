import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Sidebar from './layouts/Sidebar';
import Collection from './router/Collection';
import Home from './router/Home';
import CollectionProvider from './store/CollectionProvider';

const AppLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='collection' element={<Collection />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CollectionProvider>
      <RouterProvider router={router} />
    </CollectionProvider>
  </React.StrictMode>,
);
