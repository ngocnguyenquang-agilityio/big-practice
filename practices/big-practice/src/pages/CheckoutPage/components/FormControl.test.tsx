// Libs
import '@testing-library/jest-dom';
import { screen, render, RenderResult, fireEvent } from '@testing-library/react';

// Components
import FormControl from './FormControl';

const onChange = jest.fn();
const props = {
  id: 'input-1',
  label: 'Label 1',
  value: 'value1',
  placeholder: 'Placeholder1',
  onChange,
};

describe('FormControl component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(<FormControl {...props} />);
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render error message if has error', () => {
    render(
      <FormControl
        errorMessage='Something went wrong'
        {...props}
      />,
    );
    const err = screen.queryByText('Something went wrong');

    expect(err).toBeInTheDocument();
  });

  test('Should call onChange function', () => {
    const input = comp.getByLabelText('Label 1') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'ABC' } });

    expect(onChange).toBeCalled();
  });
});
