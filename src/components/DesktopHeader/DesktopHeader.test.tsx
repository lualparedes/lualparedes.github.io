import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import { DesktopHeader } from './DesktopHeader';

let wrapper: any;

describe('DesktopHeader component', () => {
  beforeAll(() => {
    wrapper = mount(<DesktopHeader />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DesktopHeader />, div);
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
