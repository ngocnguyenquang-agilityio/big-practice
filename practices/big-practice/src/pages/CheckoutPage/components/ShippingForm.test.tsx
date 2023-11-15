// Libs
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, RenderResult } from '@testing-library/react';

// Components
import { ShippingForm } from './ShippingFormContainer';

describe('ShippingForm component', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should match snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('Should render error messages', () => {
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.click(button);

    expect(comp.findByText('Phone is required')).toBeTruthy();
    expect(comp.findByText('Email is required')).toBeTruthy();
    expect(comp.findByText('First name is required')).toBeTruthy();
    expect(comp.findByText('Last name is required')).toBeTruthy();
    expect(comp.findByText('Address is required')).toBeTruthy();
    expect(comp.findByText('City is required')).toBeTruthy();
  });
});

describe('ShippingForm component phone number field', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should render error message for phone number field', async () => {
    const phoneInput = comp.getByPlaceholderText('Phone number');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(phoneInput, { target: { value: 'this is not phone number' } });
    await fireEvent.click(button);

    expect(comp.findByText('Phone number is not valid')).toBeTruthy();
  });

  test('Should not render error message if input correct phone number', async () => {
    const phoneInput = comp.getByPlaceholderText('Phone number');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(phoneInput, { target: { value: '01234567' } });
    await fireEvent.click(button);

    expect(comp.queryByText('Phone is required')).toBeNull();
  });
});

describe('ShippingForm component email field', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should render error message for email field', async () => {
    const emailInput = comp.getByPlaceholderText('name@flowbite.com');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(emailInput, { target: { value: 'this is not correct email' } });
    await fireEvent.click(button);

    expect(comp.findByText('Invalid email')).toBeTruthy();
  });

  test('Should not render error message if input correct email', async () => {
    const emailInput = comp.getByPlaceholderText('name@flowbite.com');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(emailInput, { target: { value: 'test-mail@gmail.com' } });
    await fireEvent.click(button);

    expect(comp.queryByText('Email is required')).toBeNull();
  });
});

describe('ShippingForm component first name field', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should render error message for first name field', async () => {
    const fNameInput = comp.getByPlaceholderText('First name');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(fNameInput, { target: { value: 'First Name 123' } });
    await fireEvent.click(button);

    expect(comp.findByText('First name is not valid')).toBeTruthy();
  });

  test('Should not render error message if input correct first name', async () => {
    const fNameInput = comp.getByPlaceholderText('First name');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(fNameInput, { target: { value: 'First Name' } });
    await fireEvent.click(button);

    expect(comp.queryByText('First name is required')).toBeNull();
  });
});

describe('ShippingForm component last name field', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should render error message for last name field', async () => {
    const nameInput = comp.getByPlaceholderText('Last name');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(nameInput, { target: { value: 'Last Name 123' } });
    await fireEvent.click(button);

    expect(comp.findByText('Last name is not valid')).toBeTruthy();
  });

  test('Should not render error message if input correct last name', async () => {
    const nameInput = comp.getByPlaceholderText('Last name');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(nameInput, { target: { value: 'Last Name' } });
    await fireEvent.click(button);

    expect(comp.queryByText('Last name is required')).toBeNull();
  });
});

describe('ShippingForm component last name field', () => {
  let comp: RenderResult;
  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <ShippingForm />
      </MemoryRouter>,
    );
  });

  test('Should render error message for city field', async () => {
    const nameInput = comp.getByPlaceholderText('City');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(nameInput, { target: { value: 'City 123' } });
    await fireEvent.click(button);

    expect(comp.findByText('City name is not valid')).toBeTruthy();
  });

  test('Should not render error message if input correct city', async () => {
    const nameInput = comp.getByPlaceholderText('City');
    const button = comp.getByText(/continue to shipping/i, { selector: 'button' });
    fireEvent.change(nameInput, { target: { value: 'Hai Phong' } });
    await fireEvent.click(button);

    expect(comp.queryByText('City is required')).toBeNull();
  });
});
