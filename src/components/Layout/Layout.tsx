import React, { useState } from 'react';
import { Link } from 'gatsby';

import { Context, defaultContext } from '../../context';
import DesktopHeader from '../DesktopHeader';
import Header from '../Header';
import SEO from '../SEO';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  headerTitle?: string;
  title: string;
}

const Layout = ({ children, headerTitle, title }: IProps) => {
  const [theme, setTheme] = useState(defaultContext[0]);
  return (
    <Context.Provider value={[theme, setTheme]}>
      <div className={`layout theme--${theme}`}>
        <SEO title={title} />
        <Header title={headerTitle} />
        <DesktopHeader />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Context.Provider>
  );
};

export default Layout;
