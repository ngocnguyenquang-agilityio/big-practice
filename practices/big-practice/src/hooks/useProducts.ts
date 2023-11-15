// Libs
import useSWR from 'swr';

export const useProducts = (endpoint: string) => {
  const { data, isLoading } = useSWR(endpoint, { keepPreviousData: true, suspense: true });

  return {
    products: data.products,
    total: data.total,
    isLoading,
  };
};
