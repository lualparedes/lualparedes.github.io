import React from 'react';
import ReactDOM from 'react-dom';

import { SvgIcon } from './SvgIcon';

const props = {};

describe('SvgIcon component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SvgIcon {...props} />, div);
  });
});
