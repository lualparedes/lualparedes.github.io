import React, { useContext } from 'react';

import { Context, Theme } from '../../context';

import Button from '../Button';
import SvgIcon from '../SvgIcon';

import IconLightModeLightSelected from './icons/light-mode-light-selected.svg';
import IconDuskModeLight from './icons/dusk-mode-light.svg';
import IconDarkModeLight from './icons/dark-mode-light.svg';

import IconLightModeDusk from './icons/light-mode-dusk.svg';
import IconDuskModeDuskSelected from './icons/dusk-mode-dusk-selected.svg';
import IconDarkModeDusk from './icons/dark-mode-dusk.svg';

import IconLightModeDark from './icons/light-mode-dark.svg';
import IconDuskModeDark from './icons/dusk-mode-dark.svg';
import IconDarkModeDarkSelected from './icons/dark-mode-dark-selected.svg';

const ThemeMenu = (): JSX.Element => {
  const [theme, setTheme] = useContext(Context);

  const changeTheme = (themeMode: Theme) => () => {
    window.localStorage.setItem('theme', themeMode);
    setTheme(themeMode);
  };

  const IconLight =
    theme === 'light' ? (
      <SvgIcon
        alt="IconLightModeLightSelected"
        svg={IconLightModeLightSelected}
      />
    ) : theme === 'dusk' ? (
      <SvgIcon alt="IconLightModeDusk" svg={IconLightModeDusk} />
    ) : (
      <SvgIcon alt="IconLightModeDark" svg={IconLightModeDark} />
    );
  const IconDusk =
    theme === 'dusk' ? (
      <SvgIcon alt="IconDuskModeDuskSelected" svg={IconDuskModeDuskSelected} />
    ) : theme === 'light' ? (
      <SvgIcon alt="IconDuskModeLight" svg={IconDuskModeLight} />
    ) : (
      <SvgIcon alt="IconDuskModeDark" svg={IconDuskModeDark} />
    );
  const IconDark =
    theme === 'dark' ? (
      <SvgIcon alt="IconDarkModeDarkSelected" svg={IconDarkModeDarkSelected} />
    ) : theme === 'light' ? (
      <SvgIcon alt="IconDarkModeLight" svg={IconDarkModeLight} />
    ) : (
      <SvgIcon alt="IconDarkModeDusk" svg={IconDarkModeDusk} />
    );

  return (
    <div className={`theme-menu theme--${theme}`}>
      <Button
        className={`theme-menu__item${
          theme === 'light' ? ' theme-menu__item--selected' : ''
        }`}
        endIcon={IconLight}
        onClick={changeTheme('light')}
      >
        Light
      </Button>
      <Button
        className={`theme-menu__item${
          theme === 'dusk' ? ' theme-menu__item--selected' : ''
        }`}
        endIcon={IconDusk}
        onClick={changeTheme('dusk')}
      >
        Dusk
      </Button>
      <Button
        className={`theme-menu__item${
          theme === 'dark' ? ' theme-menu__item--selected' : ''
        }`}
        endIcon={IconDark}
        onClick={changeTheme('dark')}
      >
        Dark
      </Button>
    </div>
  );
};

export { ThemeMenu };
