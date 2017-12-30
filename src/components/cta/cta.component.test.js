import React from 'react';
import ReactDOM from 'react-dom';
import Cta from './cta.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cta />, div);
});