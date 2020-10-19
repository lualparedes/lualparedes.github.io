import React from 'react';
import ReactDOM from 'react-dom';

import { LatestPost } from './LatestPost';

const props = {};

describe('LatestPost component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LatestPost {...props} />, div);
  });
});
