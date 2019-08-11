import React from 'react';
import ReactDOM from 'react-dom';

import Emoji from './Emoji';

describe('Emoji component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Emoji emoji="😊" />, div);
  });
});
