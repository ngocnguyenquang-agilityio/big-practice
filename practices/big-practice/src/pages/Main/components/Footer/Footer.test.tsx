import { render } from '@testing-library/react';

// Components
import Footer from './Footer';

describe('Footer component', () => {
  test('Should render successfully', () => {
    const comp = render(<Footer />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Footer />);
    expect(comp).toMatchSnapshot();
  });

  test('Should render number of footer items correctly', async () => {
    const comp = render(<Footer />);
    const items = await comp.getByTestId('footer-items');
    expect(items.children).toHaveLength(5);
  });
});
