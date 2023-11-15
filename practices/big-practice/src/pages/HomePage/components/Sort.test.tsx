// Libs
import { MemoryRouter } from 'react-router-dom';
import { screen, render, RenderResult, fireEvent } from '@testing-library/react';

// Components
import { SortProducts } from './SortProductsContainer';

// Mocks
import { mockSortConditions } from '@mocks';

const props = {
  sortCondition: mockSortConditions,
  selectingItem: 'low-to-high',
  onSelectSort: jest.fn(),
};

describe('Sort Product component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <SortProducts {...props} />
      </MemoryRouter>,
    );
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render correct number of items', async () => {
    const items = await screen.getByTestId('sort-products');
    expect(items.children).toHaveLength(2);
  });

  test('Should has no underline item in first render', async () => {
    const items = await screen.getByTestId('sort-products');
    expect(items.getElementsByClassName('font-bold underline').length).toBe(1);
  });

  test('Should call onSelectSort', async () => {
    await screen.getByTestId('sort-products');
    const button = screen.getByRole('button', { name: /Low to High/i });
    fireEvent.click(button);
    expect(props.onSelectSort).toBeCalledTimes(1);
  });
});
