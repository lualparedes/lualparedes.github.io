import React, { Component } from 'react';
import './skills.component.css';

export default class Skills extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Skills" id="skills">
                <div className="wrap">
                    <h3 className="skills-header section-title">
                        Skills
                    </h3>
                    <ul className="skills-container">
                        <li className="skills-container__item">
                            <h3 className="mini-header">HTML5</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">CSS3</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">JavaScript</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">CSS Methodologies</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">React</h3>
                            <p>Intermediate</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">Angular</h3>
                            <p>Intermediate</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">Sass</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">TypesScript</h3>
                            <p>Intermediate</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">Git</h3>
                            <p>Intermediate</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">NodeJS</h3>
                            <p>Basic</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">Linux console</h3>
                            <p>Basic</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">OOP</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">UI Design</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">Jekyll</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">jQuery</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">WordPress</h3>
                            <p>Advanced</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">Python</h3>
                            <p>Basic</p>
                        </li>
                        <li className="skills-container__item">
                            <h3 className="mini-header">PHP</h3>
                            <p>Basic</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}