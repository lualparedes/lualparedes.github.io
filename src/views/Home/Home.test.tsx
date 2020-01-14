import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Home from './Home';

let wrapper: any;

describe('Home component', () => {
  beforeAll(() => {
    wrapper = mount(<Home />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });

  it('opens and closes menu', () => {
    wrapper.find('*.js-iconMenu').simulate('click');
    expect(wrapper.find('*.Menu').hasClass('Menu--open')).toBe(true);
    wrapper.find('*.menu-close').simulate('click');
    expect(wrapper.find('*.Menu').hasClass('Menu--open')).toBe(false);
  });

  it('navigates to the right section', () => {
    // wrapper.find('div.js-iconMenu').simulate('click');
    // wrapper.find('li.menu-items__item').first().simulate('click');
    // console.log(window.scrollY)
    // expect(window.scrollY).not.toBe(0);
  });

  it('opens and closes modal', () => {
    wrapper
      .find('*.project-content__img--clickable')
      .first()
      .simulate('click');
    expect(wrapper.find('*.js-backdropModal').hasClass('a-backdrop-show')).toBe(
      true
    );
    wrapper.find('*.modal-close').simulate('click');
    expect(wrapper.find('*.modal-close').hasClass('a-backdrop-show')).toBe(
      false
    );
  });
});
