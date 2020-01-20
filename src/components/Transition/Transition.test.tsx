import React from 'react';
import ReactDOM from 'react-dom';

import { Transition } from './Transition';

const props = {
  children: <div />,
  inProp: true,
};

describe('Transition component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Transition {...props} />, div);
  });
});
