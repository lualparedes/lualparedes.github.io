import React from 'react';
import ReactDOM from 'react-dom';
import ProjectImage from './project-image.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectImage />, div);
});