import React from 'react';
import ReactDOM from 'react-dom';

import { SideMenu } from './SideMenu';

const props = { open: false, toggleOpen: jest.fn() };

describe('SideMenu component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SideMenu {...props} />, div);
  });
});
