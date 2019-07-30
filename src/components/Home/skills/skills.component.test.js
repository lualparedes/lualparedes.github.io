import React from 'react';
import ReactDOM from 'react-dom';
import Skills from './skills.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Skills />, div);
});