import React, { createContext } from 'react';

export type Theme = 'light' | 'dusk' | 'dark';

export const init = (): Theme => {
  if (!!window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme') as Theme;
  }
  return 'light';
};

const theme = init();
export const defaultContext: [Theme, React.Dispatch<Theme>] = [theme, () => {}];
export const Context = createContext(defaultContext);
