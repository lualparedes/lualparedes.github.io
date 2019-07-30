import React, { Component } from 'react';
import './cta.component.css';

export default class Cta extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Cta">
                <div className="wrap">
                    <p className="biggie">
                        Are you looking for a frontend developer?
                    </p>
                    <p className="biggie">
                        <strong>I look forward to being part of your team!</strong><br/>
                        Just <a href="mailto:lualdevelopment@gmail.com">shoot me 
                        a message</a> and I'll get back to you asap 😀
                    </p>
                </div>
            </div>
        );
    }

}