import React, { createContext } from 'react';

export type Theme = 'light' | 'dusk' | 'dark';

export const defaultContext: [Theme, React.Dispatch<Theme>] = [
  'light',
  () => {},
];
export const Context = createContext(defaultContext);
