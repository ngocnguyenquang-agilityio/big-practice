import { render, fireEvent } from '@testing-library/react';

import SearchInput, { ISearchInput } from './SearchInput';

const props: ISearchInput = {
  type: 'text',
  placeholder: 'Search products ...',
  onChange: jest.fn()
}

describe("SearchInput component", () => {
  test('Should render successfully', () => {
    const comp = render(<SearchInput {...props} />)
    expect(comp).toBeTruthy();
  })

  test('Should match snapshot', () => {
    const comp = render(<SearchInput {...props} />)
    expect(comp).toMatchSnapshot();
  })

  test('Should able to type', () => {
    const { getByPlaceholderText } = render(<SearchInput {...props} />);
    const searchInput = getByPlaceholderText('Search products ...') as HTMLInputElement;
    const value = 'typing search value'

    fireEvent.change(searchInput, { target: { value: value } });
    expect(searchInput.value).toBe(value)
  })
})