import { render, screen } from '@testing-library/react';

// Components
import { Button } from './Button';

// Button is get from library so it is completely tested
describe('Button Component', () => {
  test('Should render successfully', () => {
    const comp = render(<Button />);
    expect(comp).toBeTruthy();
  });

  test('Should match snapshot', () => {
    const comp = render(<Button />);
    expect(comp).toMatchSnapshot();
  });

  test('Should render correct variants', () => {
    render(<Button variant='secondary' />);
    const button = screen.getByRole('button');
    expect(button.getAttribute('class')).toMatch(/bg-neutral-900 border-neutral-800/gi);
  });

  test('Should render correct size', () => {
    render(<Button size='lg' />);
    const button = screen.getByRole('button');
    expect(button.getAttribute('class')).toMatch(/h-11 px-8 rounded-full/gi);
  });
});
