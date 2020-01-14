import React, { useContext } from 'react';

import { Context } from '../../context';

import LogoDark from './logo-dark.svg';
import LogoDefault from './logo-default.svg';

const Logo = (): JSX.Element => {
  const [theme] = useContext(Context);
  return (
    <img
      alt="Lual Dev Logo"
      className="logo"
      src={theme === 'dark' ? LogoDark : LogoDefault}
    />
  );
};

export { Logo };
