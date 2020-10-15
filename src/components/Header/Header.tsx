import React, { useState } from 'react';

import MenuToggler from '../MenuToggler';
import SideMenu from '../SideMenu';

interface IProps {
  title?: string;
}

const Header = ({ title }: IProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <MenuToggler toggler={toggleMenu} />
        {title && <h1 className="header__title">{title}</h1>}
      </header>
      <SideMenu open={menuOpen} toggleOpen={toggleMenu} />
    </>
  );
};

export { Header };
