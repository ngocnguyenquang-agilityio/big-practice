// Libs
import { render, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

// Components
import ProductListContainer from './ProductListContainer';
import useSWR from 'swr';

jest.mock('swr');
const mockData = {
  products: [
    {
      id: 1,
      title: 'iPhone 9',
      price: 549,
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      description: 'An apple mobile which is nothing like apple',
    },
    {
      id: 2,
      title: 'iPhone X',
      price: 899,
      images: [
        'https://i.dummyjson.com/data/products/2/1.jpg',
        'https://i.dummyjson.com/data/products/2/2.jpg',
        'https://i.dummyjson.com/data/products/2/3.jpg',
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      ],
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      price: 1249,
      images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    },
  ],
  total: 10,
  skip: 0,
  limit: 9,
};

const useMockSwr = jest.mocked(useSWR);

describe('ProductListContainer', () => {
  test('Should render correctly', () => {
    useMockSwr.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockData,
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
      data: mockData,
      isLoading: true,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockData,
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
      data: mockData,
      isLoading: false,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockData,
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
      data: {
        products: [
          {
            id: 1,
            title: 'iPhone 9',
            price: 549,
            images: [
              'https://i.dummyjson.com/data/products/1/1.jpg',
              'https://i.dummyjson.com/data/products/1/2.jpg',
              'https://i.dummyjson.com/data/products/1/3.jpg',
              'https://i.dummyjson.com/data/products/1/4.jpg',
              'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            ],
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
            description: 'An apple mobile which is nothing like apple',
          },
          {
            id: 2,
            title: 'iPhone X',
            price: 899,
            images: [
              'https://i.dummyjson.com/data/products/2/1.jpg',
              'https://i.dummyjson.com/data/products/2/2.jpg',
              'https://i.dummyjson.com/data/products/2/3.jpg',
              'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
            ],
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
            description:
              'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
          },
          {
            id: 3,
            title: 'Samsung Universe 9',
            price: 1249,
            images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
          },
        ],
        total: 3,
        skip: 0,
        limit: 9,
      },
      isLoading: false,
      error: undefined,
      mutate: function (): Promise<unknown> {
        return new Promise<void>(() => {
          return {
            data: mockData,
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
