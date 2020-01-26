import React from 'react';
import ReactDOM from 'react-dom';

import { MenuToggler } from './MenuToggler';

const props = { toggler: jest.fn() };

describe('MenuToggler component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MenuToggler {...props} />, div);
  });
});
