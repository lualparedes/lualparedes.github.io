import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';

const props = { title: '' };

describe('Layout component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout {...props} />, div);
  });
});
