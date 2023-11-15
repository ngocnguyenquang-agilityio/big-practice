import { MemoryRouter } from 'react-router-dom';
import { RenderResult, render } from '@testing-library/react';

import MainLayout from './MainLayout';

const MockHeader = () => <div>Header</div>;
const MockFooter = () => <div>Footer</div>;

const propsMainLayout = {
  header: <MockHeader />,
  footer: <MockFooter />,
};

describe('MainLayout', () => {
  let comp: RenderResult;

  beforeEach(() => {
    comp = render(
      <MemoryRouter>
        <MainLayout {...propsMainLayout}>
          <div>Children</div>
        </MainLayout>
      </MemoryRouter>,
    );
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should render correctly', () => {
    expect(comp).toMatchSnapshot();
  });
});
