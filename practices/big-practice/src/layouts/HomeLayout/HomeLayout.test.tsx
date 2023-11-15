import { RenderResult, render } from '@testing-library/react';

// Components
import HomeLayout from './HomeLayout';

const MockLeftAside = () => <div>Left Aside</div>;
const MockRightAside = () => <div>Right Aside</div>;

const props = {
  leftAside: <MockLeftAside />,
  rightAside: <MockRightAside />,
};

describe('HomeLayout', () => {
  let comp: RenderResult;

  beforeEach(() => {
    comp = render(
      <HomeLayout {...props}>
        <div>Children</div>
      </HomeLayout>,
    );
  });

  test('Should render correctly', () => {
    expect(comp).toBeTruthy();
  });

  test('Should render correctly', () => {
    expect(comp).toMatchSnapshot();
  });
});
