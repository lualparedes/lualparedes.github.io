import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

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
    expect(
      wrapper
        .find('*.transition--search-box .transition__wrap')
        .first()
        .hasClass('in')
    ).toBe(false);

    wrapper.find('li.header-items__item--search').simulate('click');
    expect(
      wrapper
        .find('*.transition--search-box .transition__wrap')
        .first()
        .hasClass('in')
    ).toBe(true);

    wrapper.find('li.header-items__item--search').simulate('click');
    expect(
      wrapper
        .find('*.transition--search-box .transition__wrap')
        .first()
        .hasClass('in')
    ).toBe(false);
  });

  it('opens and closes theme menu', () => {
    expect(
      wrapper
        .find('*.transition--theme-menu .transition__wrap')
        .first()
        .hasClass('in')
    ).toBe(false);

    wrapper.find('li.header-items__item--theme').simulate('click');
    expect(
      wrapper
        .find('*.transition--theme-menu .transition__wrap')
        .first()
        .hasClass('in')
    ).toBe(true);

    wrapper.find('li.header-items__item--theme').simulate('click');
    expect(
      wrapper
        .find('*.transition--theme-menu .transition__wrap')
        .first()
        .hasClass('in')
    ).toBe(false);
  });
});
