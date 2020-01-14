import React from 'react';
import ReactDOM from 'react-dom';

import { SearchBox } from './SearchBox';

const props = {};

describe('SearchBox component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBox {...props} />, div);
  });
});
