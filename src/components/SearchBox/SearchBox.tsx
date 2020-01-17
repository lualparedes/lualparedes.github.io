import React, { useContext } from 'react';

import { Context } from '../../context';

import IconButton from '../IconButton';
import Input from '../Input';
import SvgIcon from '../SvgIcon';

import IconSearchDefault from '../../../content/assets/icons/search.svg';
import IconSearchDark from '../../../content/assets/icons/search-dark.svg';

const SearchBox = (): JSX.Element => {
  const [theme] = useContext(Context);

  const search = () => {
    console.log('search');
  };

  const icon = theme === 'dark' ? IconSearchDark : IconSearchDefault;

  return (
    <div className={`search-box theme--${theme}`}>
      <Input className="search-box__input" />
      <IconButton onClick={search}>
        <SvgIcon alt="Search" svg={icon} />
      </IconButton>
    </div>
  );
};

export { SearchBox };
