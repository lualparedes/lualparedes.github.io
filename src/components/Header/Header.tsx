import { Link } from 'gatsby';
import React, { useContext, useState } from 'react';

import { Context } from '../../context';

import Logo from '../Logo';
import SearchBox from '../SearchBox';
import ThemeMenu from '../ThemeMenu';
import Transition from '../Transition';

const Header = (): JSX.Element => {
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
    <div className={`header theme--${theme}`}>
      <header className="header-main">
        <Link className="header-logo" to="/">
          <Logo />
        </Link>
        <ul className="header-items">
          <li className="header-items__item">
            <Link to="about">me</Link>
          </li>
          <li className="header-items__item">
            <Link to="blog">blog</Link>
          </li>
          <li
            className={`header-items__item header-items__item--theme${
              showThemeMenu ? ' header-items__item--selected' : ''
            }`}
            onClick={toggleThemeMenu}
          >
            <span>theme</span>
          </li>
          <li
            className={`header-items__item header-items__item--search${
              showSearchBox ? ' header-items__item--selected' : ''
            }`}
            onClick={toggleSearchBox}
          >
            <span>search</span>
          </li>
        </ul>
      </header>
      <Transition className="transition--theme-menu" inProp={showThemeMenu}>
        <ThemeMenu />
      </Transition>
      <Transition className="transition--search-box" inProp={showSearchBox}>
        <SearchBox />
      </Transition>
    </div>
  );
};

export { Header };
