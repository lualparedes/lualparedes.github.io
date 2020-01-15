import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeMenu } from './ThemeMenu';

// const setContext = jest.fn();
// (React as any).useContext = jest.fn((init) => [init, setContext]);

let wrapper: any;

describe('ThemeMenu component', () => {
  beforeAll(() => {
    wrapper = mount(<ThemeMenu />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeMenu />, div);
  });

  it('switches theme', async () => {
    expect(wrapper.find('div.theme-menu').hasClass('theme--dark')).toBe(false);
    await wrapper
      .find('button')
      .last()
      .prop('onClick')();
    // expect(setContext).toHaveBeenCalledWith('dark');
  });
});
