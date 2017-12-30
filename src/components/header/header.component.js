import React, { Component } from 'react';
import './header.component.css';

import { g } from '../../assets/scripts';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    openMenu() {
        g('.js-Menu').style.left = 0;
    }

    render() {
        return (
            <div className="Header">
                <div className="wrap wrap--wide">
                    <div className="icon-menu js-iconMenu" onClick={this.openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }

}