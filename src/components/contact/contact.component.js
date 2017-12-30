import React, { Component } from 'react';
import './contact.component.css';

export default class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Contact">
                <div className="wrap">
                    <h2 className="section-title">
                        Contact
                    </h2>
                    <div className="row">
                        <div className="col-2">
                            <h3 className="mini-header">
                                Location
                            </h3>
                            <p>
                                Currently based in Caracas (EST + 1 h), planning to move to Bogotá in 2018 (EST)
                            </p>
                        </div>
                        <div className="col-2">
                            <h3 className="mini-header">
                                Email
                            </h3>
                            <p>
                                <a href="mailto:lualdevelopment@gmail.com">lualdevelopment@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}