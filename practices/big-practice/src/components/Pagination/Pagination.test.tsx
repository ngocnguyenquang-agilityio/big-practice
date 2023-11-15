import { RenderResult, fireEvent, render, screen } from '@testing-library/react';

// Components
import Pagination from './Pagination';

const props = {
  totalPages: 4,
  standingPage: '1',
  handleChangePagination: jest.fn(),
};

describe('Pagination Component', () => {
  let comp: RenderResult;

  beforeEach(() => {
    comp = render(<Pagination {...props} />);
  });

  test('Should render successfully', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render correct number of pagination', async () => {
    const items = await screen.getByTestId('pagination');
    expect(items.children).toHaveLength(4);
  });

  test('Should get correct standing page', async () => {
    const items = await screen.getByTestId('pagination');
    expect(items.getElementsByClassName('bg-blue-600').length).toBe(1);
  });

  test('Should call handleChangePagination when user click', async () => {
    const button = screen.getByRole('button', { name: /2/i });
    fireEvent.click(button);
    expect(props.handleChangePagination).toBeCalledTimes(1);
  });
});
