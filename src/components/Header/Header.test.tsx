import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './Header';

const props = {};

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...props} />, div);
  });
});
