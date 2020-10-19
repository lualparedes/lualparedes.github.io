import React from 'react';
import ReactDOM from 'react-dom';

import { FeaturedPosts } from './FeaturedPosts';

const props = {};

describe('FeaturedPosts component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeaturedPosts {...props} />, div);
  });
});
