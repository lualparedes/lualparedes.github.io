import React, { Component } from 'react';
import './modal-video.component.css';

import { g } from '../../../assets/scripts';

export default class ModalVideo extends Component {

    constructor(props) {
        super(props);
    }

    hideModal() {
        g('.js-modal').classList.add('a-modal-hide');
        g('.js-backdropModal').classList.add('a-backdrop-hide');
        g('.js-modal').classList.remove('a-modal-show');
        g('.js-backdropModal').classList.remove('a-backdrop-show');

        setTimeout(() => {
            g('.js-modal').classList.remove('a-modal-hide');
            g('.js-backdropModal').classList.remove('a-backdrop-hide');
        }, 1000);        
    }

    render() {
        return (
            <div className="ModalVideo">
                <div className="backdrop js-backdropModal">
                    <div className="modal-close icon-close" onClick={this.hideModal}></div>
                    <div className="wrap">
                        <div className="modal js-modal">
                            <iframe src="https://www.youtube.com/embed/_vT4qcszE6g" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}