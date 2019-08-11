import React, { Component } from 'react';

import { g } from '../../../assets/scripts';

export default class Header extends Component {
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
