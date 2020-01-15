import React from 'react';

import { init } from './context';

describe('context.init', () => {
  it('returns default value when no theme is stored in localStorage', () => {
    expect(init()).toBe('light');
  });

  it('gets theme stored in localStorage', () => {
    window.localStorage.setItem('theme', 'dark');
    expect(init()).toBe('dark');
  });
});
