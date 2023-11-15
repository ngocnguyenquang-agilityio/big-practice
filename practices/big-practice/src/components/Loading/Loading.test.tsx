import { render } from '@testing-library/react';

// Components
import Loading from './Loading';

describe('Pagination Component', () => {
  test('Should render successfully', () => {
    const comp = render(<Loading />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Loading />);
    expect(comp).toMatchSnapshot();
  });
});
