import React from 'react';

import { Link } from 'gatsby';

interface IProps {
  homeVariantContext?: {
    goTo: () => void;
    refs: { [key: string]: React.RefObject<HTMLDivElement> };
  };
  open: boolean;
  toggleOpen: () => void;
  variant?: 'home';
}

const SideMenu = ({
  homeVariantContext = {},
  open,
  toggleOpen,
  variant,
}: IProps): JSX.Element => {
  const { goTo, refs } = homeVariantContext;
  return variant === 'home' ? (
    <nav className={`side-menu${open ? ' side-menu--open' : ''}`}>
      <div className="icon-close side-menu-close" onClick={toggleOpen} />
      <ul className="side-menu-items">
        <li className="side-menu-items__item" onClick={goTo(refs.projects)}>
          Projects
        </li>
        <li
          className="side-menu-items__item"
          onClick={goTo(refs.educationAndExperience)}
        >
          Education
        </li>
        <li
          className="side-menu-items__item"
          onClick={goTo(refs.educationAndExperience)}
        >
          Experience
        </li>
        <li className="side-menu-items__item" onClick={goTo(refs.skills)}>
          Skills
        </li>
        <li className="side-menu-items__item" onClick={goTo(refs.contact)}>
          Contact
        </li>
      </ul>
    </nav>
  ) : (
    <nav className={`side-menu${open ? ' side-menu--open' : ''}`}>
      <div className="icon-close side-menu-close" onClick={toggleOpen} />
      <ul className="side-menu-items">
        <li className="side-menu-items__item">
          <Link to="/">me</Link>
        </li>
        <li className="side-menu-items__item">
          <Link to="blog">blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export { SideMenu };
