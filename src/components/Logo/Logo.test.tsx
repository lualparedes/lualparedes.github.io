import React from 'react';
import ReactDOM from 'react-dom';

import { Logo } from './Logo';

const props = {};

describe('Logo component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo {...props} />, div);
  });
});
