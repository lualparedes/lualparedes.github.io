import React from 'react';
import ReactDOM from 'react-dom';

import { SubscribeBox } from './SubscribeBox';

const props = {};

describe('SubscribeBox component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubscribeBox {...props} />, div);
  });
});
