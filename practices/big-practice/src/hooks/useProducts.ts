// Libs
import useSWR from 'swr';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

// Types
import type { IProductQueryParam } from '@interfaces';

export const useProducts = (params: IProductQueryParam, options = {}) => {
  const endpoint = buildQueryProductEndpoint(params);
  const response = useSWR(endpoint, options);

  return response;
};
