import React from 'react';
import { FormattedMessage } from 'react-intl';

import HeaderLink from '../Header/HeaderLink';
import messages from './messages';
import SearchBar from '../SearchBar';

function NavBar() {
  return (
    <div>
      <HeaderLink to="/">
        <FormattedMessage {...messages.inicio} />
      </HeaderLink>
      <HeaderLink to="/novedades">
        <FormattedMessage {...messages.novedades} />
      </HeaderLink>
      <HeaderLink to="/buscador">
        <FormattedMessage {...messages.buscador} />
      </HeaderLink>
      <HeaderLink to="/registro">
        <FormattedMessage {...messages.registro} />
      </HeaderLink>
      <HeaderLink to="/iniciar">
        <FormattedMessage {...messages.iniciar} />
      </HeaderLink>
      <SearchBar
        type="text"
        arialabel="Buscador"
        placehold="search"
        className1="white-text material-icons prefix"
        className2="input-field red-text"
        className3="autocomplete white-text"
      />
    </div>
  );
}

export default NavBar;
