import React from 'react';
import ReactDOM from 'react-dom';
import EducationAndExperience from './education-and-experience.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EducationAndExperience />, div);
});