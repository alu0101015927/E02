import React from 'react';
// import PropTypes from 'prop-types';

import ElementVideogame from '../ElementVideogame';
// import messages from './messages';

function VideoGamescategory(props) {
  return (
    <div>
      <ul
        id="libros"
        className="tabs tab-demo z-depth-1"
        onFocus="toggleFocus(this)"
        onBlur="toggleFocus(this)"
      >
        {props.src.map((src, srcIndex) => (
          <ElementVideogame
            image_src={src}
            image_alt={props.alt[srcIndex]}
            reference={props.ref[srcIndex]}
            message={props.message[srcIndex]}
          />
        ))}
      </ul>
    </div>
  );
}

VideoGamescategory.propTypes = {
  src: ['', '', '', ''],
  alt: ['', '', '', ''],
  ref: ['', '', '', ''], // ruta
  message: ['', '', ''], // titulo videojuego
};

export default VideoGamescategory;
