import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  return (
    <div className={props.className2}>
      <i className={props.className1} />
      <input
        type={props.type}
        aria-label={props.arialabel}
        placeholder={props.placehold}
        className={props.className3}
      />
    </div>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string,
  arialabel: PropTypes.string,
  placehold: PropTypes.string,
  className1: PropTypes.string,
  className2: PropTypes.string,
  className3: PropTypes.string,
};

export default SearchBar;
