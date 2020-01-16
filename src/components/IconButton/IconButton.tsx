import React, { useContext } from 'react';

import { Context } from '../../context';

interface IProps {
  children: JSX.Element;
  onClick: () => void;
  variant?: 'contained' | 'text';
}

const IconButton = ({ children, onClick, variant }: IProps): JSX.Element => {
  const [theme] = useContext(Context);
  const cssVariant = variant ? `icon-button--${variant}` : 'icon-button--text';
  return (
    <button
      className={`theme--${theme} icon-button ${cssVariant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { IconButton };