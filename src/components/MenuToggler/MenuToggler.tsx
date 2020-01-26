import React, { useContext } from 'react';

import { Context } from '../../context';

interface IProps {
  toggler: () => void;
  variant?: 'default' | 'home';
}

const MenuToggler = ({ toggler, variant = 'default' }: IProps): JSX.Element => {
  const [theme] = useContext(Context);
  console.log(variant === 'home');
  const cssClasses = variant === 'home' ? '' : ` theme--${theme}`;
  return (
    <div
      className={`menu-toggler${cssClasses}`}
      onClick={toggler}
      role="button"
    >
      <span role="presentation" />
      <span role="presentation" />
      <span role="presentation" />
    </div>
  );
};

export { MenuToggler };
