import { render } from '@testing-library/react';

// Components
import { Input } from './Input';

// Input is get from library so it is completely tested
describe('Button Component', () => {
  test('Should render successfully', () => {
    const comp = render(<Input />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Input />);
    expect(comp).toMatchSnapshot();
  });
});
