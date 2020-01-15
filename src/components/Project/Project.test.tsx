import React from 'react';
import ReactDOM from 'react-dom';

import { Project } from './Project';

const props = {
  description: '',
  img: '',
  liveLink: '',
  onClickImg: jest.fn(),
  sourceLink: '',
  stack: '',
  title: '',
  variant: 'left' as any,
};

describe('Project component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Project {...props} />, div);
  });
});
