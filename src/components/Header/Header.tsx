import React, { useState } from 'react';

import MenuToggler from '../MenuToggler';
import SideMenu from '../SideMenu';

const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <MenuToggler toggler={toggleMenu} />
      </header>
      <SideMenu open={menuOpen} toggleOpen={toggleMenu} />
    </>
  );
};

export { Header };
