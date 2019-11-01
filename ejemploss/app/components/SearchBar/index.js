import React from 'react';
// import PropTypes from 'prop-types';

function SearchBar(props) {
  return (
    <div className={props.className2}>
      <i className={props.className1} />
      <input
        type={props.type}
        aria-label={props.arialabel}
        placeholder={props.placehold}
        className={props.className3}
        onFocus={props.on}
        onBlur={props.on}
      />
    </div>
  );
}

SearchBar.propTypes = {
  type: 'text',
  arialabel: 'Buscador',
  placehold: 'search',
  className1: 'white-text material-icons prefix',
  className2: 'input-field red-text',
  className3: 'autocomplete white-text',
  on: 'toggleFocus(this)',
};

export default SearchBar;
