import React from 'react';
import ReactDOM from 'react-dom';
import ProjectContent from './project-content.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectContent />, div);
});