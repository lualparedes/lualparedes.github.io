import React from 'react';

interface IProps {
  toggler: () => void;
}

const MenuToggler = ({ toggler }: IProps): JSX.Element => {
  return (
    <div className="menu-toggler" onClick={toggler} role="button">
      <span role="presentation" />
      <span role="presentation" />
      <span role="presentation" />
    </div>
  );
};

export { MenuToggler };
