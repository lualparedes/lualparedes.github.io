import { Link } from 'gatsby';
import React, { useContext, useState } from 'react';

import { Context } from '../../context';

import Logo from '../Logo';
import SearchBox from '../SearchBox';
import ThemeMenu from '../ThemeMenu';
import Transition from '../Transition';

const DesktopHeader = (): JSX.Element => {
  const [theme] = useContext(Context);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const toggleSearchBox = () => {
    setShowThemeMenu(false);
    setShowSearchBox(!showSearchBox);
  };

  const toggleThemeMenu = () => {
    setShowSearchBox(false);
    setShowThemeMenu(!showThemeMenu);
  };

  return (
    <header className={`desktop-header theme--${theme}`}>
      <nav className="desktop-header-nav">
        <Link className="desktop-header-logo" to="/">
          <Logo />
        </Link>
        <ul className="desktop-header-items">
          <li className="desktop-header-items__item">
            <Link to="/">me</Link>
          </li>
          <li className="desktop-header-items__item">
            <Link to="blog">blog</Link>
          </li>
          <li
            className={`desktop-header-items__item desktop-header-items__item--theme${
              showThemeMenu ? ' desktop-header-items__item--selected' : ''
            }`}
            onClick={toggleThemeMenu}
          >
            <span>theme</span>
          </li>
          <li
            className={`desktop-header-items__item desktop-header-items__item--search${
              showSearchBox ? ' desktop-header-items__item--selected' : ''
            }`}
            onClick={toggleSearchBox}
          >
            <span>search</span>
          </li>
        </ul>
      </nav>
      <Transition className="transition--theme-menu" inProp={showThemeMenu}>
        <ThemeMenu />
      </Transition>
      <Transition className="transition--search-box" inProp={showSearchBox}>
        <SearchBox />
      </Transition>
    </header>
  );
};

export { DesktopHeader };
