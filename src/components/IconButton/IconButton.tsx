import React, { useContext } from 'react';

import { Context } from '../../context';

interface IProps {
  children: JSX.Element;
  onClick: () => void;
  variant?: 'contained' | 'text';
}

const IconButton = ({
  children,
  onClick,
  variant = 'text',
}: IProps): JSX.Element => {
  const [theme] = useContext(Context);
  return (
    <button
      className={`theme--${theme} icon-button icon-button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { IconButton };
