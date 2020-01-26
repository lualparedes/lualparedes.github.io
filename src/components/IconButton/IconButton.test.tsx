import React from 'react';
import ReactDOM from 'react-dom';

import { IconButton } from './IconButton';

const props = {
  children: <img />,
  onClick: jest.fn(),
  variant: 'contained' as any,
};

describe('IconButton component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IconButton {...props} />, div);
  });
});
