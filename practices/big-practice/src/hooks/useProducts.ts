// Libs
import useSWR from 'swr';

// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';

// Types
import type { IProductQueryParam } from '@interfaces';

/**
 * Custom hook to get data by using SWR
 * @param {IProductQueryParam} params
 * @param {Object} options
 * @returns
 */
export const useProducts = (params: IProductQueryParam, options = {}) => {
  const endpoint = buildQueryProductEndpoint(params);
  const response = useSWR(endpoint, options);

  return response;
};
