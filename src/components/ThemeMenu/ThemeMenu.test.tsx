import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeMenu } from './ThemeMenu';

const props = {};

describe('ThemeMenu component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeMenu {...props} />, div);
  });
});
