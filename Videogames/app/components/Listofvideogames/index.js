import React from 'react';
import PropTypes from 'prop-types';

import ElementVideogame from '../ElementVideogame';
// import messages from './messages';

function Listofvideogames(props) {
  return (
    <ul
      id="libros"
      className="tabs tab-demo z-depth-1"
      onFocus="toggleFocus(this)"
      onBlur="toggleFocus(this)"
    >
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
      <ElementVideogame
        image_src={props.src}
        image_alt={props.alt}
        reference={props.ref}
        message={props.message}
      />
    </ul>
  );
}

Listofvideogames.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  ref: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Listofvideogames;
