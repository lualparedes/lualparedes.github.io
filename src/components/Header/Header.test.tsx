import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ThemeMenu from '../ThemeMenu';
import { Header } from './Header';

let wrapper: any;

describe('Header component', () => {
  beforeAll(() => {
    wrapper = mount(<Header />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });

  it('opens and closes search box', () => {
    expect(wrapper.contains('SearchBox')).toBe(false);
    wrapper.find('li.header-items__item--search').simulate('click');
    expect(wrapper.contains('SearchBox')).toBe(true);
    wrapper.find('li.header-items__item--search').simulate('click');
    expect(wrapper.contains('SearchBox')).toBe(false);
  });

  it('opens and closes theme menu', () => {
    expect(wrapper.contains(<ThemeMenu />)).toBe(false);
    wrapper.find('li.header-items__item--theme').simulate('click');
    expect(wrapper.contains(<ThemeMenu />)).toBe(true);
    wrapper.find('li.header-items__item--theme').simulate('click');
    expect(wrapper.contains(<ThemeMenu />)).toBe(false);
  });
});
