import React, { Component } from 'react';
import './hero.component.css';

import Me from './me.png';

export default class Hero extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Hero">
                <div className="hero-wrap wrap wrap--wide">
                    <div className="hero-text biggie">
                        <p>
                            Hey! I’m Luis Paredes and <strong>I love building web experiences 
                            that are visually rich and performant</strong>.
                        </p>
                        <p>
                            I’m a firm believer that <strong>good engineering and good 
                            design have to go hand-in-hand</strong>, and for this reason, 
                            I strive to accomplish exactly that in every single 
                            project I create.
                        </p>
                        <div className="hero-text__scroll icon-scroll">
                        </div>
                    </div>
                    <div className="hero-img">
                        <img src={Me} alt="Me"/>
                        <div className="hero-img__badge icon-badge">
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}