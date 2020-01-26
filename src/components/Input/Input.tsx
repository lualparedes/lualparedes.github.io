import React, { useContext } from 'react';

import { Context } from '../../context';

interface IProps {
  className?: string;
}

const Input = ({ className = '' }: IProps): JSX.Element => {
  const [theme] = useContext(Context);
  return <input className={`input theme--${theme} ${className}`} type="text" />;
};

export { Input };
