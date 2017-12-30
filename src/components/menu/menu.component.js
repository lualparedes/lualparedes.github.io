import React, { Component } from 'react';
import './menu.component.css';

export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Menu">
                <div className="icon-close"></div>
                <ul className="menu-items">
                    <li className="menu-items__item">Projects</li>
                    <li className="menu-items__item">Education</li>
                    <li className="menu-items__item">Experience</li>
                    <li className="menu-items__item">Skills</li>
                    <li className="menu-items__item">Contact</li>
                </ul>
            </div>
        );
    }

}