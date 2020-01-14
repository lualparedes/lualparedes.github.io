import React, { useContext } from 'react';

import { Context } from '../../context';

const ThemeMenu = (): JSX.Element => {
  const [theme, setTheme] = useContext(Context);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dusk');
    } else {
      setTheme('light');
    }
  };

  return <div className="theme-menu">ThemeMenu</div>;
};

export { ThemeMenu };
