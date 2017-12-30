import React, { Component } from 'react';
import './footer.component.css';

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Footer">
                <p>Designed and coded with ❤️ by Luis Paredes</p>
                <p>
                    <a href="https://github.com/lualparedes" target="_blank">GitHub</a> |&nbsp;
                    <a href="https://www.behance.net/lual" target="_blank">Behance</a> |&nbsp;
                    <a href="https://www.linkedin.com/in/luisalbertoparedes/" target="_blank">LinkedIn</a>
                </p>
            </div>
        );
    }

}