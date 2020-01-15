import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';

import { Context } from '../../context';

import Logo from '../Logo';
import SearchBox from '../SearchBox';
import ThemeMenu from '../ThemeMenu';

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
    <>
      <header className={`header theme--${theme}`}>
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
            className="header-items__item header-items__item--theme"
            onClick={toggleThemeMenu}
          >
            <span>theme</span>
          </li>
          <li
            className="header-items__item header-items__item--search"
            onClick={toggleSearchBox}
          >
            <span>search</span>
          </li>
        </ul>
      </header>
      {showThemeMenu && <ThemeMenu />}
      {showSearchBox && <SearchBox />}
    </>
  );
};

export { Header };
