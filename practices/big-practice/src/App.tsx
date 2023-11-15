// Libs
import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';

// Services
import { fetcher } from '@services/fetcher';

// Router
import { router } from '@pages/router';

function App() {
  return (
    <SWRConfig value={{ provider: () => new Map(), fetcher }}>
      <RouterProvider router={router} />
    </SWRConfig>
  );
}

export default App;
