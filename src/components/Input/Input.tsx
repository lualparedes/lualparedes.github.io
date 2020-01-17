import React, { useContext } from 'react';

import { Context } from '../../context';

const Input = (): JSX.Element => {
  const [theme] = useContext(Context);
  return <input className={`input theme--${theme}`} type="text" />;
};

export { Input };
