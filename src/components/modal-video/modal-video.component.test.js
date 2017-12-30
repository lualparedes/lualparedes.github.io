import React from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from './modal-video.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalVideo />, div);
});