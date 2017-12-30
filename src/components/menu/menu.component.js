import React, { Component } from 'react';
import './menu.component.css';

import { g } from '../../assets/scripts';

export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    closeMenu() {
        g('.js-Menu').style.left = '';
    }

    goToSection(section) {
        window.scroll(0, g('#'+section).offsetTop);
        this.closeMenu();
    }

    render() {
        return (
            <div className="Menu js-Menu">
                <div className="icon-close menu-close" onClick={this.closeMenu}></div>
                <ul className="menu-items">
                    <li 
                        className="menu-items__item" 
                        onClick={() => this.goToSection('projects')}
                    >Projects</li>
                    <li 
                        className="menu-items__item" 
                        onClick={() => this.goToSection('education-and-experience')}
                    >Education</li>
                    <li 
                        className="menu-items__item" 
                        onClick={() => this.goToSection('education-and-experience')}
                    >Experience</li>
                    <li 
                        className="menu-items__item" 
                        onClick={() => this.goToSection('skills')}
                    >Skills</li>
                    <li 
                        className="menu-items__item" 
                        onClick={() => this.goToSection('contact')}
                    >Contact</li>
                </ul>
            </div>
        );
    }

}