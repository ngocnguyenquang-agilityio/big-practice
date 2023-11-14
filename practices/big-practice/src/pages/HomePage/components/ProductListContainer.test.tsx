// Libs
import axios from 'axios';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

// Components
import ProductListContainer from './ProductListContainer';

describe('ProductListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  test('Should render correctly', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
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
          {
            id: 4,
            title: 'OPPOF19',
            price: 280,
            images: [
              'https://i.dummyjson.com/data/products/4/1.jpg',
              'https://i.dummyjson.com/data/products/4/2.jpg',
              'https://i.dummyjson.com/data/products/4/3.jpg',
              'https://i.dummyjson.com/data/products/4/4.jpg',
              'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
            ],
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
            description: 'OPPO F19 is officially announced on April 2021.',
          },
          {
            id: 5,
            title: 'Huawei P30',
            price: 499,
            images: [
              'https://i.dummyjson.com/data/products/5/1.jpg',
              'https://i.dummyjson.com/data/products/5/2.jpg',
              'https://i.dummyjson.com/data/products/5/3.jpg',
            ],
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
            description:
              'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
          },
          {
            id: 6,
            title: 'MacBook Pro',
            price: 1749,
            images: [
              'https://i.dummyjson.com/data/products/6/1.png',
              'https://i.dummyjson.com/data/products/6/2.jpg',
              'https://i.dummyjson.com/data/products/6/3.png',
              'https://i.dummyjson.com/data/products/6/4.jpg',
            ],
            category: 'laptops',
            thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
            description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
          },
          {
            id: 7,
            title: 'Samsung Galaxy Book',
            price: 1499,
            images: [
              'https://i.dummyjson.com/data/products/7/1.jpg',
              'https://i.dummyjson.com/data/products/7/2.jpg',
              'https://i.dummyjson.com/data/products/7/3.jpg',
              'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
            ],
            category: 'laptops',
            thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
            description: 'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
          },
          {
            id: 8,
            title: 'Microsoft Surface Laptop 4',
            price: 1499,
            images: [
              'https://i.dummyjson.com/data/products/8/1.jpg',
              'https://i.dummyjson.com/data/products/8/2.jpg',
              'https://i.dummyjson.com/data/products/8/3.jpg',
              'https://i.dummyjson.com/data/products/8/4.jpg',
              'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
            ],
            category: 'laptops',
            thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
            description:
              'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
          },
          {
            id: 9,
            title: 'Infinix INBOOK',
            price: 1099,
            images: [
              'https://i.dummyjson.com/data/products/9/1.jpg',
              'https://i.dummyjson.com/data/products/9/2.png',
              'https://i.dummyjson.com/data/products/9/3.png',
              'https://i.dummyjson.com/data/products/9/4.jpg',
              'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
            ],
            category: 'laptops',
            thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
            description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
          },
        ],
        total: 100,
        skip: 0,
        limit: 9,
      },
    });
    const comp = render(
      <MemoryRouter>
        <ProductListContainer />
      </MemoryRouter>,
    );
    expect(comp).toMatchSnapshot();
  });
});
