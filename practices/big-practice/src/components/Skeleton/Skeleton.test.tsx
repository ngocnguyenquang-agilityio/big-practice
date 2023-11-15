import { RenderResult, render, within } from '@testing-library/react';

// Components
import Skeleton from './Skeleton';

const props = {
  pagination: 2,
};

describe('Skeleton Component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(<Skeleton {...props} />);
  });

  test('Should render successfully', () => {
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render correct number of items', () => {
    const list = comp.getByRole('list', {
      name: /skeleton/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(2);
  });
});
