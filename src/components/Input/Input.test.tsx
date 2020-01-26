import React from 'react';
import ReactDOM from 'react-dom';

import { Input } from './Input';

const props = {};

describe('Input component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input {...props} />, div);
  });
});
