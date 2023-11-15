// Libs
import useSWR from 'swr';
import { render, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

// Components
import ProductListContainer from './ProductListContainer';

// Mocks
import { mockDataResponse, mockDataResponseTotal } from '@mocks';

jest.mock('swr');

const useMockSwr = jest.mocked(useSWR);

describe('ProductListContainer', () => {
  test('Should render correctly', () => {
    useMockSwr.mockReturnValue({
      data: mockDataResponse,
      isLoading: false,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockDataResponse,
            opts: true,
          };
        });
      },
      isValidating: false,
    });
    const comp = render(
      <MemoryRouter>
        <ProductListContainer />
      </MemoryRouter>,
    );
    expect(comp).toMatchSnapshot();
  });

  test('Should render Skeleton', () => {
    useMockSwr.mockReturnValue({
      data: mockDataResponse,
      isLoading: true,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockDataResponse,
            opts: true,
          };
        });
      },
      isValidating: false,
    });

    const comp = render(
      <MemoryRouter>
        <ProductListContainer />
      </MemoryRouter>,
    );

    const list = comp.getByRole('list', {
      name: /skeleton/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(9);
  });

  test('Should render pagination', () => {
    useMockSwr.mockReturnValue({
      data: mockDataResponse,
      isLoading: false,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockDataResponse,
            opts: true,
          };
        });
      },
      isValidating: false,
    });

    const comp = render(
      <MemoryRouter>
        <ProductListContainer />
      </MemoryRouter>,
    );

    const items = comp.getByTestId('pagination');
    expect(items.children).toHaveLength(2);
  });

  test('Should not render pagination', () => {
    useMockSwr.mockReturnValue({
      data: mockDataResponseTotal,
      isLoading: false,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockDataResponseTotal,
            opts: true,
          };
        });
      },
      isValidating: false,
    });

    const comp = render(
      <MemoryRouter>
        <ProductListContainer />
      </MemoryRouter>,
    );

    const items = comp.queryByTestId('pagination');
    expect(items).toBeNull();
  });
});
